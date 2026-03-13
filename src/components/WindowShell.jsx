/**
 * @file WindowShell.jsx - 데스크톱 윈도우 쉘 컴포넌트
 *
 * macOS 스타일의 윈도우 프레임을 제공한다.
 * 데스크톱과 모바일에서 다르게 동작한다:
 *
 * 데스크톱:
 *   - 드래그로 윈도우 이동
 *   - 우하단 핸들로 리사이즈
 *   - 신호등 버튼 (빨강=닫기, 노랑=최소화, 초록=전체화면)
 *   - 타이틀바 더블클릭으로 전체화면 토글
 *   - 첫 렌더링 시 화면 중앙에 자동 배치 (오프셋으로 캐스케이드)
 *
 * 모바일:
 *   - 항상 전체화면 bottom-sheet 형태
 *   - 헤더를 아래로 스와이프하여 닫기 (120px 이상)
 *   - body 스크롤 잠금
 *
 * @exports WindowShell
 */

import { useRef, useEffect, useCallback, useState } from 'react';
import useDesktop from '../hooks/useDesktop.js';
import '../styles/components/window-shell.css';

/** 윈도우 최소 크기 (px) */
const MIN_W = 400;
const MIN_H = 260;
/** 모바일 판별 기준 브레이크포인트 (px) */
const MOBILE_BP = 768;

const isMobile = () => window.innerWidth <= MOBILE_BP;

/** 모바일에서 스와이프로 닫기 위한 최소 이동 거리 (px) */
const DISMISS_SWIPE = 120;

/**
 * WindowShell - 윈도우 프레임 컴포넌트
 * @param {string} windowId - 데스크톱 컨텍스트에서의 윈도우 식별자
 * @param {string} title - 타이틀바에 표시할 제목
 * @param {React.ReactNode} titleExtra - 제목 옆에 표시할 추가 요소 (배지 등)
 * @param {Function} onClose - 닫기 버튼 클릭 시 콜백
 * @param {boolean} resizable - 리사이즈 가능 여부 (기본: true)
 * @param {string} className - 추가 CSS 클래스
 * @param {React.ReactNode} children - 윈도우 콘텐츠
 */
const WindowShell = ({ windowId, title, titleExtra, onClose, resizable = true, className = '', children }) => {
  const desktop = useDesktop();
  const desktopRef = useRef(desktop);
  useEffect(() => { desktopRef.current = desktop; });
  const windowRef = useRef(null);
  const dragRef = useRef(null);
  const resizeRef = useRef(null);
  const cleanupRef = useRef([]);
  const sheetTimerRef = useRef(null);

  // Mobile swipe-to-dismiss state (translateY offset in px)
  const [sheetOffset, setSheetOffset] = useState(0);
  const [sheetDragging, setSheetDragging] = useState(false);
  const sheetDragRef = useRef(null);

  const win = desktop.getWindow(windowId);

  useEffect(() => {
    return () => { cleanupRef.current.forEach((fn) => fn()); cleanupRef.current = []; clearTimeout(sheetTimerRef.current); };
  }, []);

  const winState = win?.state;

  // Mobile: lock body scroll when bottom-sheet is visible
  useEffect(() => {
    if (!isMobile() || !winState) return;
    const visible = winState !== 'minimized';
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [winState]);

  // Auto-center on first render if position not set (desktop only)
  useEffect(() => {
    if (isMobile()) return;
    const d = desktopRef.current;
    const currentWin = d.getWindow(windowId);
    if (currentWin && currentWin.position.x === null && windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      const offset = (d.windows.indexOf(currentWin)) * 24;
      d.moveWindow(windowId, {
        x: Math.max(0, (window.innerWidth - rect.width) / 2 + offset),
        y: Math.max(40, (window.innerHeight - rect.height) / 2.5 + offset),
      });
    }
  }, [windowId]);

  const handleFocus = useCallback(() => {
    if (desktop.activeWindowId !== windowId) {
      desktop.focusWindow(windowId);
    }
  }, [desktop, windowId]);

  // Helper: attach move/up listeners and auto-cleanup on unmount
  const addDragListeners = useCallback((move, up) => {
    const detach = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', handleUp);
    };
    const handleUp = (ev) => { up(ev); detach(); cleanupRef.current = cleanupRef.current.filter((fn) => fn !== detach); };
    cleanupRef.current.push(detach);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', handleUp);
  }, []);

  // Desktop drag
  const startDrag = useCallback((e) => {
    const currentWin = desktopRef.current.getWindow(windowId);
    if (!currentWin || currentWin.state === 'fullscreen' || isMobile()) return;
    e.preventDefault();
    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragRef.current = { sx: e.clientX, sy: e.clientY, ox: rect.left, oy: rect.top };
    addDragListeners(
      (ev) => { const d = dragRef.current; if (d) desktopRef.current.moveWindow(windowId, { x: d.ox + ev.clientX - d.sx, y: d.oy + ev.clientY - d.sy }); },
      () => { dragRef.current = null; },
    );
  }, [windowId, addDragListeners]);

  // Desktop resize
  const startResize = useCallback((e) => {
    const currentWin = desktopRef.current.getWindow(windowId);
    if (!currentWin || currentWin.state === 'fullscreen') return;
    e.preventDefault();
    e.stopPropagation();
    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;
    resizeRef.current = { sx: e.clientX, sy: e.clientY, ow: rect.width, oh: rect.height };
    addDragListeners(
      (ev) => { const r = resizeRef.current; if (r) desktopRef.current.resizeWindow(windowId, { w: Math.max(MIN_W, r.ow + ev.clientX - r.sx), h: Math.max(MIN_H, r.oh + ev.clientY - r.sy) }); },
      () => { resizeRef.current = null; },
    );
  }, [windowId, addDragListeners]);

  // Mobile swipe-down-to-dismiss on header
  const startSheetDrag = useCallback((e) => {
    const touch = e.touches[0];
    sheetDragRef.current = { startY: touch.clientY };
    setSheetDragging(true);

    const move = (ev) => {
      const d = sheetDragRef.current;
      if (!d) return;
      const dy = Math.max(0, ev.touches[0].clientY - d.startY); // only allow downward
      setSheetOffset(dy);
    };

    const endWithCheck = (ev) => {
      const d = sheetDragRef.current;
      const dy = d ? Math.max(0, ev.changedTouches[0].clientY - d.startY) : 0;
      sheetDragRef.current = null;
      setSheetDragging(false);

      if (dy > DISMISS_SWIPE) {
        // Animate off-screen then close
        setSheetOffset(window.innerHeight);
        clearTimeout(sheetTimerRef.current);
        sheetTimerRef.current = setTimeout(() => {
          onClose();
          setSheetOffset(0);
        }, 250);
      } else {
        setSheetOffset(0);
      }

      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', endWithCheck);
      cleanupRef.current = cleanupRef.current.filter((fn) => fn !== cleanup);
    };

    const cleanup = () => { window.removeEventListener('touchmove', move); window.removeEventListener('touchend', endWithCheck); };
    cleanupRef.current.push(cleanup);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchend', endWithCheck);
  }, [onClose]);

  if (!win) return null;

  const isMinimized = win.state === 'minimized';
  const isFullscreen = win.state === 'fullscreen';
  const isActive = desktop.activeWindowId === windowId;
  const mobile = isMobile();

  // Style computation
  let style;
  if (isMinimized) {
    style = { display: 'none' };
  } else if (mobile) {
    // Mobile: always full-screen, swipe down to dismiss
    style = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '100%',
      zIndex: 10000 + win.zIndex,
      borderRadius: '0',
      transform: sheetOffset > 0 ? `translateY(${sheetOffset}px)` : undefined,
      transition: sheetDragging ? 'none' : 'transform 0.25s ease',
    };
  } else if (isFullscreen) {
    style = {};
  } else {
    style = {
      width: win.size.w,
      height: win.size.h,
      zIndex: 10000 + win.zIndex,
      ...(win.position.x !== null ? { left: win.position.x, top: win.position.y } : {}),
    };
  }

  return (
    <>
      <div
        ref={windowRef}
        className={`wsh ${isFullscreen && !mobile ? 'wsh-fullscreen' : ''} ${isActive ? 'wsh-active' : ''} ${mobile ? 'wsh-mobile' : ''} ${className}`}
        style={style}
        onMouseDown={handleFocus}
      >
        {/* Mobile: header bar with title + close */}
        {mobile && (
          <div className="wsh-sheet-header" onTouchStart={startSheetDrag}>
            <div className="wsh-sheet-header__row">
              <span className="wsh-title">{title}</span>
              {titleExtra || null}
              <button className="wsh-close-btn" onClick={onClose} aria-label="닫기">✕</button>
            </div>
            <div className="wsh-drag-handle" />
          </div>
        )}

        {/* Desktop: full titlebar with traffic lights */}
        {!mobile && (
          <div className="wsh-titlebar" onMouseDown={startDrag} onDoubleClick={() => desktop.fullscreenWindow(windowId)}>
            <div className="traffic-lights">
              <span className="dot r" onMouseDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); onClose(); }} title="닫기" />
              <span className="dot y" onMouseDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); desktop.minimizeWindow(windowId); }} title="최소화" />
              <span className="dot g" onMouseDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); desktop.fullscreenWindow(windowId); }} title={isFullscreen ? '축소' : '전체화면'} />
            </div>
            <span className="wsh-title">{title}</span>
            {titleExtra || null}
          </div>
        )}

        {/* Content */}
        <div className="wsh-content">
          {children}
        </div>

        {/* Desktop resize handle */}
        {!mobile && resizable && !isFullscreen && (
          <div className="wsh-resize-handle" onMouseDown={startResize} />
        )}
      </div>
    </>
  );
};

export default WindowShell;

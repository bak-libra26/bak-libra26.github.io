import { useRef, useEffect, useCallback, useState } from 'react';
import useDesktop from '../hooks/useDesktop.js';
import '../styles/components/window-shell.css';

const MIN_W = 400;
const MIN_H = 260;
const MOBILE_BP = 768;

const isMobile = () => window.innerWidth <= MOBILE_BP;

// Mobile bottom-sheet snap points
const SNAP_HALF = 0.65;   // 65vh
const SNAP_FULL = 1;      // 100vh
const SNAP_UP_THRESHOLD = 0.8; // above 80vh → snap to full
const DISMISS_THRESHOLD = 0.3; // below 30vh → close

const WindowShell = ({ windowId, title, titleExtra, onClose, resizable = true, className = '', children }) => {
  const desktop = useDesktop();
  const desktopRef = useRef(desktop);
  useEffect(() => { desktopRef.current = desktop; });
  const windowRef = useRef(null);
  const dragRef = useRef(null);
  const resizeRef = useRef(null);
  const cleanupRef = useRef([]);

  // Mobile bottom-sheet state
  const [sheetHeight, setSheetHeight] = useState(SNAP_HALF); // 0-1 ratio of vh
  const [sheetDragging, setSheetDragging] = useState(false);
  const sheetHeightRef = useRef(SNAP_HALF);
  const sheetDragRef = useRef(null);

  // Reactive viewport height for mobile bottom-sheet
  const [vpHeight, setVpHeight] = useState(() => window.visualViewport?.height || window.innerHeight);
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const update = () => setVpHeight(vv.height);
    vv.addEventListener('resize', update);
    return () => vv.removeEventListener('resize', update);
  }, []);

  const win = desktop.getWindow(windowId);

  useEffect(() => {
    return () => { cleanupRef.current.forEach((fn) => fn()); cleanupRef.current = []; };
  }, []);

  // Reset sheet height when window is restored
  const winState = win?.state;
  useEffect(() => {
    if (winState === 'normal' && isMobile()) {
      const id = requestAnimationFrame(() => {
        sheetHeightRef.current = SNAP_HALF;
        setSheetHeight(SNAP_HALF);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [winState]);

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
        y: Math.max(40, (window.innerHeight - rect.height) / 3 + offset),
      });
    }
  }, [windowId]);

  const handleFocus = useCallback(() => {
    if (desktop.activeWindowId !== windowId) {
      desktop.focusWindow(windowId);
    }
  }, [desktop, windowId]);

  // Desktop drag
  const startDrag = useCallback((e) => {
    const currentWin = desktopRef.current.getWindow(windowId);
    if (!currentWin || currentWin.state === 'fullscreen' || isMobile()) return;
    e.preventDefault();
    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragRef.current = { sx: e.clientX, sy: e.clientY, ox: rect.left, oy: rect.top };
    const move = (ev) => {
      const d = dragRef.current;
      if (d) desktopRef.current.moveWindow(windowId, { x: d.ox + ev.clientX - d.sx, y: d.oy + ev.clientY - d.sy });
    };
    const up = () => {
      dragRef.current = null;
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      cleanupRef.current = cleanupRef.current.filter((fn) => fn !== cleanup);
    };
    const cleanup = () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
    cleanupRef.current.push(cleanup);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }, [windowId]);

  // Desktop resize
  const startResize = useCallback((e) => {
    const currentWin = desktopRef.current.getWindow(windowId);
    if (!currentWin || currentWin.state === 'fullscreen') return;
    e.preventDefault();
    e.stopPropagation();
    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;
    resizeRef.current = { sx: e.clientX, sy: e.clientY, ow: rect.width, oh: rect.height };
    const move = (ev) => {
      const r = resizeRef.current;
      if (r) desktopRef.current.resizeWindow(windowId, {
        w: Math.max(MIN_W, r.ow + ev.clientX - r.sx),
        h: Math.max(MIN_H, r.oh + ev.clientY - r.sy),
      });
    };
    const up = () => {
      resizeRef.current = null;
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      cleanupRef.current = cleanupRef.current.filter((fn) => fn !== cleanup);
    };
    const cleanup = () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
    cleanupRef.current.push(cleanup);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }, [windowId]);

  // Mobile bottom-sheet touch drag
  const startSheetDrag = useCallback((e) => {
    const touch = e.touches[0];
    const vh = window.visualViewport?.height || window.innerHeight;
    sheetDragRef.current = { startY: touch.clientY, startHeight: sheetHeightRef.current };
    setSheetDragging(true);

    const move = (ev) => {
      const d = sheetDragRef.current;
      if (!d) return;
      const deltaY = d.startY - ev.touches[0].clientY;
      const newRatio = Math.min(SNAP_FULL, Math.max(0.1, d.startHeight + deltaY / vh));
      sheetHeightRef.current = newRatio;
      setSheetHeight(newRatio);
    };

    const end = () => {
      sheetDragRef.current = null;
      setSheetDragging(false);
      const current = sheetHeightRef.current;

      if (current < DISMISS_THRESHOLD) {
        // Animate down to 0 then close
        sheetHeightRef.current = 0;
        setSheetHeight(0);
        setTimeout(() => {
          onClose();
          sheetHeightRef.current = SNAP_HALF;
          setSheetHeight(SNAP_HALF);
        }, 250);
      } else if (current < SNAP_UP_THRESHOLD) {
        sheetHeightRef.current = SNAP_HALF;
        setSheetHeight(SNAP_HALF);
      } else {
        sheetHeightRef.current = SNAP_FULL;
        setSheetHeight(SNAP_FULL);
      }

      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', end);
      cleanupRef.current = cleanupRef.current.filter((fn) => fn !== cleanup);
    };

    const cleanup = () => { window.removeEventListener('touchmove', move); window.removeEventListener('touchend', end); };
    cleanupRef.current.push(cleanup);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchend', end);
  }, [onClose]);

  // Mobile backdrop tap to close
  const handleBackdropTap = useCallback(() => {
    sheetHeightRef.current = 0;
    setSheetHeight(0);
    setTimeout(() => {
      onClose();
      sheetHeightRef.current = SNAP_HALF;
      setSheetHeight(SNAP_HALF);
    }, 250);
  }, [onClose]);

  if (!win) return null;

  const isMinimized = win.state === 'minimized';
  const isFullscreen = win.state === 'fullscreen';
  const isActive = desktop.activeWindowId === windowId;
  const mobile = isMobile();
  const isVisible = !isMinimized;

  // Style computation
  const vh = vpHeight;

  let style;
  if (isMinimized) {
    style = { display: 'none' };
  } else if (mobile) {
    const isFull = sheetHeight >= 0.95;
    const heightPx = isFull ? vh : Math.round(sheetHeight * vh);
    style = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      top: 'auto',
      width: '100%',
      height: heightPx,
      zIndex: 10000 + win.zIndex,
      borderRadius: isFull ? '0' : 'var(--radius-lg) var(--radius-lg) 0 0',
      transition: sheetDragging ? 'none' : 'height 0.25s ease, border-radius 0.2s ease',
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
      {/* Mobile backdrop */}
      {mobile && isVisible && (
        <div
          className="wsh-backdrop"
          style={{ zIndex: 10000 + win.zIndex - 1 }}
          onClick={handleBackdropTap}
        />
      )}

      <div
        ref={windowRef}
        className={`wsh ${isFullscreen && !mobile ? 'wsh-fullscreen' : ''} ${isActive ? 'wsh-active' : ''} ${mobile ? 'wsh-mobile' : ''} ${className}`}
        style={style}
        onMouseDown={handleFocus}
      >
        {/* Mobile: drag handle + minimal header */}
        {mobile && (
          <div className="wsh-sheet-header" onTouchStart={startSheetDrag}>
            <div className="wsh-drag-handle" />
            <span className="wsh-title">{title}</span>
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

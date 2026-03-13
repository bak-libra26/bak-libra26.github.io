/**
 * @file ShortcutBar - 화면 하단 독(Dock) 스타일의 단축키 바 컴포넌트
 *
 * 터미널 토글(Cmd+J), 단축키 목록(?) 등 고정 항목과
 * 현재 열려 있는 윈도우 목록을 동적으로 표시한다.
 * 윈도우 항목에서 우클릭 시 컨텍스트 메뉴(복원/최소화/전체화면/닫기)를 제공한다.
 */
import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { DesktopContext } from '../context/DesktopContext.jsx';
import '../styles/components/shortcut-bar.css';

/**
 * 키보드 접근성 핸들러 - Enter 또는 Space 키 입력 시 콜백을 실행한다
 * @param {Function} callback - 실행할 콜백 함수
 * @returns {Function} keydown 이벤트 핸들러
 */
const handleKeyDown = (callback) => (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
};

/** 윈도우 타입별 기본 아이콘 매핑 */
const ICON_MAP = {
  terminal: '>_',
  post: '📄',
  image: '🖼',
};

/**
 * 하단 단축키 바 컴포넌트
 * @param {Object} props
 * @param {Function} props.onOpenShortcuts - 단축키 안내 패널을 여는 콜백
 * @returns {JSX.Element} 독(Dock) 스타일 단축키 바
 */
const ShortcutBar = ({ onOpenShortcuts }) => {
  const desktop = useContext(DesktopContext);
  const [ctx, setCtx] = useState(null); // { winId, x, y }
  const menuRef = useRef(null);

  /** 터미널 윈도우 토글 - 최소화 상태면 복원, 아니면 포커스 */
  const handleToggleTerminal = () => {
    if (!desktop) return;
    const existing = desktop.findByType('terminal');
    if (!existing) return;
    if (existing.state === 'minimized') {
      desktop.restoreWindow(existing.id);
    } else {
      desktop.focusWindow(existing.id);
    }
  };

  /** 윈도우 항목 우클릭 시 컨텍스트 메뉴를 표시한다 */
  const handleContextMenu = useCallback((e, winId) => {
    e.preventDefault();
    setCtx({ winId, x: e.clientX, y: e.clientY });
  }, []);

  // Close menu on outside click or Escape
  useEffect(() => {
    if (!ctx) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setCtx(null);
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setCtx(null);
    };
    window.addEventListener('mousedown', handleClick);
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('keydown', handleKey);
    };
  }, [ctx]);

  // Close menu if the target window disappears
  useEffect(() => {
    if (ctx && desktop && !desktop.getWindow(ctx.winId)) {
      const id = requestAnimationFrame(() => setCtx(null));
      return () => cancelAnimationFrame(id);
    }
  }, [ctx, desktop]);

  const ctxWin = ctx ? desktop?.getWindow(ctx.winId) : null;

  const openWindows = desktop ? desktop.windows : [];

  return (
    <div className="shortcut-bar">
      {/* Fixed items */}
      <div className="sc-item" onClick={handleToggleTerminal} onKeyDown={handleKeyDown(handleToggleTerminal)} role="button" tabIndex={0} aria-label="Open terminal (⌘J)">
        <kbd>⌘</kbd><kbd>J</kbd>
        <span>terminal</span>
      </div>
      <div className="divider" />
      <div className="sc-item" onClick={onOpenShortcuts} onKeyDown={handleKeyDown(onOpenShortcuts)} role="button" tabIndex={0} aria-label="Show shortcuts (?)">
        <kbd>?</kbd>
        <span>shortcuts</span>
      </div>

      {/* Dynamic window list */}
      {openWindows.length > 0 && (
        <>
          <div className="divider" />
          {openWindows.map((win) => (
            <div
              key={win.id}
              className={`sc-item sc-window ${desktop.activeWindowId === win.id ? 'sc-active' : ''} ${win.state === 'minimized' ? 'sc-minimized' : ''}`}
              onClick={() => {
                if (win.state === 'minimized') {
                  desktop.restoreWindow(win.id);
                } else {
                  desktop.focusWindow(win.id);
                }
              }}
              onContextMenu={(e) => handleContextMenu(e, win.id)}
              role="button"
              tabIndex={0}
              title={win.title}
            >
              <span className="sc-icon">{win.icon || ICON_MAP[win.type] || '◻'}</span>
              <span className="sc-win-title">{win.title}</span>
            </div>
          ))}
        </>
      )}

      {/* Context menu */}
      {ctx && ctxWin && (
        <DockContextMenu
          menuRef={menuRef}
          win={ctxWin}
          x={ctx.x}
          y={ctx.y}
          desktop={desktop}
          onDone={() => setCtx(null)}
        />
      )}
    </div>
  );
};

/**
 * 독 컨텍스트 메뉴 컴포넌트 - 윈도우 항목 우클릭 시 표시되는 팝업 메뉴
 *
 * 복원/최소화, 전체화면 토글, 닫기 등의 윈도우 제어 옵션을 제공한다.
 * @param {Object} props
 * @param {Object} props.win - 대상 윈도우 객체
 * @param {number} props.x - 메뉴 표시 X 좌표
 * @param {number} props.y - 메뉴 표시 Y 좌표 (실제로는 bottom 기준으로 배치)
 * @param {Object} props.desktop - 데스크탑 컨텍스트 (윈도우 제어 메서드 포함)
 * @param {Function} props.onDone - 메뉴 닫기 콜백
 * @param {React.RefObject} props.menuRef - 메뉴 DOM 참조 (외부 클릭 감지용)
 * @returns {JSX.Element} 컨텍스트 메뉴
 */
const DockContextMenu = ({ win, x, y, desktop, onDone, menuRef }) => {
  const isMinimized = win.state === 'minimized';
  const isFullscreen = win.state === 'fullscreen';

  const act = (fn) => () => { fn(); onDone(); };

  // Position: anchor above the dock, clamp to viewport
  const menuStyle = {
    left: Math.min(x, window.innerWidth - 180),
    bottom: 36,
  };

  return (
    <div ref={menuRef} className="dock-ctx" style={menuStyle}>
      <div className="dock-ctx-title">{win.title}</div>
      <div className="dock-ctx-sep" />

      {isMinimized ? (
        <button className="dock-ctx-item" onClick={act(() => desktop.restoreWindow(win.id))}>
          복원
        </button>
      ) : (
        <button className="dock-ctx-item" onClick={act(() => desktop.minimizeWindow(win.id))}>
          최소화
        </button>
      )}

      <button className="dock-ctx-item" onClick={act(() => desktop.fullscreenWindow(win.id))}>
        {isFullscreen ? '전체화면 해제' : '전체화면'}
      </button>

      <div className="dock-ctx-sep" />

      <button className="dock-ctx-item dock-ctx-danger" onClick={act(() => desktop.closeWindow(win.id))}>
        닫기
      </button>
    </div>
  );
};

export default ShortcutBar;

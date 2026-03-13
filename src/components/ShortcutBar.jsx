import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { DesktopContext } from '../context/DesktopContext.jsx';
import '../styles/components/shortcut-bar.css';

const handleKeyDown = (callback) => (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
};

const ICON_MAP = {
  terminal: '>_',
  post: '📄',
  image: '🖼',
};

const ShortcutBar = ({ onOpenShortcuts }) => {
  const desktop = useContext(DesktopContext);
  const [ctx, setCtx] = useState(null); // { winId, x, y }
  const menuRef = useRef(null);

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

import { useRef, useEffect, useCallback, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useTerminal from '../hooks/useTerminal.js';
import useVi from '../hooks/useVi.js';
import useDesktop from '../hooks/useDesktop.js';
import WindowShell from './WindowShell.jsx';
import ViEditor from './ViEditor.jsx';
import CMatrix from './games/CMatrix.jsx';
import SnakeGame from './games/SnakeGame.jsx';
import Game2048 from './games/Game2048.jsx';
import BlocksGame from './games/BlocksGame.jsx';
import Pipes from './games/Pipes.jsx';
import SLTrain from './games/SLTrain.jsx';
import '../styles/components/terminal-overlay.css';

const TerminalWindow = ({ windowId }) => {
  const inputRef = useRef(null);
  const bodyRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const desktop = useDesktop();
  const initRef = useRef(false);

  const vi = useVi({ terminalInputRef: inputRef });
  const [app, setApp] = useState(null); // 'cmatrix' | 'snake' | null

  const handleClose = useCallback(() => {
    vi.close();
    setApp(null);
    desktop.minimizeWindow(windowId);
  }, [vi, desktop, windowId]);

  const handleOpenPost = useCallback((terminalPath) => {
    const prefix = '/posts/';
    if (terminalPath.startsWith(prefix)) {
      const relative = terminalPath.slice(prefix.length).replace(/\.md$/, '');
      desktop.openWindow('post', {
        title: relative.split('/').pop(),
        icon: '📄',
        meta: { postPath: relative },
        size: { w: 760, h: 600 },
      });
      navigate(`/posts/${relative}`, { replace: true });
    }
  }, [navigate, desktop]);

  const handlePreviewImage = useCallback((src, name) => {
    desktop.openWindow('image', {
      title: `${name} — Preview`,
      icon: '🖼',
      meta: { src, name },
      size: { w: 640, h: 480 },
    });
  }, [desktop]);

  const handleSyncUrl = useCallback((route) => {
    navigate(route, { replace: true });
  }, [navigate]);

  const handleAppLaunch = useCallback((appType) => {
    if (vi.active) vi.close();
    setApp(appType);
  }, [vi]);

  const handleAppExit = useCallback(() => {
    setApp(null);
    // Refocus terminal input after app exits
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleViOpen = useCallback((htmlLines, textLines, fileName) => {
    if (app) setApp(null);
    vi.open(htmlLines, textLines, fileName);
  }, [app, vi]);

  const { outputLines, cwd, handleKeyDown, reset } = useTerminal({
    onClose: handleClose,
    onOpenPost: handleOpenPost,
    onSyncUrl: handleSyncUrl,
    onViOpen: handleViOpen,
    onPreviewImage: handlePreviewImage,
    onAppLaunch: handleAppLaunch,
  });

  const resetRef = useRef(reset);
  useEffect(() => { resetRef.current = reset; });

  // Initialize terminal once on mount
  const pathnameRef = useRef(location.pathname);
  useEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      resetRef.current(pathnameRef.current);
    }
  }, []);

  // Focus input when window becomes active and visible (RAF ensures element is painted)
  const win = desktop.getWindow(windowId);
  const isVisible = win && win.state !== 'minimized';
  useEffect(() => {
    if (desktop.activeWindowId === windowId && isVisible && !vi.active && !app) {
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [desktop.activeWindowId, windowId, isVisible, vi.active, app]);

  // Auto-scroll
  useEffect(() => {
    if (bodyRef.current && !vi.active && !app) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [outputLines, vi.active, app]);

  const APP_TITLES = { cmatrix: 'cmatrix.sh', snake: 'snake.sh', '2048': '2048.sh', blocks: 'blocks.sh', pipes: 'pipes.sh', sl: 'sl' };

  const title = app
    ? APP_TITLES[app] || app
    : vi.active
      ? `vi — ${vi.mode.fileName}${vi.dirty ? ' [+]' : ''}`
      : 'sim.junghun — terminal';

  const titleExtra = app
    ? <span className="app-badge">{app}</span>
    : vi.modeLabel
      ? <span className={`vi-mode-badge ${vi.insert ? 'insert' : ''}`}>{vi.modeLabel}</span>
      : <span className="close-hint">esc</span>;

  // Determine content
  const APP_COMPONENTS = {
    cmatrix: CMatrix,
    snake: SnakeGame,
    '2048': Game2048,
    blocks: BlocksGame,
    pipes: Pipes,
    sl: SLTrain,
  };

  let content;
  const AppComponent = app ? APP_COMPONENTS[app] : null;
  if (AppComponent) {
    content = <AppComponent onExit={handleAppExit} />;
  } else if (vi.active) {
    content = <ViEditor vi={vi} />;
  } else {
    content = (
      <>
        <div className="terminal-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
          {outputLines.map((line, i) => (
            <div key={i} className="tl" dangerouslySetInnerHTML={{ __html: line }} />
          ))}
          <div className="terminal-input-line">
            <span className="prompt-path">{cwd}</span>
            <span className="prompt-symbol">$</span>
            <input ref={inputRef} type="text" placeholder="Type a command..." onKeyDown={handleKeyDown} autoFocus spellCheck={false} autoComplete="off" autoCapitalize="off" />
          </div>
        </div>
        <div className="terminal-footer">
          <span>Tab: autocomplete</span>
          <span>↑↓: history</span>
          <span>Ctrl+A/E: start/end</span>
          <span>Ctrl+W: word</span>
          <span>Ctrl+U: line</span>
        </div>
      </>
    );
  }

  return (
    <WindowShell
      windowId={windowId}
      title={title}
      titleExtra={titleExtra}
      onClose={handleClose}
      className="terminal-window"
    >
      {content}
    </WindowShell>
  );
};

export default TerminalWindow;

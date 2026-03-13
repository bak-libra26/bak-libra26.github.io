import { useEffect, useState, useCallback, useRef } from 'react';
import useDesktop from '../hooks/useDesktop.js';
import WindowShell from './WindowShell.jsx';
import '../styles/components/image-preview.css';

const ImageWindow = ({ windowId }) => {
  const desktop = useDesktop();
  const win = desktop.getWindow(windowId);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const panRef = useRef(pan);
  useEffect(() => { panRef.current = pan; });
  const dragRef = useRef(null);
  const cleanupRef = useRef(null);

  const src = win?.meta?.src;
  const name = win?.meta?.name;

  const handleClose = useCallback(() => {
    desktop.closeWindow(windowId);
  }, [desktop, windowId]);

  // Keyboard zoom when this window is active
  useEffect(() => {
    const handleKey = (e) => {
      if (desktop.activeWindowId !== windowId) return;
      if (e.key === '=' || e.key === '+') setScale((s) => Math.min(3, s + 0.25));
      if (e.key === '-') setScale((s) => Math.max(0.25, s - 0.25));
      if (e.key === '0') { setScale(1); setPan({ x: 0, y: 0 }); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [desktop.activeWindowId, windowId]);

  const bodyRef = useRef(null);

  // Non-passive wheel listener for zoom (React 19 registers wheel as passive)
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      setScale((s) => {
        const next = s + (e.deltaY < 0 ? 0.15 : -0.15);
        return Math.min(3, Math.max(0.25, next));
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Image drag (pan) — uses panRef to avoid stale closure
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    const currentPan = panRef.current;
    dragRef.current = { sx: e.clientX, sy: e.clientY, ox: currentPan.x, oy: currentPan.y };
    const onMove = (ev) => {
      const d = dragRef.current;
      if (!d) return;
      setPan({ x: d.ox + ev.clientX - d.sx, y: d.oy + ev.clientY - d.sy });
    };
    const onUp = () => {
      dragRef.current = null;
      cleanupRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    cleanupRef.current = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  // Cleanup drag listeners on unmount
  useEffect(() => {
    return () => cleanupRef.current?.();
  }, []);

  // Reset scale + pan when src changes
  const prevSrcRef = useRef(src);
  useEffect(() => {
    if (prevSrcRef.current !== src) {
      prevSrcRef.current = src;
      requestAnimationFrame(() => { setScale(1); setPan({ x: 0, y: 0 }); });
    }
  }, [src]);

  const handleFit = useCallback(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, []);

  if (!win || !src) return null;

  const pct = Math.round(scale * 100);

  return (
    <WindowShell
      windowId={windowId}
      title={`${name} — Preview`}
      onClose={handleClose}
      resizable={false}
      className="preview-window-shell"
    >
      {/* Toolbar */}
      <div className="preview-toolbar">
        <button onClick={() => setScale((s) => Math.max(0.25, s - 0.25))}>-</button>
        <span className="preview-zoom-label">{pct}%</span>
        <button onClick={() => setScale((s) => Math.min(3, s + 0.25))}>+</button>
        <button onClick={handleFit} className="preview-fit">Fit</button>
      </div>

      {/* Image area */}
      <div className="preview-body" ref={bodyRef} onMouseDown={handleMouseDown}>
        <img
          src={src}
          alt={name}
          className="preview-image"
          draggable={false}
          style={{ transform: `scale(${scale}) translate(${pan.x / scale}px, ${pan.y / scale}px)` }}
        />
      </div>

      {/* Statusbar */}
      <div className="preview-statusbar">
        <span>{name}</span>
        <span>{pct}%</span>
      </div>
    </WindowShell>
  );
};

export default ImageWindow;

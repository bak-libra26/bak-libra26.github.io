import { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/components/image-lightbox.css';

const SCALE_MIN = 1;
const SCALE_MAX = 3;
const SCALE_STEP = 0.2;

const ImageLightbox = ({ src, alt, open, onClose }) => {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const overlayRef = useRef(null);

  const resetTransform = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  // Escape key to close; reset transform on cleanup (when lightbox closes)
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      resetTransform();
    };
  }, [open, onClose, resetTransform]);

  // Non-passive wheel listener for zoom (React 19 registers wheel as passive)
  useEffect(() => {
    const el = overlayRef.current;
    if (!open || !el) return;
    const onWheel = (e) => {
      e.preventDefault();
      setScale((prev) => {
        const next = prev + (e.deltaY < 0 ? SCALE_STEP : -SCALE_STEP);
        const clamped = Math.min(SCALE_MAX, Math.max(SCALE_MIN, next));
        if (clamped === 1) setTranslate({ x: 0, y: 0 });
        return clamped;
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [open]);

  const translateRef = useRef(translate);
  useEffect(() => { translateRef.current = translate; });

  const handlePointerDown = useCallback((e) => {
    if (scale <= 1) return;
    e.preventDefault();
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { ...translateRef.current };
  }, [scale]);

  const handlePointerMove = useCallback((e) => {
    if (!dragging) return;
    setTranslate({
      x: translateStart.current.x + (e.clientX - dragStart.current.x),
      y: translateStart.current.y + (e.clientY - dragStart.current.y),
    });
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleBackdropClick = useCallback((e) => {
    if (e.target === overlayRef.current) onClose();
  }, [onClose]);

  if (!open) return null;

  const zoomed = scale > 1;
  const cursorClass = dragging ? 'is-grabbing' : zoomed ? 'is-zoomed' : '';

  return (
    <div
      ref={overlayRef}
      className={`lightbox-overlay ${cursorClass}`}
      onClick={handleBackdropClick}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <span className="lightbox-esc">ESC</span>
      <figure className="lightbox-content">
        <img
          src={src}
          alt={alt || ''}
          className="lightbox-image"
          draggable={false}
          onPointerDown={handlePointerDown}
          style={{
            transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)`,
          }}
        />
        {alt && <figcaption className="lightbox-caption">{alt}</figcaption>}
      </figure>
    </div>
  );
};

export default ImageLightbox;

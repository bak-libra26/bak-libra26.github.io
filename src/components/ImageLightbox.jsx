/**
 * @file ImageLightbox.jsx - 이미지 라이트박스(확대 미리보기) 컴포넌트
 *
 * 글 본문의 이미지를 클릭하면 오버레이로 확대 표시한다.
 *
 * 지원 인터랙션:
 *   데스크톱:
 *     - 마우스 휠: 확대/축소
 *     - 드래그: 확대 상태에서 팬(이동)
 *     - Escape: 닫기
 *     - 배경 클릭: 닫기
 *   모바일:
 *     - 핀치 줌: 두 손가락으로 확대/축소
 *     - 한 손가락 팬: 확대 상태에서 이동
 *     - 더블탭: 2배 확대 토글
 *
 * @exports ImageLightbox
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/components/image-lightbox.css';

/** 확대 배율 제한 */
const SCALE_MIN = 1;
const SCALE_MAX = 3;
const SCALE_STEP = 0.2;

/** 두 터치 포인트 사이의 거리를 계산한다 (핀치 줌에서 사용) */
const dist = (a, b) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

const ImageLightbox = ({ src, alt, open, onClose }) => {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const overlayRef = useRef(null);
  const imgRef = useRef(null);

  // Refs for touch gesture state
  const scaleRef = useRef(1);
  const translateRef = useRef({ x: 0, y: 0 });
  const pinchRef = useRef(null);    // { startDist, startScale }
  const touchPanRef = useRef(null); // { startX, startY, startTx, startTy }
  const lastTapRef = useRef(0);

  useEffect(() => { scaleRef.current = scale; });
  useEffect(() => { translateRef.current = translate; });

  const resetTransform = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  // Escape key to close
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

  // Desktop: wheel zoom
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

  // Mobile: pinch-to-zoom + pan + double-tap on the image element
  useEffect(() => {
    const el = imgRef.current;
    if (!open || !el) return;

    const onTouchStart = (e) => {
      if (e.touches.length === 2) {
        // Pinch start
        e.preventDefault();
        pinchRef.current = { startDist: dist(e.touches[0], e.touches[1]), startScale: scaleRef.current };
        touchPanRef.current = null;
      } else if (e.touches.length === 1) {
        // Double-tap detection
        const now = Date.now();
        if (now - lastTapRef.current < 300) {
          e.preventDefault();
          if (scaleRef.current > 1) {
            setScale(1);
            setTranslate({ x: 0, y: 0 });
          } else {
            setScale(2);
          }
          lastTapRef.current = 0;
          return;
        }
        lastTapRef.current = now;

        // Single-finger pan (only when zoomed)
        if (scaleRef.current > 1) {
          e.preventDefault();
          const t = e.touches[0];
          touchPanRef.current = { startX: t.clientX, startY: t.clientY, startTx: translateRef.current.x, startTy: translateRef.current.y };
        }
        pinchRef.current = null;
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 2 && pinchRef.current) {
        e.preventDefault();
        const d = dist(e.touches[0], e.touches[1]);
        const newScale = Math.min(SCALE_MAX, Math.max(SCALE_MIN, pinchRef.current.startScale * (d / pinchRef.current.startDist)));
        setScale(newScale);
        if (newScale <= 1) setTranslate({ x: 0, y: 0 });
      } else if (e.touches.length === 1 && touchPanRef.current) {
        e.preventDefault();
        const t = e.touches[0];
        const p = touchPanRef.current;
        setTranslate({ x: p.startTx + (t.clientX - p.startX), y: p.startTy + (t.clientY - p.startY) });
      }
    };

    const onTouchEnd = (e) => {
      if (e.touches.length < 2) pinchRef.current = null;
      if (e.touches.length < 1) touchPanRef.current = null;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [open]);

  // Desktop: pointer drag (pan when zoomed)
  const handlePointerDown = useCallback((e) => {
    if (e.pointerType === 'touch') return; // handled by touch events
    if (scaleRef.current <= 1) return;
    e.preventDefault();
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { ...translateRef.current };
  }, []);

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

  if (!open || !src) return null;

  const zoomed = scale > 1;
  const cursorClass = dragging ? 'is-grabbing' : zoomed ? 'is-zoomed' : '';

  return (
    <div
      ref={overlayRef}
      className={`lightbox-overlay ${cursorClass}`}
      role="dialog"
      aria-modal="true"
      aria-label={alt || '이미지 미리보기'}
      onClick={handleBackdropClick}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="닫기">✕</button>
      <figure className="lightbox-content">
        <img
          ref={imgRef}
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

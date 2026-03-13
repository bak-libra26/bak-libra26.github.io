import { useRef, useEffect } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const CMatrix = ({ onExit }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const fontSize = 14;
    let columns, drops;

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w;
      canvas.height = h;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#4ADE80';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head character is brighter
        ctx.fillStyle = '#4ADE80';
        ctx.fillText(char, x, y);

        // Random brightness variation
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#fff';
          ctx.fillText(char, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      if (mountedRef.current) rafRef.current = requestAnimationFrame(draw);
    };

    // Slight delay for the ".sh loading" feel
    timeoutRef.current = setTimeout(() => {
      if (mountedRef.current) rafRef.current = requestAnimationFrame(draw);
    }, 300);

    const handleKey = (e) => {
      if (e.key === 'Escape' || e.key === 'q' || (e.key === 'c' && e.ctrlKey)) {
        e.preventDefault();
        onExit();
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener('keydown', handleKey);
    };
  }, [onExit]);

  return (
    <div style={{ flex: 1, overflow: 'hidden', background: '#0A0A0F', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      <div style={{
        position: 'absolute', bottom: 8, right: 12,
        fontFamily: 'var(--font)', fontSize: 11, color: 'rgba(74,222,128,0.5)',
      }}>
        q / ESC to exit
      </div>
    </div>
  );
};

export default CMatrix;

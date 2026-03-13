import { useRef, useEffect } from 'react';

const TRAIN = [
  '                          (@@)  (  )  (@@)  (  )   (@)  (@@)@@)   .',
  '                     (   )',
  '                 (@@@@)',
  '               (    )',
  '             (@@@)',
  '           ====        ________                ___________',
  '       _D _|  |_______/        \\__I_I_____===__|_________|',
  '        |(_)---  |   H\\________/ |   |        =|___ ___|',
  '        /     |  |   H  |  |     |   |         ||_| |_||',
  '       |      |  |   H  |__--------------------| [___] |',
  '       | ________|___H__/__|_____/[][]~\\_______|       |',
  '       |/ |   |-----------I_____I [][] []  D   |=======|',
  '     __/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__',
  '      |/-=|___|=    ||    ||    ||    |_____/~\\___/',
  '       \\_/      \\O=====O=====O=====O_/      \\_/',
];

const SMOKE_FRAMES = [
  // frame 0
  [
    '                          (@@)  (  )  (@@)  (  )   (@)  (@@)@@)   .',
    '                     (   )',
    '                 (@@@@)',
    '               (    )',
    '             (@@@)',
  ],
  // frame 1
  [
    '                          (  )  (@@)  (  )  (@@)   (@)  (  )@@)   .',
    '                     (@@)',
    '                 (    )',
    '               (@@@@)',
    '             (   )',
  ],
];

const BODY = [
  '           ====        ________                ___________',
  '       _D _|  |_______/        \\__I_I_____===__|_________|',
  '        |(_)---  |   H\\________/ |   |        =|___ ___|',
  '        /     |  |   H  |  |     |   |         ||_| |_||',
  '       |      |  |   H  |__--------------------| [___] |',
  '       | ________|___H__/__|_____/[][]~\\_______|       |',
  '       |/ |   |-----------I_____I [][] []  D   |=======|',
  '     __/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__',
  '      |/-=|___|=    ||    ||    ||    |_____/~\\___/',
  '       \\_/      \\O=====O=====O=====O_/      \\_/',
];

const WHEEL_FRAMES = [
  '       \\_/      \\O=====O=====O=====O_/      \\_/',
  '       \\_/      /O=====O=====O=====O\\_      \\_/',
];

const SLTrain = ({ onExit }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const fontSize = 14;
    const lineHeight = fontSize + 2;
    const charWidth = fontSize * 0.6;

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w;
      canvas.height = h;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    // Compute train width in pixels (widest line)
    const maxLen = Math.max(...TRAIN.map(l => l.length));
    const trainWidthPx = maxLen * charWidth;

    // Train starts off-screen to the right — use current canvas width
    let x = canvas.width + 10;
    let startWidth = canvas.width; // track which width speed was computed for

    // Speed: cross the screen in ~3.5s regardless of screen size
    const duration = 3500;
    let speed = (canvas.width + trainWidthPx + 20) / (duration / 16.67);

    let frame = 0;
    let exited = false;

    const getColor = () => {
      const style = getComputedStyle(document.documentElement);
      return style.getPropertyValue('--green').trim() || '#4ade80';
    };

    const draw = () => {
      if (exited) return;

      // Recalculate speed if canvas was resized (e.g. fullscreen toggle)
      if (canvas.width !== startWidth) {
        const progress = 1 - (x + trainWidthPx) / (startWidth + trainWidthPx + 20);
        startWidth = canvas.width;
        speed = (canvas.width + trainWidthPx + 20) / (duration / 16.67);
        x = (1 - progress) * (canvas.width + trainWidthPx + 20) - trainWidthPx;
      }

      frame++;
      x -= speed;

      // Exit when fully off-screen left
      if (x + trainWidthPx < -10) {
        exited = true;
        onExit();
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const color = getColor();
      ctx.font = `${fontSize}px monospace`;

      // Build current frame lines: smoke (alternating) + body + wheel (alternating)
      const smokeFrame = SMOKE_FRAMES[Math.floor(frame / 8) % SMOKE_FRAMES.length];
      const wheelFrame = WHEEL_FRAMES[Math.floor(frame / 6) % WHEEL_FRAMES.length];
      const lines = [...smokeFrame, ...BODY.slice(0, BODY.length - 1), wheelFrame];

      // Center vertically
      const totalHeight = lines.length * lineHeight;
      const yOffset = Math.max(0, (canvas.height - totalHeight) / 2);

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const y = yOffset + i * lineHeight + fontSize;

        // Dim smoke lines, bright body
        if (i < smokeFrame.length) {
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.6;
        } else {
          ctx.fillStyle = color;
          ctx.globalAlpha = 1.0;
        }

        ctx.fillText(line, x, y);
      }

      ctx.globalAlpha = 1.0;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const handleKey = (e) => {
      if (e.key === 'Escape' || e.key === 'q' || (e.key === 'c' && e.ctrlKey)) {
        e.preventDefault();
        if (!exited) {
          exited = true;
          onExit();
        }
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      exited = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener('keydown', handleKey);
    };
  }, [onExit]);

  return (
    <div style={{ flex: 1, overflow: 'hidden', background: '#0A0A0F', position: 'relative', width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default SLTrain;

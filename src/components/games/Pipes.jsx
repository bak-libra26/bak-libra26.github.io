import { useRef, useEffect } from 'react';

const CELL = 14;
const TICK = 80;
const MAX_PIPES = 5;
const TURN_CHANCE = 0.25;
const SPAWN_CHANCE = 0.008;

const COLORS = ['#4ADE80', '#60A5FA', '#22D3EE', '#A78BFA', '#FACC15', '#F87171'];

// Directions: 0=up, 1=right, 2=down, 3=left
const DX = [0, 1, 0, -1];
const DY = [-1, 0, 1, 0];

// Box-drawing chars: key = "fromDir,toDir"
// fromDir is where the pipe came FROM, toDir is where it goes TO
const CHARS = {
  '0,0': '│', '2,2': '│', // vertical straight
  '1,1': '─', '3,3': '─', // horizontal straight
  '0,1': '┌', '3,2': '┌', // from top, turn right / from left, turn down
  '0,3': '┐', '1,2': '┐', // from top, turn left / from right, turn down
  '2,1': '└', '3,0': '└', // from bottom, turn right / from left, turn up
  '2,3': '┘', '1,0': '┘', // from bottom, turn left / from right, turn up
};

function getChar(fromDir, toDir) {
  return CHARS[`${fromDir},${toDir}`] || '│';
}

function oppositeDir(d) {
  return (d + 2) % 4;
}

function createPipe(cols, rows) {
  // Start from a random edge
  const edge = Math.floor(Math.random() * 4);
  let x, y, dir;

  switch (edge) {
    case 0: // top edge, going down
      x = Math.floor(Math.random() * cols);
      y = 0;
      dir = 2;
      break;
    case 1: // right edge, going left
      x = cols - 1;
      y = Math.floor(Math.random() * rows);
      dir = 3;
      break;
    case 2: // bottom edge, going up
      x = Math.floor(Math.random() * cols);
      y = rows - 1;
      dir = 0;
      break;
    case 3: // left edge, going right
      x = 0;
      y = Math.floor(Math.random() * rows);
      dir = 1;
      break;
  }

  return {
    x,
    y,
    dir,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alive: true,
    steps: 0,
  };
}

const Pipes = ({ onExit }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let cols, rows;
    let pipes = [];
    let lastTick = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w;
      canvas.height = h;
      cols = Math.floor(canvas.width / CELL);
      rows = Math.floor(canvas.height / CELL);

      // Clear and restart
      ctx.fillStyle = 'rgba(10, 10, 15, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      pipes = [createPipe(cols, rows), createPipe(cols, rows)];
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    const drawChar = (x, y, char, color) => {
      ctx.fillStyle = color;
      ctx.font = `${CELL}px monospace`;
      ctx.textBaseline = 'top';
      ctx.fillText(char, x * CELL, y * CELL);
    };

    const step = () => {
      for (let i = pipes.length - 1; i >= 0; i--) {
        const pipe = pipes[i];
        if (!pipe.alive) continue;

        const fromDir = oppositeDir(pipe.dir);

        // Possibly turn
        let newDir = pipe.dir;
        if (Math.random() < TURN_CHANCE) {
          // Turn left or right (not reverse)
          const turn = Math.random() < 0.5 ? -1 : 1;
          newDir = (pipe.dir + turn + 4) % 4;
        }

        // Draw the character at current position
        const char = getChar(fromDir, newDir);
        drawChar(pipe.x, pipe.y, char, pipe.color);

        // Move to next position
        pipe.dir = newDir;
        pipe.x += DX[newDir];
        pipe.y += DY[newDir];
        pipe.steps++;

        // Check bounds
        if (pipe.x < 0 || pipe.x >= cols || pipe.y < 0 || pipe.y >= rows) {
          pipe.alive = false;
          // Replace dead pipe
          pipes[i] = createPipe(cols, rows);
        }
      }

      // Occasionally spawn new pipes
      if (pipes.length < MAX_PIPES && Math.random() < SPAWN_CHANCE) {
        pipes.push(createPipe(cols, rows));
      }
    };

    const loop = (timestamp) => {
      if (timestamp - lastTick >= TICK) {
        lastTick = timestamp;
        step();
      }
      if (mountedRef.current) rafRef.current = requestAnimationFrame(loop);
    };

    timeoutRef.current = setTimeout(() => {
      if (mountedRef.current) rafRef.current = requestAnimationFrame(loop);
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
        fontFamily: 'var(--font)', fontSize: 11, color: 'rgba(255,255,255,0.3)',
      }}>
        q / ESC to exit
      </div>
    </div>
  );
};

export default Pipes;

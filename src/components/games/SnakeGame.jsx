import { useRef, useEffect, useState, useCallback } from 'react';

const CELL = 16;
const TICK_MS = 120;

const DIR = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
  k: { x: 0, y: -1 },
  j: { x: 0, y: 1 },
  h: { x: -1, y: 0 },
  l: { x: 1, y: 0 },
};

const SWIPE_DIR = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

function spawnFood(cols, rows, snake) {
  const occupied = new Set(snake.map((s) => `${s.x},${s.y}`));
  if (occupied.size >= cols * rows) return null; // Board full
  let x, y;
  do {
    x = Math.floor(Math.random() * cols);
    y = Math.floor(Math.random() * rows);
  } while (occupied.has(`${x},${y}`));
  return { x, y };
}

const SnakeGame = ({ onExit }) => {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const rafRef = useRef(null);
  const lastTickRef = useRef(0);
  const touchRef = useRef(null);
  const gameStateRef = useRef({ gameOver: false });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    gameStateRef.current = { gameOver };
  });

  const initGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const cols = Math.floor(canvas.width / CELL);
    const rows = Math.floor(canvas.height / CELL);
    const cx = Math.floor(cols / 2);
    const cy = Math.floor(rows / 2);

    const snake = [
      { x: cx, y: cy },
      { x: cx - 1, y: cy },
      { x: cx - 2, y: cy },
    ];

    stateRef.current = {
      snake,
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      food: spawnFood(cols, rows, snake),
      cols,
      rows,
    };

    setScore(0);
    setGameOver(false);
    setStarted(true);
    lastTickRef.current = 0;
  }, []);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const tick = (time) => {
      rafRef.current = requestAnimationFrame(tick);

      if (!stateRef.current || gameStateRef.current.gameOver) {
        // Draw static state
        draw(ctx);
        return;
      }

      if (time - lastTickRef.current < TICK_MS) return;
      lastTickRef.current = time;

      const st = stateRef.current;
      st.dir = st.nextDir;

      const head = {
        x: st.snake[0].x + st.dir.x,
        y: st.snake[0].y + st.dir.y,
      };

      // Wall collision
      if (head.x < 0 || head.x >= st.cols || head.y < 0 || head.y >= st.rows) {
        setGameOver(true);
        return;
      }

      // Self collision
      if (st.snake.some((s) => s.x === head.x && s.y === head.y)) {
        setGameOver(true);
        return;
      }

      st.snake.unshift(head);

      // Eat food
      if (head.x === st.food.x && head.y === st.food.y) {
        setScore((s) => s + 10);
        const newFood = spawnFood(st.cols, st.rows, st.snake);
        if (!newFood) {
          // Board full — player wins
          setGameOver(true);
          return;
        }
        st.food = newFood;
      } else {
        st.snake.pop();
      }

      draw(ctx);
    };

    const draw = (ctx) => {
      if (!stateRef.current) return;
      const st = stateRef.current;
      const w = canvas.width;
      const h = canvas.height;

      // Background
      ctx.fillStyle = '#0A0A0F';
      ctx.fillRect(0, 0, w, h);

      // Grid (subtle)
      ctx.strokeStyle = 'rgba(30, 30, 42, 0.5)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= st.cols; x++) {
        ctx.beginPath();
        ctx.moveTo(x * CELL, 0);
        ctx.lineTo(x * CELL, st.rows * CELL);
        ctx.stroke();
      }
      for (let y = 0; y <= st.rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * CELL);
        ctx.lineTo(st.cols * CELL, y * CELL);
        ctx.stroke();
      }

      // Food
      ctx.fillStyle = '#F87171';
      ctx.shadowColor = '#F87171';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(
        st.food.x * CELL + CELL / 2,
        st.food.y * CELL + CELL / 2,
        CELL / 2 - 2, 0, Math.PI * 2,
      );
      ctx.fill();
      ctx.shadowBlur = 0;

      // Snake
      st.snake.forEach((seg, i) => {
        const alpha = 1 - (i / st.snake.length) * 0.6;
        ctx.fillStyle = i === 0
          ? '#4ADE80'
          : `rgba(74, 222, 128, ${alpha})`;
        ctx.fillRect(
          seg.x * CELL + 1,
          seg.y * CELL + 1,
          CELL - 2,
          CELL - 2,
        );
      });
    };

    // Init
    requestAnimationFrame(() => {
      initGame();
      rafRef.current = requestAnimationFrame(tick);
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initGame]);

  // Touch handlers for mobile swipe
  const handleTouchStart = useCallback((e) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (!touchRef.current || !stateRef.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    touchRef.current = null;

    const minSwipe = 30;
    if (Math.abs(dx) < minSwipe && Math.abs(dy) < minSwipe) return;
    if (gameStateRef.current.gameOver) return;

    const dir = Math.abs(dx) > Math.abs(dy)
      ? (dx > 0 ? 'right' : 'left')
      : (dy > 0 ? 'down' : 'up');

    const d = SWIPE_DIR[dir];
    const cur = stateRef.current.dir;
    // Prevent 180-degree turn
    if (d.x !== -cur.x || d.y !== -cur.y) {
      stateRef.current.nextDir = d;
    }
  }, []);

  // Key handler
  useEffect(() => {
    const handleKey = (e) => {
      const { gameOver } = gameStateRef.current;

      if (e.key === 'Escape' || (e.key === 'q' && gameOver)) {
        e.preventDefault();
        onExit();
        return;
      }

      if (gameOver && (e.key === 'r' || e.key === 'Enter')) {
        e.preventDefault();
        initGame();
        return;
      }

      const d = DIR[e.key];
      if (d && stateRef.current) {
        e.preventDefault();
        const cur = stateRef.current.dir;
        // Prevent 180-degree turn
        if (d.x !== -cur.x || d.y !== -cur.y) {
          stateRef.current.nextDir = d;
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onExit, initGame]);

  return (
    <div
      style={{ flex: 1, overflow: 'hidden', background: '#0A0A0F', position: 'relative' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

      {/* HUD */}
      <div style={{
        position: 'absolute', top: 8, left: 12,
        fontFamily: 'var(--font)', fontSize: 12, color: '#4ADE80',
      }}>
        SCORE: {score}
      </div>

      <div style={{
        position: 'absolute', top: 8, right: 12,
        fontFamily: 'var(--font)', fontSize: 11, color: 'rgba(74,222,128,0.5)',
      }}>
        {started && !gameOver ? 'ESC to exit · ←↑↓→/hjkl/wasd' : ''}
      </div>

      {/* Game Over overlay */}
      {gameOver && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: 'rgba(10, 10, 15, 0.8)',
        }}>
          <div style={{ fontFamily: 'var(--font)', fontSize: 20, color: '#F87171', marginBottom: 8 }}>
            GAME OVER
          </div>
          <div style={{ fontFamily: 'var(--font)', fontSize: 14, color: '#4ADE80', marginBottom: 16 }}>
            Score: {score}
          </div>
          <div style={{ fontFamily: 'var(--font)', fontSize: 12, color: 'var(--text-muted)' }}>
            r / Enter: restart · q / ESC: exit
          </div>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;

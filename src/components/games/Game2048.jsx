import { useRef, useEffect, useState, useCallback } from 'react';

const GRID = 4;
const GAP = 8;
const RADIUS = 6;

const TILE_COLORS = {
  2:    { bg: '#2a2a3e', fg: '#a0a0b0' },
  4:    { bg: '#3a3a50', fg: '#b0b0c0' },
  8:    { bg: '#7a4a1a', fg: '#ffd0a0' },
  16:   { bg: '#a05a10', fg: '#ffe0b0' },
  32:   { bg: '#8a2020', fg: '#ffb0a0' },
  64:   { bg: '#c03030', fg: '#ffe0d0' },
  128:  { bg: '#a0a020', fg: '#ffff90' },
  256:  { bg: '#b08c10', fg: '#ffe070' },
  512:  { bg: '#c0c020', fg: '#ffffb0' },
  1024: { bg: '#20a0a0', fg: '#b0ffff' },
  2048: { bg: '#20a040', fg: '#b0ffb0' },
};

function getTileColor(value) {
  if (TILE_COLORS[value]) return TILE_COLORS[value];
  return { bg: '#7030a0', fg: '#e0b0ff' };
}

function emptyBoard() {
  return Array.from({ length: GRID }, () => Array(GRID).fill(0));
}

function cloneBoard(board) {
  return board.map((r) => [...r]);
}

function addRandom(board) {
  const empty = [];
  for (let r = 0; r < GRID; r++)
    for (let c = 0; c < GRID; c++)
      if (board[r][c] === 0) empty.push([r, c]);
  if (empty.length === 0) return false;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  board[r][c] = Math.random() < 0.9 ? 2 : 4;
  return true;
}

function slideRow(row) {
  const filtered = row.filter((v) => v !== 0);
  const result = [];
  let score = 0;
  let i = 0;
  while (i < filtered.length) {
    if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
      const merged = filtered[i] * 2;
      result.push(merged);
      score += merged;
      i += 2;
    } else {
      result.push(filtered[i]);
      i++;
    }
  }
  while (result.length < GRID) result.push(0);
  return { result, score };
}

function rotateBoard(board, times) {
  let b = board;
  for (let t = 0; t < times; t++) {
    const nb = emptyBoard();
    for (let r = 0; r < GRID; r++)
      for (let c = 0; c < GRID; c++)
        nb[c][GRID - 1 - r] = b[r][c];
    b = nb;
  }
  return b;
}

function move(board, direction) {
  const rotations = { left: 0, up: 3, right: 2, down: 1 };
  const rot = rotations[direction];
  let b = rotateBoard(board, rot);
  let totalScore = 0;
  let moved = false;

  for (let r = 0; r < GRID; r++) {
    const { result, score } = slideRow(b[r]);
    if (result.some((v, i) => v !== b[r][i])) moved = true;
    b[r] = result;
    totalScore += score;
  }

  b = rotateBoard(b, (4 - rot) % 4);
  return { board: b, score: totalScore, moved };
}

function canMove(board) {
  for (let r = 0; r < GRID; r++)
    for (let c = 0; c < GRID; c++) {
      if (board[r][c] === 0) return true;
      if (c + 1 < GRID && board[r][c] === board[r][c + 1]) return true;
      if (r + 1 < GRID && board[r][c] === board[r + 1][c]) return true;
    }
  return false;
}

function hasWon(board) {
  for (let r = 0; r < GRID; r++)
    for (let c = 0; c < GRID; c++)
      if (board[r][c] >= 2048) return true;
  return false;
}

const DIR_MAP = {
  ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
  w: 'up', s: 'down', a: 'left', d: 'right',
  k: 'up', j: 'down', h: 'left', l: 'right',
};

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Header height for score/controls area
const HEADER_H = 48;

const Game2048 = ({ onExit }) => {
  const canvasRef = useRef(null);
  const boardRef = useRef(emptyBoard());
  const scoreRef = useRef(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [wonDismissed, setWonDismissed] = useState(false);
  const touchRef = useRef(null);
  const gameStateRef = useRef({ gameOver: false, won: false, wonDismissed: false });

  useEffect(() => {
    gameStateRef.current = { gameOver, won, wonDismissed };
  });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const board = boardRef.current;

    const w = canvas.width;
    const h = canvas.height;

    // Available area for the board (below header)
    const boardAreaW = w;
    const boardAreaH = h - HEADER_H;

    // Board is always square — fit to smallest dimension with padding
    const pad = 16;
    const maxBoardSize = Math.min(boardAreaW - pad * 2, boardAreaH - pad * 2);
    const boardSize = Math.max(120, maxBoardSize);

    const totalGap = GAP * (GRID + 1);
    const cell = (boardSize - totalGap) / GRID;

    const gridW = cell * GRID + totalGap;
    const gridH = gridW; // square

    // Center the board in the available area
    const ox = (w - gridW) / 2;
    const oy = HEADER_H + (boardAreaH - gridH) / 2;

    // Background
    const bgColor = getComputedStyle(canvas).getPropertyValue('--bg').trim() || '#1a1a2e';
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);

    // --- Header area ---
    // Score
    ctx.fillStyle = '#b0b0c0';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(`SCORE: ${scoreRef.current}`, w - 16, HEADER_H / 2);

    // Controls hint
    const { gameOver: go, won: w2, wonDismissed: wd } = gameStateRef.current;
    if (!go && !(w2 && !wd)) {
      ctx.fillStyle = 'rgba(160,160,180,0.4)';
      ctx.font = '11px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('ESC/q: exit · ←↑↓→/hjkl', 16, HEADER_H / 2);
    }

    // Separator line
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(16, HEADER_H - 0.5);
    ctx.lineTo(w - 16, HEADER_H - 0.5);
    ctx.stroke();

    // --- Board ---
    // Grid background
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    roundRect(ctx, ox, oy, gridW, gridH, RADIUS + 2);
    ctx.fill();

    // Empty cells
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        const x = ox + GAP + c * (cell + GAP);
        const y2 = oy + GAP + r * (cell + GAP);
        ctx.fillStyle = 'rgba(255,255,255,0.04)';
        roundRect(ctx, x, y2, cell, cell, RADIUS);
        ctx.fill();
      }
    }

    // Tiles
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        const val = board[r][c];
        if (val === 0) continue;
        const x = ox + GAP + c * (cell + GAP);
        const y2 = oy + GAP + r * (cell + GAP);
        const { bg, fg } = getTileColor(val);

        ctx.fillStyle = bg;
        roundRect(ctx, x, y2, cell, cell, RADIUS);
        ctx.fill();

        // Number
        const fontSize = val >= 1024 ? cell * 0.28 : val >= 128 ? cell * 0.32 : cell * 0.38;
        ctx.fillStyle = fg;
        ctx.font = `bold ${fontSize}px monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(val), x + cell / 2, y2 + cell / 2);
      }
    }
  }, []);

  const initGame = useCallback(() => {
    const b = emptyBoard();
    addRandom(b);
    addRandom(b);
    boardRef.current = b;
    scoreRef.current = 0;
    setScore(0);
    setGameOver(false);
    setWon(false);
    setWonDismissed(false);
    requestAnimationFrame(() => draw());
  }, [draw]);

  // Init + resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w;
      canvas.height = h;
      draw();
    };

    requestAnimationFrame(() => {
      initGame();
      resize();
    });

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    return () => ro.disconnect();
  }, [initGame, draw]);

  // Touch handler for mobile swipe
  const handleTouchStart = useCallback((e) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (!touchRef.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    touchRef.current = null;

    const minSwipe = 30;
    if (Math.abs(dx) < minSwipe && Math.abs(dy) < minSwipe) return;
    const { gameOver, won, wonDismissed } = gameStateRef.current;
    if (gameOver || (won && !wonDismissed)) return;

    const dir = Math.abs(dx) > Math.abs(dy)
      ? (dx > 0 ? 'right' : 'left')
      : (dy > 0 ? 'down' : 'up');

    const result = move(boardRef.current, dir);
    if (!result.moved) return;

    boardRef.current = result.board;
    scoreRef.current += result.score;
    setScore(scoreRef.current);
    addRandom(boardRef.current);
    draw();

    if (!won && hasWon(boardRef.current)) setWon(true);
    if (!canMove(boardRef.current)) setGameOver(true);
  }, [draw]);

  // Key handler
  useEffect(() => {
    const handleKey = (e) => {
      const { gameOver, won, wonDismissed } = gameStateRef.current;

      if (e.key === 'Escape' || e.key === 'q') {
        e.preventDefault();
        onExit();
        return;
      }

      // Win dismiss
      if (won && !wonDismissed && !gameOver) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setWonDismissed(true);
          return;
        }
      }

      // Restart on game over
      if (gameOver && (e.key === 'r' || e.key === 'Enter')) {
        e.preventDefault();
        initGame();
        return;
      }

      if (gameOver) return;
      if (won && !wonDismissed) return;

      const dir = DIR_MAP[e.key];
      if (!dir) return;
      e.preventDefault();

      const result = move(boardRef.current, dir);
      if (!result.moved) return;

      boardRef.current = result.board;
      scoreRef.current += result.score;
      setScore(scoreRef.current);

      addRandom(boardRef.current);
      draw();

      if (!won && hasWon(boardRef.current)) setWon(true);
      if (!canMove(boardRef.current)) setGameOver(true);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onExit, initGame, draw]);

  const showWinOverlay = won && !wonDismissed && !gameOver;

  return (
    <div
      style={{ flex: 1, overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

      {/* Win overlay */}
      {showWinOverlay && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: 'rgba(26, 26, 46, 0.85)',
        }}>
          <div style={{ fontFamily: 'monospace', fontSize: 24, color: '#20a040', marginBottom: 8 }}>
            YOU WIN!
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 14, color: '#b0ffb0', marginBottom: 4 }}>
            Score: {score}
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(160,160,180,0.7)', marginTop: 12 }}>
            Enter / Space: keep playing
          </div>
        </div>
      )}

      {/* Game over overlay */}
      {gameOver && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: 'rgba(26, 26, 46, 0.85)',
        }}>
          <div style={{ fontFamily: 'monospace', fontSize: 22, color: '#F87171', marginBottom: 8 }}>
            GAME OVER
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 15, color: '#b0b0c0', marginBottom: 16 }}>
            Score: {score}
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(160,160,180,0.7)' }}>
            r / Enter: restart · q / ESC: exit
          </div>
        </div>
      )}
    </div>
  );
};

export default Game2048;

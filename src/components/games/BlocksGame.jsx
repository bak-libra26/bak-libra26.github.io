import { useRef, useEffect, useState, useCallback } from 'react';

const COLS = 10;
const ROWS = 20;
const GAP = 1;

const SHAPES = {
  I: { blocks: [[0,0],[1,0],[2,0],[3,0]], color: '#06B6D4' },
  O: { blocks: [[0,0],[1,0],[0,1],[1,1]], color: '#FACC15' },
  T: { blocks: [[0,0],[1,0],[2,0],[1,1]], color: '#A855F7' },
  S: { blocks: [[1,0],[2,0],[0,1],[1,1]], color: '#22C55E' },
  Z: { blocks: [[0,0],[1,0],[1,1],[2,1]], color: '#EF4444' },
  L: { blocks: [[0,0],[1,0],[2,0],[0,1]], color: '#F97316' },
  J: { blocks: [[0,0],[1,0],[2,0],[2,1]], color: '#3B82F6' },
};

const PIECE_NAMES = Object.keys(SHAPES);

const SCORE_TABLE = [0, 100, 300, 500, 800];

function randomPiece() {
  const name = PIECE_NAMES[Math.floor(Math.random() * PIECE_NAMES.length)];
  return {
    name,
    blocks: SHAPES[name].blocks.map(([x, y]) => [x, y]),
    color: SHAPES[name].color,
    x: Math.floor(COLS / 2) - 2,
    y: 0,
  };
}

function rotateBlocks(blocks) {
  const maxX = Math.max(...blocks.map(([x]) => x));
  const maxY = Math.max(...blocks.map(([, y]) => y));
  const cx = maxX / 2;
  const cy = maxY / 2;
  return blocks.map(([x, y]) => {
    const rx = Math.round(cx + (y - cy));
    const ry = Math.round(cy - (x - cx));
    return [rx, ry];
  });
}

function normalizeBlocks(blocks) {
  const minX = Math.min(...blocks.map(([x]) => x));
  const minY = Math.min(...blocks.map(([, y]) => y));
  return blocks.map(([x, y]) => [x - minX, y - minY]);
}

function collides(board, blocks, px, py) {
  for (const [bx, by] of blocks) {
    const x = px + bx;
    const y = py + by;
    if (x < 0 || x >= COLS || y >= ROWS) return true;
    if (y >= 0 && board[y][x]) return true;
  }
  return false;
}

function createBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

function lockPiece(board, piece) {
  const newBoard = board.map((row) => [...row]);
  for (const [bx, by] of piece.blocks) {
    const x = piece.x + bx;
    const y = piece.y + by;
    if (y >= 0 && y < ROWS && x >= 0 && x < COLS) {
      newBoard[y][x] = piece.color;
    }
  }
  return newBoard;
}

function clearLines(board) {
  const kept = board.filter((row) => row.some((c) => !c));
  const cleared = ROWS - kept.length;
  while (kept.length < ROWS) kept.unshift(Array(COLS).fill(null));
  return { board: kept, cleared };
}

function ghostY(board, piece) {
  let gy = piece.y;
  while (!collides(board, piece.blocks, piece.x, gy + 1)) gy++;
  return gy;
}

function getDropInterval(level) {
  return Math.max(100, 800 - (level - 1) * 60);
}

const BlocksGame = ({ onExit }) => {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const rafRef = useRef(null);
  const lastDropRef = useRef(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lines, setLines] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const initGame = useCallback(() => {
    const first = randomPiece();
    const next = randomPiece();
    stateRef.current = {
      board: createBoard(),
      piece: first,
      next,
      score: 0,
      level: 1,
      lines: 0,
      gameOver: false,
    };
    setScore(0);
    setLevel(1);
    setLines(0);
    setGameOver(false);
    lastDropRef.current = 0;
  }, []);

  const spawnNext = useCallback(() => {
    const st = stateRef.current;
    if (!st) return;
    const next = st.next;
    next.x = Math.floor(COLS / 2) - 2;
    next.y = 0;
    if (collides(st.board, next.blocks, next.x, next.y)) {
      st.gameOver = true;
      setGameOver(true);
      return;
    }
    st.piece = next;
    st.next = randomPiece();
  }, []);

  const lock = useCallback(() => {
    const st = stateRef.current;
    if (!st) return;
    st.board = lockPiece(st.board, st.piece);
    const { board, cleared } = clearLines(st.board);
    st.board = board;
    if (cleared > 0) {
      const pts = SCORE_TABLE[cleared] * st.level;
      st.score += pts;
      st.lines += cleared;
      st.level = Math.floor(st.lines / 10) + 1;
      setScore(st.score);
      setLines(st.lines);
      setLevel(st.level);
    }
    spawnNext();
  }, [spawnNext]);

  const movePiece = useCallback((dx, dy) => {
    const st = stateRef.current;
    if (!st || st.gameOver) return false;
    if (!collides(st.board, st.piece.blocks, st.piece.x + dx, st.piece.y + dy)) {
      st.piece.x += dx;
      st.piece.y += dy;
      return true;
    }
    return false;
  }, []);

  const rotatePiece = useCallback(() => {
    const st = stateRef.current;
    if (!st || st.gameOver) return;
    if (st.piece.name === 'O') return;
    const rotated = normalizeBlocks(rotateBlocks(st.piece.blocks));
    // Wall kick offsets
    const kicks = [0, -1, 1, -2, 2];
    for (const kick of kicks) {
      if (!collides(st.board, rotated, st.piece.x + kick, st.piece.y)) {
        st.piece.blocks = rotated;
        st.piece.x += kick;
        return;
      }
    }
  }, []);

  const hardDrop = useCallback(() => {
    const st = stateRef.current;
    if (!st || st.gameOver) return;
    const gy = ghostY(st.board, st.piece);
    st.piece.y = gy;
    lock();
    lastDropRef.current = performance.now();
  }, [lock]);

  // Drawing
  const draw = useCallback((ctx, canvas) => {
    const st = stateRef.current;
    if (!st) return;

    const cw = canvas.width;
    const ch = canvas.height;

    // Background
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, cw, ch);

    // Dynamic cell size: fit the board within available height with padding
    const padding = 8;
    const mobile = cw < 500;
    const sideW = mobile ? 80 : 120;
    const CELL = Math.min(
      Math.floor((ch - padding * 2) / ROWS),
      Math.floor((cw - sideW - padding * 2) / COLS),
      28, // max cell size
    );
    const CELL_INNER = CELL - GAP * 2;
    const fieldW = COLS * CELL;
    const fieldH = ROWS * CELL;
    const totalW = fieldW + sideW;
    const ox = Math.floor((cw - totalW) / 2);
    const oy = Math.floor((ch - fieldH) / 2);

    // Draw board background (exact fit, no extra space)
    ctx.fillStyle = '#0f0f23';
    ctx.fillRect(ox, oy, fieldW, fieldH);

    // Grid lines — only interior lines (not outer edges, the border handles that)
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 0.5;
    for (let x = 1; x < COLS; x++) {
      ctx.beginPath();
      ctx.moveTo(ox + x * CELL, oy);
      ctx.lineTo(ox + x * CELL, oy + fieldH);
      ctx.stroke();
    }
    for (let y = 1; y < ROWS; y++) {
      ctx.beginPath();
      ctx.moveTo(ox, oy + y * CELL);
      ctx.lineTo(ox + fieldW, oy + y * CELL);
      ctx.stroke();
    }

    // Draw board border (tight around the field)
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(ox - 0.5, oy - 0.5, fieldW + 1, fieldH + 1);

    // Draw board cells
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (st.board[r][c]) {
          drawCell(ctx, ox + c * CELL + GAP, oy + r * CELL + GAP, CELL_INNER, st.board[r][c]);
        }
      }
    }

    // Ghost piece
    if (!st.gameOver) {
      const gy = ghostY(st.board, st.piece);
      for (const [bx, by] of st.piece.blocks) {
        const gx = st.piece.x + bx;
        const gyy = gy + by;
        if (gyy >= 0) {
          ctx.strokeStyle = st.piece.color;
          ctx.globalAlpha = 0.25;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(
            ox + gx * CELL + GAP + 1,
            oy + gyy * CELL + GAP + 1,
            CELL_INNER - 2,
            CELL_INNER - 2,
          );
          ctx.globalAlpha = 1;
        }
      }
    }

    // Active piece
    if (!st.gameOver) {
      for (const [bx, by] of st.piece.blocks) {
        const px = st.piece.x + bx;
        const py = st.piece.y + by;
        if (py >= 0) {
          drawCell(ctx, ox + px * CELL + GAP, oy + py * CELL + GAP, CELL_INNER, st.piece.color);
        }
      }
    }

    // Side panel
    const sx = ox + fieldW + (mobile ? 10 : 20);
    const labelFont = mobile ? '9px monospace' : '10px monospace';
    const valueFont = mobile ? '13px monospace' : '16px monospace';
    const previewCell = mobile ? 12 : 16;

    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = mobile ? '10px monospace' : '11px monospace';

    // Next piece
    ctx.fillText('NEXT', sx, oy + 14);
    const nextBlocks = st.next.blocks;
    const nextColor = st.next.color;
    for (const [bx, by] of nextBlocks) {
      drawCell(ctx, sx + bx * previewCell, oy + 24 + by * previewCell, previewCell - 2, nextColor);
    }

    // Stats
    const statY = oy + (mobile ? 85 : 110);
    const statGap = mobile ? 36 : 46;
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = labelFont;
    ctx.fillText('SCORE', sx, statY);
    ctx.fillStyle = '#4ADE80';
    ctx.font = valueFont;
    ctx.fillText(String(st.score), sx, statY + 16);

    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = labelFont;
    ctx.fillText('LEVEL', sx, statY + statGap);
    ctx.fillStyle = '#FACC15';
    ctx.font = valueFont;
    ctx.fillText(String(st.level), sx, statY + statGap + 16);

    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = labelFont;
    ctx.fillText('LINES', sx, statY + statGap * 2);
    ctx.fillStyle = '#06B6D4';
    ctx.font = valueFont;
    ctx.fillText(String(st.lines), sx, statY + statGap * 2 + 16);

    // Controls hint (desktop only)
    if (!mobile) {
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.font = '9px monospace';
      ctx.fillText('←→/h l  move', sx, statY + 155);
      ctx.fillText('↑/k/w   rotate', sx, statY + 168);
      ctx.fillText('↓/j/s   soft drop', sx, statY + 181);
      ctx.fillText('SPACE   hard drop', sx, statY + 194);
    }

    // Game over overlay
    if (st.gameOver) {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.8)';
      ctx.fillRect(0, 0, cw, ch);

      ctx.fillStyle = '#EF4444';
      ctx.font = 'bold 24px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', cw / 2, ch / 2 - 30);

      ctx.fillStyle = '#4ADE80';
      ctx.font = '16px monospace';
      ctx.fillText(`Score: ${st.score}`, cw / 2, ch / 2 + 4);

      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.font = '12px monospace';
      ctx.fillText('r / Enter: restart  ·  q / ESC: exit', cw / 2, ch / 2 + 36);
      ctx.textAlign = 'start';
    }
  }, []);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    requestAnimationFrame(() => initGame());

    const loop = (time) => {
      rafRef.current = requestAnimationFrame(loop);
      const st = stateRef.current;
      if (!st) return;

      // Resize canvas to parent
      const parent = canvas.parentElement;
      if (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }

      if (!st.gameOver) {
        const interval = getDropInterval(st.level);
        if (time - lastDropRef.current >= interval) {
          lastDropRef.current = time;
          if (!movePiece(0, 1)) {
            lock();
          }
        }
      }

      draw(ctx, canvas);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initGame, movePiece, lock, draw]);

  // Key handler
  useEffect(() => {
    const handleKey = (e) => {
      const st = stateRef.current;
      if (!st) return;

      if (e.key === 'Escape') { e.preventDefault(); onExit(); return; }

      if (st.gameOver) {
        if (e.key === 'q') {
          e.preventDefault();
          e.stopPropagation();
          onExit();
          return;
        }
        if (e.key === 'r' || e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          initGame();
          return;
        }
        return;
      }

      // During play
      switch (e.key) {
        case 'ArrowLeft':
        case 'h':
        case 'a':
          e.preventDefault();
          e.stopPropagation();
          movePiece(-1, 0);
          break;
        case 'ArrowRight':
        case 'l':
        case 'd':
          e.preventDefault();
          e.stopPropagation();
          movePiece(1, 0);
          break;
        case 'ArrowDown':
        case 'j':
        case 's':
          e.preventDefault();
          e.stopPropagation();
          if (!movePiece(0, 1)) lock();
          lastDropRef.current = performance.now();
          break;
        case 'ArrowUp':
        case 'k':
        case 'w':
          e.preventDefault();
          e.stopPropagation();
          rotatePiece();
          break;
        case ' ':
          e.preventDefault();
          e.stopPropagation();
          hardDrop();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onExit, initGame, movePiece, lock, rotatePiece, hardDrop]);

  // Touch swipe on canvas (complementary to buttons)
  const touchRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onTouchStart = (e) => {
      if (e.touches.length !== 1) return;
      touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, time: Date.now() };
    };
    const onTouchEnd = (e) => {
      if (!touchRef.current) return;
      const t = touchRef.current;
      touchRef.current = null;
      const ch = e.changedTouches[0];
      const dx = ch.clientX - t.x;
      const dy = ch.clientY - t.y;
      const dt = Date.now() - t.time;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      // Tap (short, small movement) → rotate
      if (dt < 200 && absDx < 15 && absDy < 15) {
        rotatePiece();
        return;
      }
      // Swipe thresholds
      if (absDx > 30 && absDx > absDy) {
        movePiece(dx > 0 ? 1 : -1, 0);
      } else if (dy > 30 && absDy > absDx) {
        if (dy > 80) { hardDrop(); } else { if (!movePiece(0, 1)) lock(); lastDropRef.current = performance.now(); }
      }
    };
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, [movePiece, rotatePiece, hardDrop, lock]);

  const isMobile = window.innerWidth <= 768;

  const btn = (label, action, style = {}) => (
    <button
      onTouchStart={(e) => { e.preventDefault(); action(); }}
      onClick={action}
      style={{
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 8,
        color: 'rgba(255,255,255,0.7)',
        fontSize: 20,
        fontFamily: 'monospace',
        width: 56, height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
        ...style,
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#1a1a2e', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', flex: 1, minHeight: 0 }} />
      {isMobile && !gameOver && (
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 12, padding: '10px 16px',
          paddingBottom: 'calc(10px + env(safe-area-inset-bottom))',
          background: 'rgba(0,0,0,0.3)',
          flexShrink: 0,
        }}>
          {btn('←', () => movePiece(-1, 0))}
          {btn('↓', () => { if (!movePiece(0, 1)) lock(); lastDropRef.current = performance.now(); })}
          {btn('↻', rotatePiece)}
          {btn('→', () => movePiece(1, 0))}
          {btn('⤓', hardDrop, { background: 'rgba(74,222,128,0.15)', borderColor: 'rgba(74,222,128,0.3)', color: '#4ADE80' })}
        </div>
      )}
      {isMobile && gameOver && (
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 12, padding: '10px 16px',
          paddingBottom: 'calc(10px + env(safe-area-inset-bottom))',
          background: 'rgba(0,0,0,0.3)',
          flexShrink: 0,
        }}>
          {btn('↺', initGame, { width: 'auto', padding: '0 24px', fontSize: 14 })}
        </div>
      )}
    </div>
  );
};

function drawCell(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
  // Highlight edge
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fillRect(x, y, size, 2);
  ctx.fillRect(x, y, 2, size);
  // Shadow edge
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(x, y + size - 2, size, 2);
  ctx.fillRect(x + size - 2, y, 2, size);
}

export default BlocksGame;

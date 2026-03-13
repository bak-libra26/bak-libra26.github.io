/**
 * @file useVi 커스텀 훅
 * @description 브라우저 내 Vi/Vim 에디터 에뮬레이션을 제공하는 훅.
 *              Normal, Insert, Command 모드를 지원하며, h/j/k/l 이동, 삽입 편집,
 *              :q, :w, :wq 등의 Ex 명령어 처리, 그리고 읽기 전용 블로그에서의
 *              유머러스한 에러 메시지(이스터에그)를 포함한다.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { esc } from '../utils/html-util.js';

/** Vi 명령어에 대한 읽기 전용 에러 메시지 모음 (랜덤 선택) */
const VI_ERRORS = {
  write: [
    "E45: 'readonly' option is set (add ! to override)",
    "E212: Can't open file for writing: Permission denied",
    'E505: "file" is read-only (sudo 권한이 필요합니다)',
  ],
  writeQuit: [
    "E45: 'readonly' option is set (add ! to override)",
    "E212: Can't open file for writing",
  ],
  sudo: [
    'Permission denied. 이 블로그의 관리자가 아닙니다.',
    'sudo: 3 incorrect password attempts',
    'sudo: nice try 😏',
  ],
  forceWrite: [
    'E505: 정말요? 이건 읽기 전용 블로그입니다 😅',
    'E212: 아무리 !를 붙여도 안 됩니다',
  ],
};

/** 배열에서 랜덤으로 하나의 요소를 선택한다 */
function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/**
 * Vi 에디터 에뮬레이션 커스텀 훅
 * @param {object} params
 * @param {React.RefObject} params.terminalInputRef - Vi 종료 후 포커스를 되돌릴 터미널 입력 ref
 * @returns {object} Vi 에디터 상태 및 제어 함수들 (active, mode, handleKeyDown, open, close 등)
 */
const useVi = ({ terminalInputRef }) => {
  const [mode, setMode] = useState(null); // { htmlLines, textLines, fileName }
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const [cmd, setCmd] = useState('');
  const [cmdMode, setCmdMode] = useState(false);
  const [insert, setInsert] = useState(false);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [msg, setMsg] = useState(null);
  const [dirty, setDirty] = useState(false);
  const msgTimer = useRef(null);

  const totalLines = mode ? mode.textLines.length : 0;
  const currentLineLen = mode ? (mode.textLines[row] || '').length : 0;
  const modeLabel = mode ? (insert ? 'INSERT' : cmdMode ? 'COMMAND' : 'NORMAL') : null;

  /* ── helpers ── */

  /** 하단 상태바에 임시 메시지를 표시한다 (3초 후 자동 제거) */
  const flash = useCallback((text, type = 'error') => {
    setMsg({ text, type });
    clearTimeout(msgTimer.current);
    msgTimer.current = setTimeout(() => setMsg(null), 3000);
  }, []);

  /** Vi 에디터를 종료하고 모든 상태를 초기화한 뒤 터미널 입력으로 포커스를 되돌린다 */
  const exit = useCallback(() => {
    setMode(null);
    setInsert(false);
    setCmdMode(false);
    setMsg(null);
    setDirty(false);
    requestAnimationFrame(() => terminalInputRef.current?.focus());
  }, [terminalInputRef]);

  /** 커서 위치를 이동한다 (행/열 범위를 자동으로 클램핑) */
  const moveCursor = useCallback((r, c) => {
    if (!mode) return;
    const clampedRow = Math.max(0, Math.min(r, mode.textLines.length - 1));
    const lineLen = (mode.textLines[clampedRow] || '').length;
    setRow(clampedRow);
    setCol(Math.max(0, Math.min(c, lineLen)));
  }, [mode]);

  /* ── open / close ── */

  /** 파일을 Vi 에디터에서 열고 초기 상태를 설정한다 */
  const open = useCallback((htmlLines, textLines, fileName) => {
    setMode({ htmlLines, textLines, fileName });
    setRow(0); setCol(0); setCmd(''); setCmdMode(false); setInsert(false); setMsg(null); setDirty(false);
  }, []);

  /** Vi 에디터를 닫고 모든 상태를 초기화한다 (포커스 복원 없음) */
  const close = useCallback(() => {
    setMode(null);
    setInsert(false);
    setCmdMode(false);
    setMsg(null);
    setDirty(false);
  }, []);

  /* ── vi command-line execution ── */

  /**
   * Ex 명령어(: 모드)를 실행한다.
   * :q(종료), :w(저장 시도), :wq(저장 후 종료), :{숫자}(행 이동) 등을 처리한다.
   * 읽기 전용 블로그이므로 저장 관련 명령은 유머러스한 에러를 반환한다.
   */
  const execCmd = useCallback((raw) => {
    const c = raw.trim();
    if (c === 'q' || c === 'quit') {
      if (dirty) { flash('E37: No write since last change (add ! to override)'); return; }
      exit(); return;
    }
    if (c === 'q!' || c === 'qa!' || c === 'quit!') { exit(); return; }
    if (c === 'w' || c === 'write') { flash(pickRandom(VI_ERRORS.write)); return; }
    if (c === 'w!' || c === 'write!') { flash(pickRandom(VI_ERRORS.forceWrite)); return; }
    if (c === 'wq' || c === 'x') { flash(pickRandom(VI_ERRORS.writeQuit)); return; }
    if (c === 'wq!') { flash(pickRandom(VI_ERRORS.forceWrite)); return; }
    if (c.startsWith('!sudo') || c.startsWith('w !sudo')) { flash(pickRandom(VI_ERRORS.sudo)); return; }
    const n = parseInt(c);
    if (!isNaN(n) && mode) { moveCursor(n - 1, 0); return; }
    if (c.startsWith('set')) { flash(`E518: Unknown option: ${c.slice(4)}`, 'info'); return; }
    flash(`E492: Not an editor command: ${c}`);
  }, [mode, dirty, exit, flash, moveCursor]);

  /* ── insert mode line editing ── */

  /** 전체 라인 배열을 교체하고 커서 위치를 갱신한다 */
  const updateLines = useCallback((textArr, htmlArr, newRow, newCol) => {
    setMode((prev) => ({ ...prev, textLines: textArr, htmlLines: htmlArr }));
    setRow(newRow); setCol(newCol);
    setDirty(true);
  }, []);

  /** 특정 행의 텍스트를 교체하고 HTML을 재생성한다 */
  const updateLine = useCallback((lines, htmls, newLine, targetRow, newCol) => {
    const newText = [...lines]; newText[targetRow] = newLine;
    const newHtml = [...htmls]; newHtml[targetRow] = `<span class="t-out">${esc(newLine)}</span>`;
    updateLines(newText, newHtml, targetRow, newCol);
  }, [updateLines]);

  /** Insert 모드에서의 키 입력 처리 (문자 입력, Enter, Backspace, Tab, 방향키) */
  const handleInsertKey = useCallback((e) => {
    if (e.key === 'Escape') { e.preventDefault(); setInsert(false); setMsg(null); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); moveCursor(row - 1, col); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); moveCursor(row + 1, col); return; }
    if (e.key === 'ArrowLeft') { e.preventDefault(); moveCursor(row, col - 1); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); moveCursor(row, col + 1); return; }
    e.preventDefault();

    const lines = mode.textLines;
    const htmls = mode.htmlLines;
    const line = lines[row] || '';

    if (e.key === 'Enter') {
      const before = line.slice(0, col);
      const after = line.slice(col);
      const newText = [...lines]; newText.splice(row, 1, before, after);
      const newHtml = [...htmls]; newHtml.splice(row, 1, `<span class="t-out">${esc(before)}</span>`, `<span class="t-out">${esc(after)}</span>`);
      updateLines(newText, newHtml, row + 1, 0);
    } else if (e.key === 'Backspace') {
      if (col > 0) {
        updateLine(lines, htmls, line.slice(0, col - 1) + line.slice(col), row, col - 1);
      } else if (row > 0) {
        const prevLine = lines[row - 1] || '';
        const merged = prevLine + line;
        const newText = [...lines]; newText.splice(row - 1, 2, merged);
        const newHtml = [...htmls]; newHtml.splice(row - 1, 2, `<span class="t-out">${esc(merged)}</span>`);
        updateLines(newText, newHtml, row - 1, prevLine.length);
      }
    } else if (e.key === 'Tab') {
      updateLine(lines, htmls, line.slice(0, col) + '  ' + line.slice(col), row, col + 2);
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      updateLine(lines, htmls, line.slice(0, col) + e.key + line.slice(col), row, col + 1);
      if (Math.random() < 0.03) flash('(변경 사항은 저장되지 않습니다 🙃)', 'info');
    }
  }, [mode, row, col, moveCursor, flash, updateLines, updateLine]);

  /* ── normal mode key handler ── */

  /**
   * Normal 모드에서의 키 입력 처리.
   * 모드 전환(i, a, I, A, o, O, :), 이동(h/j/k/l, w, b, 0, $, g, G),
   * 페이지 이동(Ctrl+D, Ctrl+U, Space, PageDown/Up), 종료(q) 등을 처리한다.
   */
  const handleNormalKey = useCallback((e) => {
    e.preventDefault();
    setMsg(null);

    switch (e.key) {
      // Mode
      case ':': setCmdMode(true); setCmd(''); break;
      case 'i': setInsert(true); flash('-- INSERT --', 'info'); break;
      case 'a': moveCursor(row, col + 1); setInsert(true); flash('-- INSERT --', 'info'); break;
      case 'I': moveCursor(row, 0); setInsert(true); flash('-- INSERT --', 'info'); break;
      case 'A': moveCursor(row, currentLineLen); setInsert(true); flash('-- INSERT --', 'info'); break;
      case 'o': {
        setMode((prev) => {
          const newText = [...prev.textLines];
          const newHtml = [...prev.htmlLines];
          newText.splice(row + 1, 0, '');
          newHtml.splice(row + 1, 0, '<span class="t-out"></span>');
          return { ...prev, textLines: newText, htmlLines: newHtml };
        });
        setRow(row + 1);
        setCol(0);
        setDirty(true);
        setInsert(true);
        flash('-- INSERT --', 'info');
        break;
      }
      case 'O': {
        setMode((prev) => {
          const newText = [...prev.textLines];
          const newHtml = [...prev.htmlLines];
          newText.splice(row, 0, '');
          newHtml.splice(row, 0, '<span class="t-out"></span>');
          return { ...prev, textLines: newText, htmlLines: newHtml };
        });
        setCol(0);
        setDirty(true);
        setInsert(true);
        flash('-- INSERT --', 'info');
        break;
      }

      // Movement — h/j/k/l + arrows
      case 'h': case 'ArrowLeft': moveCursor(row, col - 1); break;
      case 'l': case 'ArrowRight': moveCursor(row, col + 1); break;
      case 'j': case 'ArrowDown': moveCursor(row + 1, col); break;
      case 'k': case 'ArrowUp': moveCursor(row - 1, col); break;

      // Word/line movement
      case 'w': {
        const line = mode.textLines[row] || '';
        const rest = line.slice(col);
        const m = rest.match(/^\S*\s+/);
        moveCursor(row, m ? col + m[0].length : col + rest.length);
        break;
      }
      case 'b': {
        const line = mode.textLines[row] || '';
        const before = line.slice(0, col);
        const m = before.match(/\s+\S*$/);
        moveCursor(row, m ? col - m[0].length : 0);
        break;
      }
      case '0': case 'Home': moveCursor(row, 0); break;
      case '$': case 'End': moveCursor(row, currentLineLen - 1); break;

      // Page movement
      case 'g': moveCursor(0, 0); break;
      case 'G': moveCursor(totalLines - 1, 0); break;
      case 'd': if (e.ctrlKey) moveCursor(row + 15, col); break;
      case 'u': if (e.ctrlKey) moveCursor(row - 15, col); break;
      case ' ': case 'PageDown': moveCursor(row + 20, col); break;
      case 'PageUp': moveCursor(row - 20, col); break;

      // Quit
      case 'q':
        if (dirty) { flash('E37: No write since last change (add ! to override)'); break; }
        exit(); break;

      // Easter eggs
      case 'Z': flash('ZZ? 저장은 안 됩니다 😏'); break;
      case 'x': if (!dirty) setDirty(true); flash("E21: Cannot make changes, 'modifiable' is off"); break;
      case 'r': flash("E21: Cannot make changes, 'modifiable' is off"); break;
      case 'p': flash('E353: Nothing in register "'); break;

      default: break;
    }
  }, [mode, row, col, dirty, totalLines, currentLineLen, exit, flash, moveCursor]);

  /* ── unified key handler (dispatches by mode) ── */

  /** 통합 키 입력 핸들러: 현재 모드(Command/Insert/Normal)에 따라 적절한 핸들러로 분배한다 */
  const handleKeyDown = useCallback((e) => {
    if (!mode) return;

    if (cmdMode) {
      e.preventDefault();
      if (e.key === 'Enter') { execCmd(cmd); setCmd(''); setCmdMode(false); }
      else if (e.key === 'Escape') { setCmd(''); setCmdMode(false); }
      else if (e.key === 'Backspace') { cmd.length === 0 ? setCmdMode(false) : setCmd(c => c.slice(0, -1)); }
      else if (e.key.length === 1) setCmd(c => c + e.key);
      return;
    }

    if (insert) { handleInsertKey(e); return; }

    handleNormalKey(e);
  }, [mode, cmd, cmdMode, insert, execCmd, handleInsertKey, handleNormalKey]);

  /* ── effects ── */

  useEffect(() => {
    if (mode && inputRef.current) inputRef.current.focus();
  }, [mode]);

  useEffect(() => {
    if (bodyRef.current && mode) {
      const el = bodyRef.current.children[row];
      if (el) el.scrollIntoView({ block: 'nearest' });
    }
  }, [row, mode]);

  useEffect(() => () => clearTimeout(msgTimer.current), []);

  return {
    active: !!mode,
    mode,
    bodyRef,
    inputRef,
    row, col,
    cmd, cmdMode,
    insert, msg, dirty,
    totalLines, modeLabel,
    handleKeyDown,
    open, close,
  };
};

export default useVi;

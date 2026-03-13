import { memo } from 'react';

const TILDE_MIN = 20;

// ── Vi Line renderer with visible cursor ──
const ViLine = memo(({ lineNum, text, html, cursorCol, isActive, isInsert }) => {
  if (!isActive) {
    return (
      <div className="vi-line">
        <span className="vi-linenum">{String(lineNum).padStart(3)}</span>
        <span className="vi-content" dangerouslySetInnerHTML={{ __html: html || '' }} />
      </div>
    );
  }

  const chars = text || '';
  const col = Math.min(cursorCol, chars.length);
  const before = chars.slice(0, col);
  const cursorChar = col < chars.length ? chars[col] : ' ';
  const after = chars.slice(col + 1);

  return (
    <div className="vi-line vi-line-active">
      <span className="vi-linenum">{String(lineNum).padStart(3)}</span>
      <span className="vi-content-cursor">
        <span className="vi-text">{before}</span>
        <span className={`vi-block-cursor ${isInsert ? 'vi-bar-cursor' : ''}`}>{cursorChar}</span>
        <span className="vi-text">{after}</span>
      </span>
    </div>
  );
}, (prev, next) => {
  if (prev.isActive !== next.isActive) return false;
  if (prev.html !== next.html) return false;
  if (prev.text !== next.text) return false;
  if (prev.lineNum !== next.lineNum) return false;
  if (next.isActive && (prev.cursorCol !== next.cursorCol || prev.isInsert !== next.isInsert)) return false;
  return true;
});

// ── Vi Statusbar ──
const ViStatusbar = ({ mode, cmdMode, cmd, msg, dirty, totalLines, row, col }) => {
  return (
    <div className={`vi-statusbar ${msg?.type === 'error' ? 'vi-error' : ''}`}>
      {cmdMode ? (
        <span className="vi-cmd-input">:{cmd}<span className="vi-cursor" /></span>
      ) : msg ? (
        <span className={`vi-msg ${msg.type}`}>{msg.text}</span>
      ) : (
        <>
          <span className="vi-filename">&quot;{mode.fileName}&quot;{dirty ? ' [+]' : ''} {totalLines}L</span>
          <span className="vi-pos">{row + 1},{col + 1}&nbsp;&nbsp;&nbsp;{Math.round(((row + 1) / totalLines) * 100)}%</span>
        </>
      )}
    </div>
  );
};

// ── Vi Editor ──
const ViEditor = ({ vi }) => {
  const { mode, bodyRef, inputRef, row, col, cmdMode, cmd, insert, msg, dirty, totalLines, handleKeyDown } = vi;
  const tildeCount = mode.htmlLines.length < TILDE_MIN ? TILDE_MIN - mode.htmlLines.length : 0;

  return (
    <div className="terminal-vi">
      <div className="vi-body" ref={bodyRef}>
        {mode.htmlLines.map((html, i) => (
          <ViLine
            key={i}
            lineNum={i + 1}
            text={mode.textLines[i]}
            html={html}
            cursorCol={col}
            isActive={i === row}
            isInsert={insert}
          />
        ))}
        {tildeCount > 0 && Array.from({ length: tildeCount }, (_, i) => (
          <div key={`t${i}`} className="vi-line"><span className="vi-tilde">~</span></div>
        ))}
      </div>
      <ViStatusbar mode={mode} cmdMode={cmdMode} cmd={cmd} msg={msg} dirty={dirty} totalLines={totalLines} row={row} col={col} />
      <input
        ref={inputRef}
        className="vi-hidden-input"
        onKeyDown={handleKeyDown}
        onBlur={() => { setTimeout(() => { if (mode && document.activeElement?.tagName !== 'INPUT') inputRef.current?.focus(); }, 0); }}
        autoFocus
      />
    </div>
  );
};

export default ViEditor;

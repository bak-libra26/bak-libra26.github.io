/**
 * @file ViEditor.jsx - Vi 에디터 UI 컴포넌트
 *
 * 터미널 내에서 Vi 스타일의 텍스트 뷰어를 구현한다.
 *
 * 구성:
 *   - ViLine: 개별 라인 렌더러 (행 번호 + 내용 + 블록 커서)
 *   - ViStatusbar: 하단 상태 표시줄 (파일명, 수정여부, 위치, 명령모드 입력)
 *   - ViEditor: 전체 에디터 레이아웃
 *
 * 내용이 TILDE_MIN(20줄) 미만이면 남은 공간을 '~'로 채운다 (Vi 동작 모방).
 * 커서는 NORMAL 모드에서 블록, INSERT 모드에서 바 형태로 표시된다.
 *
 * @exports ViEditor
 */

import { memo } from 'react';

/** 최소 표시 줄 수 - 내용이 이보다 적으면 나머지를 '~'로 채운다 */
const TILDE_MIN = 20;

/**
 * ViLine - Vi 에디터의 개별 라인 컴포넌트
 *
 * 활성 라인(커서가 있는 라인)은 문자 단위로 분리하여 블록 커서를 표시하고,
 * 비활성 라인은 하이라이트된 HTML을 그대로 렌더링한다.
 *
 * 커스텀 memo 비교 함수로 불필요한 리렌더링을 방지한다.
 */
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

/**
 * ViStatusbar - Vi 하단 상태 표시줄
 * 세 가지 상태를 구분하여 표시한다:
 *   1. 명령 모드(cmdMode): ':' 다음에 입력 중인 명령어
 *   2. 메시지(msg): 에러/정보 메시지
 *   3. 기본: 파일명, 수정 여부, 줄 수, 현재 위치, 진행률
 */
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

/** ViEditor - Vi 에디터 전체 레이아웃 (본문 + 틸드 + 상태바 + 숨겨진 입력) */
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

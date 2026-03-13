/**
 * @file OutputRenderer.js - 터미널 출력 렌더러
 *
 * 터미널의 출력 버퍼(outputLines)에 HTML 문자열을 추가하는 유틸리티 클래스이다.
 * 프롬프트 생성, 명령어 출력, 에러 메시지, 마크다운 하이라이팅,
 * 탭 자동완성 후보 표시 등의 기능을 제공한다.
 *
 * 모든 사용자 입력은 esc()로 이스케이프하여 XSS를 방지한다.
 *
 * @exports OutputRenderer
 */

import { esc } from '../../utils/html-util.js';
import { displayPath } from './path-utils.js';

/**
 * OutputRenderer - 터미널 출력 관리 클래스
 * @param {string[]} outputLines - 출력 HTML 라인 배열 (참조로 공유)
 * @param {Function} cwdGetter - 현재 작업 디렉토리를 반환하는 함수
 */
class OutputRenderer {
  constructor(outputLines, cwdGetter) {
    this.outputLines = outputLines;
    this._cwd = cwdGetter;
  }

  /** 프롬프트 문자열을 생성한다 (simjunghun:~/경로$) */
  prompt() {
    return `<span class="t-user">simjunghun</span>:<span class="t-path">${esc(displayPath(this._cwd()))}</span><span class="t-dollar">$</span>`;
  }

  /** HTML 한 줄을 출력 버퍼에 추가한다 */
  print(html) { this.outputLines.push(html); }
  /** 프롬프트 + 사용자 입력 명령어를 출력한다 */
  printCmd(cmd) { this.print(`${this.prompt()} ${esc(cmd)}`); }
  /** 에러 메시지를 출력한다 (빨간색) */
  printErr(prefix, msg) { this.print(`<span class="t-err">${esc(prefix)}: ${esc(msg)}</span>`); }
  /** 도움말 힌트를 출력한다 (회색) */
  printHint(cmd) { this.print(`<span class="t-dim">${esc(cmd)} --help 참고</span>`); }

  /** 마크다운 라인을 간단한 구문 하이라이팅으로 변환한다 (헤딩=초록, 코드블록=회색) */
  highlightLine(line) {
    if (line.startsWith('#')) {
      const m = line.match(/^(#{1,4})\s+(.*)/);
      return m ? `<span class="t-green">${esc(m[1])} ${esc(m[2])}</span>` : esc(line);
    }
    if (line.startsWith('```')) return `<span class="t-dim">${esc(line)}</span>`;
    if (line.trim() === '') return '';
    return `<span class="t-out">${esc(line)}</span>`;
  }

  /** 탭 자동완성 후보를 컬럼 형태로 출력한다 (80자 너비 기준) */
  printCandidates(comp) {
    const items = comp.items;
    const labels = items.map((item) => {
      if (comp.type === 'cmd' || comp.type === 'flag') return item.name;
      return item.name + (item.isDir ? '/' : '');
    });

    const maxLen = Math.max(...labels.map((l) => l.length));
    const colWidth = maxLen + 2;
    const termWidth = 80;
    const cols = Math.max(1, Math.floor(termWidth / colWidth));

    for (let i = 0; i < labels.length; i += cols) {
      const row = labels.slice(i, i + cols);
      const html = row.map((label, j) => {
        const item = items[i + j];
        const padded = label + ' '.repeat(Math.max(0, colWidth - label.length));
        const cls = item.isDir ? 't-dir' : (comp.type === 'cmd' ? 't-cyan' : 't-file');
        return `<span class="${cls}">${esc(padded)}</span>`;
      }).join('');
      this.print(html);
    }
  }
}

export default OutputRenderer;

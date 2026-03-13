/**
 * @file TerminalEngine.js
 * @description 터미널 에뮬레이터의 핵심 엔진 클래스.
 *
 * 가상 파일시스템(VFS) 위에서 동작하는 bash 스타일 터미널을 구현한다.
 * 명령어 실행, 탭 자동완성, 명령어 히스토리(위/아래 화살표), 출력 버퍼 관리 등
 * 터미널의 모든 비UI 로직을 담당한다. React 컴포넌트(useTerminal 훅)가
 * 이 엔진 인스턴스를 생성하여 사용한다.
 */
import { esc, escPath } from '../utils/html-util.js';
import vfs from './terminal/VirtualFS.js';
import OutputRenderer from './terminal/OutputRenderer.js';
import { resolve, splitCommand, parseArgs, resolveFileArg, displayPath, cwdFromPathname } from './terminal/path-utils.js';
import { HELP_TEXTS, ALL_CMDS, DIR_ONLY_CMDS, FILE_ONLY_CMDS, FLAG_MAP } from './terminal/data/help-texts.js';
import COMMANDS from './terminal/commands/index.js';
import { resolveScript } from './terminal/commands/script.js';
import { execScriptPath } from './terminal/commands/file-ops.js';

/**
 * 터미널 에뮬레이터 엔진.
 * 명령어 파싱, 실행, 탭 자동완성, 히스토리 관리를 수행한다.
 */
class TerminalEngine {
  /**
   * 터미널 엔진 인스턴스를 생성한다.
   * @param {Object} options - 초기화 옵션
   * @param {Function} options.onClose - 터미널 종료 시 콜백
   * @param {Function} options.onOpenPost - 게시글 열기 콜백
   * @param {Function} options.onSyncUrl - URL 동기화 콜백 (cd 명령 시 브라우저 주소 변경)
   * @param {Function} options.onViOpen - vi 에디터 열기 콜백
   * @param {Function} options.onPreviewImage - 이미지 미리보기 콜백
   * @param {Function} options.onAppLaunch - 앱(게임 등) 실행 콜백
   * @param {string} options.pathname - 현재 브라우저 경로 (초기 cwd 결정용)
   */
  constructor({ onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch, pathname }) {
    this.cwd = cwdFromPathname(pathname, vfs);
    this.history = [];
    this.historyIdx = -1;
    this.tabCount = 0;
    this.outputLines = [];
    this.lastResults = [];
    this.lastResultContext = null;
    this.lastFortune = null;

    this.callbacks = { onClose, onOpenPost, onSyncUrl, onViOpen, onPreviewImage, onAppLaunch };
    this.renderer = new OutputRenderer(this.outputLines, () => this.cwd);

    this.outputLines.push('<span class="t-dim">sim.junghun terminal v5.0 (bash)</span>');
    this.outputLines.push('<span class="t-dim">cd posts | about 으로 페이지 이동. "help"를 입력하세요.</span>');
    this.outputLines.push('');
  }

  /**
   * 출력 버퍼가 1000줄을 초과하면 오래된 줄을 제거하여 메모리를 관리한다.
   * @private
   */
  _trimOutput() {
    if (this.outputLines.length > 1000) {
      this.outputLines.splice(0, this.outputLines.length - 1000);
    }
  }

  // Public API delegates (used by useTerminal.js)
  displayPath(absPath) { return displayPath(absPath); }
  printCmd(cmd) { this.renderer.printCmd(cmd); }

  /**
   * 명령어 핸들러에 전달되는 컨텍스트 객체를 생성한다.
   * vfs, cwd, renderer, resolve 등 명령어 실행에 필요한 모든 유틸리티를 포함한다.
   * @private
   * @returns {Object} 명령어 실행 컨텍스트
   */
  _buildCtx() {
    const engine = this;
    return {
      vfs,
      get cwd() { return engine.cwd; },
      setCwd: (path) => { this.cwd = path; },
      renderer: this.renderer,
      resolve: (input) => resolve(this.cwd, input),
      resolveFileArg: (arg) => resolveFileArg(this.cwd, arg, vfs),
      parseArgs,
      get lastResults() { return engine.lastResults; },
      get lastResultContext() { return engine.lastResultContext; },
      setLastResults: (items, context) => { this.lastResults = items; this.lastResultContext = context; },
      history: this.history,
      callbacks: this.callbacks,
      get lastFortune() { return engine.lastFortune; },
      set lastFortune(v) { engine.lastFortune = v; },
    };
  }

  /* ── tab completion ── */

  /**
   * 입력 텍스트에 대한 탭 자동완성 후보를 계산한다.
   * 명령어, 플래그, 파일/디렉토리 경로의 세 가지 타입을 지원한다.
   * @param {string} text - 현재 입력 텍스트
   * @returns {Object} { prefix, items, type } - 자동완성 결과
   */
  getCompletions(text) {
    const raw = text.trimStart();
    const parts = splitCommand(raw);

    if (parts.length === 0) {
      return { prefix: '', items: ALL_CMDS.map((m) => ({ name: m, isDir: false })), type: 'cmd' };
    }

    if (parts.length === 1 && !raw.endsWith(' ') && !parts[0].startsWith('./')) {
      const partial = parts[0];
      const matches = ALL_CMDS.filter((c) => c.startsWith(partial));
      return { prefix: partial, items: matches.map((m) => ({ name: m, isDir: false })), type: 'cmd' };
    }

    const cmd = parts[0];

    const endsWithUnescapedSpace = raw.endsWith(' ') && !raw.endsWith('\\ ');
    let partial;
    if (endsWithUnescapedSpace) {
      partial = '';
    } else {
      let lastIdx = -1;
      for (let i = raw.length - 1; i >= 0; i--) {
        if (raw[i] === ' ' && (i === 0 || raw[i - 1] !== '\\')) { lastIdx = i; break; }
      }
      partial = raw.slice(lastIdx + 1);
    }

    if (partial.startsWith('-') && FLAG_MAP[cmd]) {
      const flags = FLAG_MAP[cmd].filter((f) => f.startsWith(partial));
      return { prefix: partial, items: flags.map((f) => ({ name: f, display: f, isDir: false })), type: 'flag' };
    }

    const unescaped = partial.replace(/\\ /g, ' ');
    const lastSlash = unescaped.lastIndexOf('/');
    let parentInput, fragment;
    if (lastSlash >= 0) {
      parentInput = unescaped.slice(0, lastSlash) || '/';
      fragment = unescaped.slice(lastSlash + 1);
    } else {
      parentInput = '';
      fragment = unescaped;
    }

    const parentPath = parentInput ? resolve(this.cwd, parentInput) : this.cwd;
    const parentNode = vfs.getNode(parentPath);
    if (!parentNode || typeof parentNode !== 'object') return { prefix: partial, items: [], type: 'path' };

    const pathPrefix = parentInput ? parentInput + '/' : '';
    const dirOnly = DIR_ONLY_CMDS.includes(cmd);
    const fileOnly = FILE_ONLY_CMDS.includes(cmd);

    const matches = Object.entries(parentNode)
      .filter(([name, child]) => {
        if (!name.toLowerCase().startsWith(fragment.toLowerCase())) return false;
        const childIsDir = child !== null && typeof child === 'object';
        if (dirOnly && !childIsDir) return false;
        if (fileOnly && childIsDir) return false;
        return true;
      })
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, child]) => ({
        name,
        display: escPath(pathPrefix + name),
        isDir: child !== null && typeof child === 'object',
      }));

    return { prefix: partial, items: matches, type: 'path' };
  }

  /**
   * 탭 키 입력을 처리한다.
   * 후보가 1개이면 즉시 완성하고, 여러 개이면 공통 접두사까지 완성한다.
   * 탭을 두 번 연속 누르면 후보 목록을 터미널에 출력한다.
   * @param {string} inputValue - 현재 입력 필드 값
   * @returns {string} 자동완성이 적용된 새로운 입력 값
   */
  applyTab(inputValue) {
    this.tabCount++;
    const comp = this.getCompletions(inputValue);

    if (comp.items.length === 0) return inputValue;

    const before = inputValue.slice(0, inputValue.length - comp.prefix.length);

    if (comp.items.length === 1) {
      const item = comp.items[0];
      let suffix;
      if (comp.type === 'cmd' || comp.type === 'flag') {
        suffix = item.name + ' ';
      } else {
        suffix = item.display + (item.isDir ? '/' : ' ');
      }
      this.tabCount = 0;
      return before + suffix;
    }

    const names = comp.items.map((i) =>
      comp.type === 'cmd' || comp.type === 'flag' ? i.name : i.display
    );
    let common = names[0];
    for (const n of names) {
      while (common && !n.startsWith(common)) common = common.slice(0, -1);
    }

    if (this.tabCount === 1) {
      if (common.length > comp.prefix.length) {
        return before + common;
      }
      return inputValue;
    }

    this.renderer.printCmd(inputValue);
    this.renderer.printCandidates(comp);
    this._trimOutput();
    this.tabCount = 0;
    return inputValue;
  }

  /* ── command execution ── */

  /**
   * 명령어 문자열을 실행한다.
   * 입력을 히스토리에 추가하고, 스크립트/내장 명령어/번호 참조 등을 순서대로 확인하여 처리한다.
   * @param {string} raw - 사용자가 입력한 원시 명령어 문자열
   */
  exec(raw) {
    const trimmed = raw.trim();
    if (!trimmed) return;
    if (trimmed.length > 1000) {
      this.renderer.printCmd(trimmed.slice(0, 50) + '...');
      this.renderer.printErr('bash', '입력이 너무 깁니다 (최대 1000자)');
      this.renderer.print('');
      this._trimOutput();
      return;
    }

    if (this.history.length >= 200) this.history.shift();
    this.history.push(trimmed);
    this.historyIdx = this.history.length;
    this.renderer.printCmd(trimmed);

    const parts = splitCommand(trimmed);
    const cmd = parts[0];
    const args = parts.slice(1);

    // Script execution: ./script.sh, bash script, sh script.sh
    const scriptPath = resolveScript(cmd, args, this.cwd, vfs, resolve);
    if (scriptPath) {
      const ctx = this._buildCtx();
      execScriptPath(ctx, scriptPath);
      this.renderer.print('');
      this._trimOutput();
      return;
    }
    if (cmd.startsWith('./')) {
      this.renderer.printErr(cmd, '파일을 찾을 수 없거나 실행 권한이 없습니다');
      this.renderer.print('');
      this._trimOutput();
      return;
    }

    // --help for any command
    if (args.includes('--help') && HELP_TEXTS[cmd]) {
      this.renderer.print('');
      for (const line of HELP_TEXTS[cmd]) {
        this.renderer.print(line ? `<span class="t-dim">${esc(line)}</span>` : '');
      }
      this.renderer.print('');
      this._trimOutput();
      return;
    }

    // Numbered result reference: open 2 / cat 3
    if ((cmd === 'open' || cmd === 'cat') && args.length === 1 && /^\d+$/.test(args[0])) {
      const idx = parseInt(args[0]) - 1;
      if (this.lastResults.length > 0 && idx >= 0 && idx < this.lastResults.length) {
        const path = this.lastResults[idx];
        const handler = COMMANDS.get(cmd);
        if (handler) {
          handler(this._buildCtx(), [path]);
        }
        this.renderer.print('');
        this._trimOutput();
        return;
      }
    }

    // bash/sh without script (resolveScript already checked above)
    if (cmd === 'bash' || cmd === 'sh') {
      if (args.length === 0) this.renderer.printErr(cmd, '사용법: bash <script.sh>');
      else this.renderer.printErr(cmd, `${args[0]}: 스크립트를 찾을 수 없습니다`);
      this.renderer.print('');
      this._trimOutput();
      return;
    }

    const handler = COMMANDS.get(cmd);
    if (handler) {
      const ctx = this._buildCtx();
      handler(ctx, args);
      // clear/exit return early from their handlers, no trailing newline needed for clear
      if (cmd === 'clear' || cmd === 'exit') return;
    } else {
      this.renderer.printErr(cmd, '알 수 없는 명령어입니다');
      this.renderer.print('<span class="t-dim">help 를 입력해 도움말을 확인하세요.</span>');
    }
    this.renderer.print('');
    this._trimOutput();
  }

  /**
   * 히스토리에서 이전(위쪽) 명령어를 반환한다. 화살표 위 키에 바인딩된다.
   * @returns {string|null} 이전 명령어 또는 null (더 이상 없을 때)
   */
  historyUp() {
    if (this.historyIdx > 0) { this.historyIdx--; return this.history[this.historyIdx]; }
    return null;
  }

  /**
   * 히스토리에서 다음(아래쪽) 명령어를 반환한다. 화살표 아래 키에 바인딩된다.
   * @returns {string} 다음 명령어 또는 빈 문자열 (최신 이후일 때)
   */
  historyDown() {
    if (this.historyIdx < this.history.length - 1) { this.historyIdx++; return this.history[this.historyIdx]; }
    this.historyIdx = this.history.length;
    return '';
  }
}

export default TerminalEngine;

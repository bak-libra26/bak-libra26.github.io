import { esc, escPath } from '../utils/html-util.js';
import vfs from './terminal/VirtualFS.js';
import OutputRenderer from './terminal/OutputRenderer.js';
import { resolve, splitCommand, parseArgs, resolveFileArg, displayPath, cwdFromPathname } from './terminal/path-utils.js';
import { HELP_TEXTS, ALL_CMDS, DIR_ONLY_CMDS, FILE_ONLY_CMDS, FLAG_MAP } from './terminal/data/help-texts.js';
import COMMANDS from './terminal/commands/index.js';
import { resolveScript } from './terminal/commands/script.js';
import { execScriptPath } from './terminal/commands/file-ops.js';

class TerminalEngine {
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

  _trimOutput() {
    if (this.outputLines.length > 1000) {
      this.outputLines.splice(0, this.outputLines.length - 1000);
    }
  }

  // Public API delegates (used by useTerminal.js)
  displayPath(absPath) { return displayPath(absPath); }
  printCmd(cmd) { this.renderer.printCmd(cmd); }

  // Context object passed to command handlers
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

  historyUp() {
    if (this.historyIdx > 0) { this.historyIdx--; return this.history[this.historyIdx]; }
    return null;
  }

  historyDown() {
    if (this.historyIdx < this.history.length - 1) { this.historyIdx++; return this.history[this.historyIdx]; }
    this.historyIdx = this.history.length;
    return '';
  }
}

export default TerminalEngine;

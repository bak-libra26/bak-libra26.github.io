import { esc } from '../../utils/html-util.js';
import { displayPath } from './path-utils.js';

class OutputRenderer {
  constructor(outputLines, cwdGetter) {
    this.outputLines = outputLines;
    this._cwd = cwdGetter;
  }

  prompt() {
    return `<span class="t-user">simjunghun</span>:<span class="t-path">${esc(displayPath(this._cwd()))}</span><span class="t-dollar">$</span>`;
  }

  print(html) { this.outputLines.push(html); }
  printCmd(cmd) { this.print(`${this.prompt()} ${esc(cmd)}`); }
  printErr(prefix, msg) { this.print(`<span class="t-err">${esc(prefix)}: ${esc(msg)}</span>`); }
  printHint(cmd) { this.print(`<span class="t-dim">${esc(cmd)} --help 참고</span>`); }

  highlightLine(line) {
    if (line.startsWith('#')) {
      const m = line.match(/^(#{1,4})\s+(.*)/);
      return m ? `<span class="t-green">${esc(m[1])} ${esc(m[2])}</span>` : esc(line);
    }
    if (line.startsWith('```')) return `<span class="t-dim">${esc(line)}</span>`;
    if (line.trim() === '') return '';
    return `<span class="t-out">${esc(line)}</span>`;
  }

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

import { esc } from '../../../utils/html-util.js';
import DateUtil from '../../../utils/date-util.js';
import { displayPath } from '../path-utils.js';

export function execGrep(ctx, args) {
  const { vfs, cwd, renderer } = ctx;
  const { flags, path: keyword, error } = ctx.parseArgs(args, { boolFlags: ['-i'] });
  if (error) { renderer.printErr('grep', `지원하지 않는 옵션입니다: ${error}`); renderer.printHint('grep'); return; }
  if (!keyword) {
    renderer.print('<span class="t-err">사용법: grep [-i] &lt;keyword&gt;</span>');
    renderer.printHint('grep');
    return;
  }

  const caseInsensitive = !!flags['-i'];
  const searchNode = vfs.getNode(cwd);
  const allFiles = searchNode ? vfs.collectFiles(searchNode, cwd) : [];

  const kw = caseInsensitive ? keyword.toLowerCase() : keyword;
  const results = allFiles.filter((f) => {
    const name = f.split('/').pop();
    const post = vfs.getPost(f);
    const cmpName = caseInsensitive ? name.toLowerCase() : name;
    if (cmpName.includes(kw)) return true;
    if (post && post.tags) {
      const tagStr = caseInsensitive ? post.tags.join(' ').toLowerCase() : post.tags.join(' ');
      if (tagStr.includes(kw)) return true;
    }
    return false;
  });

  ctx.setLastResults(results, 'grep');

  if (results.length === 0) {
    renderer.print('<span class="t-dim">(검색 결과 없음)</span>');
    return;
  }

  for (let i = 0; i < results.length; i++) {
    const f = results[i];
    const name = f.split('/').pop();
    const dir = displayPath(f.split('/').slice(0, -1).join('/'));
    const plainName = caseInsensitive ? name.toLowerCase() : name;
    const idx = plainName.indexOf(kw);

    let nameHtml;
    if (idx >= 0) {
      const b = name.slice(0, idx);
      const m = name.slice(idx, idx + keyword.length);
      const a = name.slice(idx + keyword.length);
      nameHtml = `${esc(b)}<span class="t-match">${esc(m)}</span>${esc(a)}`;
    } else {
      nameHtml = esc(name);
    }

    const post = vfs.getPost(f);
    const num = `<span class="t-yellow">[${i + 1}]</span>`;
    const datePart = post ? `  <span class="t-dim">${DateUtil.formatShortDate(post.createdDate)}</span>` : '';

    renderer.print(`${num} <span class="t-file">${nameHtml}</span>${datePart}`);
    renderer.print(`    <span class="t-dim">${esc(dir)}/</span>`);
  }
  renderer.print('');
  renderer.print(`<span class="t-dim">${results.length}개 결과 — open N / cat N 으로 열기</span>`);
}

export function execFind(ctx, args) {
  const { vfs, renderer } = ctx;
  const { flags, path, error } = ctx.parseArgs(args, { valueFlags: ['-name'] });
  if (error) { renderer.printErr('find', `지원하지 않는 옵션입니다: ${error}`); renderer.printHint('find'); return; }

  const namePattern = (flags['-name'] || path || '').replace(/['"]/g, '');
  const searchPath = flags['-name'] ? (path || '.') : '.';

  const base = ctx.resolve(searchPath);
  const node = vfs.getNode(base);
  if (!node || typeof node !== 'object') { renderer.printErr('find', `경로를 찾을 수 없습니다: ${searchPath}`); return; }

  const allFiles = vfs.collectFiles(node, base);
  const escaped = namePattern.replace(/[{}()[\]^$+|\\]/g, '\\$&');
  const regexStr = escaped.replace(/\./g, '\\.').replace(/\*/g, '.*').replace(/\?/g, '.');
  let regex;
  try {
    regex = new RegExp(regexStr, 'i');
  } catch {
    renderer.printErr('find', `잘못된 패턴입니다: ${namePattern}`);
    return;
  }
  const results = allFiles.filter((f) => regex.test(f.split('/').pop()));

  ctx.setLastResults(results, 'find');

  if (results.length === 0) {
    renderer.print('<span class="t-dim">(검색 결과 없음)</span>');
    return;
  }

  for (let i = 0; i < results.length; i++) {
    const num = `<span class="t-yellow">[${i + 1}]</span>`;
    renderer.print(`${num} <span class="t-out">${esc(displayPath(results[i]))}</span>`);
  }
  renderer.print('');
  renderer.print(`<span class="t-dim">${results.length}개 결과 — open N / cat N 으로 열기</span>`);
}

export function execWc(ctx, args) {
  const { vfs, cwd, renderer } = ctx;
  const { flags } = ctx.parseArgs(args, { boolFlags: ['-l'] });
  if (!flags['-l']) {
    renderer.print('<span class="t-err">사용법: wc -l</span>');
    renderer.printHint('wc');
    return;
  }

  if (ctx.lastResults.length > 0 && ctx.lastResultContext) {
    renderer.print(`<span class="t-out">${ctx.lastResults.length}</span> <span class="t-dim">(${ctx.lastResultContext} 결과)</span>`);
  } else {
    const node = vfs.getNode(cwd);
    const files = node ? vfs.collectFiles(node, cwd) : [];
    renderer.print(`<span class="t-out">${files.length}</span> <span class="t-dim">${esc(displayPath(cwd))}</span>`);
  }
}

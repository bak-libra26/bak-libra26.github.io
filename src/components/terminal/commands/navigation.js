import { esc } from '../../../utils/html-util.js';
import DateUtil from '../../../utils/date-util.js';
import { getFileIcon } from '../data/file-icons.js';
import { getSyncRoute, displayPath } from '../path-utils.js';

export function execLs(ctx, args) {
  const { vfs, cwd, renderer } = ctx;
  const { flags, path, error } = ctx.parseArgs(args, { boolFlags: ['-l', '-a', '-la', '-al'] });
  if (error) { renderer.printErr('ls', `지원하지 않는 옵션입니다: ${error}`); renderer.printHint('ls'); return; }

  const showAll = flags['-a'] || flags['-la'] || flags['-al'];
  const longFormat = flags['-l'] || flags['-la'] || flags['-al'];

  const target = path ? ctx.resolve(path) : cwd;
  const node = vfs.getNode(target);
  if (node === undefined) { renderer.printErr('ls', `경로를 찾을 수 없습니다: ${displayPath(target)}`); return; }
  if (node === null || node === 'image' || node === 'script') { renderer.print(`<span class="t-file">${esc(displayPath(target))}</span>`); return; }

  const isDir = (v) => v !== null && typeof v === 'object';
  const entries = Object.entries(node)
    .filter(([name]) => showAll || !name.startsWith('.'))
    .sort(([, av], [, bv]) => {
      if (isDir(av) !== isDir(bv)) return isDir(av) ? -1 : 1;
      return 0;
    });
  if (entries.length === 0) return;

  ctx.setLastResults(vfs.collectFiles(node, target), 'ls');

  if (longFormat) {
    renderer.print(`<span class="t-dim">합계 ${entries.length}</span>`);
    for (const [name, child] of entries) {
      if (isDir(child)) {
        const count = vfs.countFiles(child);
        renderer.print(
          `<span class="t-icon">${getFileIcon(name, true)}</span> ` +
          `<span class="t-dim">drwxr-xr-x</span>  ` +
          `<span class="t-dir">${esc(name)}/</span>` +
          `  <span class="t-dim">${count} posts</span>`
        );
      } else if (child === 'image') {
        renderer.print(
          `<span class="t-icon">${getFileIcon(name, false)}</span> ` +
          `<span class="t-dim">-rw-r--r--</span>  ` +
          `<span class="t-file">${esc(name)}</span>`
        );
      } else if (child === 'hidden') {
        const post = vfs.getPost(target + '/' + name);
        const date = post ? DateUtil.formatShortDate(post.createdDate) : '';
        renderer.print(
          `<span class="t-icon">${getFileIcon(name, false)}</span> ` +
          `<span class="t-dim">-rw-------</span>  ` +
          `<span class="t-dim">${esc(name)}</span>` +
          (date ? `  <span class="t-dim">${date}</span>` : '') +
          `  <span class="t-yellow">[draft]</span>`
        );
      } else {
        const post = vfs.getPost(target + '/' + name);
        if (post) {
          const date = DateUtil.formatShortDate(post.createdDate);
          const tags = (post.tags || []).slice(0, 3).join(', ');
          renderer.print(
            `<span class="t-icon">${getFileIcon(name, false)}</span> ` +
            `<span class="t-dim">-rw-r--r--</span>  ` +
            `<span class="t-file">${esc(name)}</span>` +
            `  <span class="t-dim">${date}</span>` +
            `  <span class="t-dim">${post.readingTime} min</span>` +
            (tags ? `  <span class="t-purple">${esc(tags)}</span>` : '')
          );
        } else {
          renderer.print(`<span class="t-icon">${getFileIcon(name, false)}</span> <span class="t-dim">-rw-r--r--</span>  <span class="t-file">${esc(name)}</span>`);
        }
      }
    }
  } else {
    const cols = entries.map(([name, child]) =>
      isDir(child)
        ? `<span class="t-icon">${getFileIcon(name, true)}</span> <span class="t-dir">${esc(name)}/</span>`
        : `<span class="t-icon">${getFileIcon(name, false)}</span> <span class="t-file">${esc(name)}</span>`
    );
    const perRow = entries.length > 6 ? 3 : entries.length > 3 ? 2 : entries.length;
    for (let i = 0; i < cols.length; i += perRow) {
      renderer.print(cols.slice(i, i + perRow).join('  '));
    }
  }
}

export function execCd(ctx, args) {
  const { vfs, cwd, renderer } = ctx;
  const path = args.join(' ');
  const target = path ? ctx.resolve(path) : '/';
  if (!vfs.isDir(target)) {
    if (vfs.isFile(target)) renderer.printErr('cd', `디렉터리가 아닙니다: ${path}`);
    else renderer.printErr('cd', `디렉터리가 없습니다: ${path}`);
    return;
  }
  ctx.setCwd(target);

  const syncRoute = getSyncRoute(target);
  if (syncRoute && ctx.callbacks.onSyncUrl) {
    renderer.print(`<span class="t-green">→ ${esc(syncRoute)}</span>`);
    try { ctx.callbacks.onSyncUrl(syncRoute); } catch { /* ignore */ }
  }
}

export function execPwd(ctx) {
  ctx.renderer.print(`<span class="t-out">${esc(ctx.cwd)}</span>`);
}

export function execTree(ctx, args) {
  const { vfs, renderer } = ctx;
  const path = args.join(' ') || '.';
  const target = ctx.resolve(path);
  const node = vfs.getNode(target);
  if (!node || typeof node !== 'object') { renderer.printErr('tree', `경로를 찾을 수 없습니다: ${path}`); return; }

  let dirCount = 0, fileCount = 0;
  renderer.print(`<span class="t-dir">${esc(displayPath(target))}</span>`);

  const isDirNode = (v) => v !== null && typeof v === 'object';
  const walk = (n, prefix, depth) => {
    if (depth > 3) { renderer.print(`<span class="t-dim">${esc(prefix)}...</span>`); return; }
    const entries = Object.entries(n).sort(([, av], [, bv]) => {
      if (isDirNode(av) !== isDirNode(bv)) return isDirNode(av) ? -1 : 1;
      return 0;
    });
    entries.forEach(([name, child], i) => {
      const last = i === entries.length - 1;
      const connector = last ? '└── ' : '├── ';
      const ext = last ? '    ' : '│   ';
      if (isDirNode(child)) {
        dirCount++;
        renderer.print(`<span class="t-dim">${esc(prefix + connector)}</span><span class="t-dir">${esc(name)}/</span>`);
        walk(child, prefix + ext, depth + 1);
      } else {
        fileCount++;
        renderer.print(`<span class="t-dim">${esc(prefix + connector)}</span><span class="t-file">${esc(name)}</span>`);
      }
    });
  };
  walk(node, '', 0);
  renderer.print('');
  renderer.print(`<span class="t-dim">${dirCount} directories, ${fileCount} files</span>`);
}

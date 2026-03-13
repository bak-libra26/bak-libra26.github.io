import { esc, escPath } from '../../../utils/html-util.js';
import DateUtil from '../../../utils/date-util.js';
import { POSTS_ROOT } from '../data/constants.js';
import { EASTER_EGG_FILES } from '../data/easter-eggs.js';
import { displayPath } from '../path-utils.js';

function resolveFileWithErrors(ctx, cmd, args) {
  const path = args.join(' ');
  if (!path) {
    ctx.renderer.print(`<span class="t-err">사용법: ${cmd} &lt;file&gt;</span>`);
    ctx.renderer.printHint(cmd);
    return null;
  }
  const target = ctx.resolveFileArg(path);
  if (!target) {
    ctx.renderer.printErr(cmd, `파일을 찾을 수 없습니다: ${path}`);
    return null;
  }
  const node = ctx.vfs.getNode(target);
  if (node !== null && node !== undefined && node !== 'image' && typeof node === 'object') {
    ctx.renderer.printErr(cmd, '디렉터리입니다');
    return null;
  }
  return target;
}

const HIDDEN_MESSAGES = [
  '🔒 이 글은 아직 작성 중입니다... 커밋하기엔 이른 코드처럼요.',
  '🚧 공사 중 — hard hat required.',
  '📝 draft 브랜치에만 존재하는 글입니다. merge 예정일: 미정',
  '🙈 git stash 된 글입니다. pop 될 때까지 기다려주세요.',
  '⏳ 아직 brew install 중... 잠시만 기다려주세요.',
  '🔐 chmod 000 — 작성자 외 읽기 권한이 없습니다.',
];

function getHiddenMessage() {
  return HIDDEN_MESSAGES[Math.floor(Math.random() * HIDDEN_MESSAGES.length)];
}

function previewFile(ctx, target) {
  const { vfs, renderer } = ctx;
  const post = vfs.getPost(target);
  const name = target.split('/').pop();

  if (vfs.isHidden(target)) {
    renderer.print('');
    renderer.print(`<span class="t-yellow">${getHiddenMessage()}</span>`);
    renderer.print('');
    return;
  }

  if (vfs.isImage(target)) {
    renderer.print(`<span class="t-dim">cat: ${esc(name)}: 바이너리 파일입니다</span>`);
    renderer.print(`<span class="t-dim">tip: "open ${esc(escPath(name))}" 으로 미리보기하세요</span>`);
    return;
  }

  renderer.print('');
  renderer.print(`<span class="t-green">━━━ ${esc(name.replace('.md', ''))} ━━━</span>`);

  if (post) {
    const date = DateUtil.formatShortDate(post.createdDate);
    const cats = post.categories.join(' / ');
    const tags = (post.tags || []).join(', ');
    renderer.print(`<span class="t-dim">날짜: ${esc(date)}  ·  카테고리: ${esc(cats)}  ·  ${post.readingTime} min read</span>`);
    if (tags) renderer.print(`<span class="t-dim">태그: ${esc(tags)}</span>`);
    renderer.print('');

    const lines = post.content.split('\n');
    const maxLines = 30;
    let inCodeBlock = false;

    for (let i = 0; i < Math.min(lines.length, maxLines); i++) {
      const line = lines[i];
      if (line.startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        renderer.print(`<span class="t-dim">${esc(line)}</span>`);
      } else if (inCodeBlock) {
        renderer.print(`<span class="t-cyan">${esc(line)}</span>`);
      } else {
        renderer.print(renderer.highlightLine(line));
      }
    }

    if (lines.length > maxLines) {
      renderer.print('');
      renderer.print(`<span class="t-dim">... (${lines.length - maxLines}줄 더 있음 — open 으로 전체 보기)</span>`);
    }
  } else if (EASTER_EGG_FILES[target]) {
    for (const line of EASTER_EGG_FILES[target]) {
      renderer.print(`<span class="t-out">${esc(line)}</span>`);
    }
  } else {
    renderer.print(`<span class="t-dim">${esc(displayPath(target))}</span>`);
  }
  renderer.print(`<span class="t-green">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>`);
}

function openFile(ctx, target) {
  const { vfs, renderer } = ctx;
  const post = vfs.getPost(target);
  const name = target.split('/').pop();

  if (vfs.isHidden(target)) {
    renderer.print('');
    renderer.print(`<span class="t-yellow">${getHiddenMessage()}</span>`);
    renderer.print('');
    return;
  }

  if (vfs.isScript(target)) {
    execScriptPath(ctx, target);
    return;
  }

  if (vfs.isImage(target)) {
    const relativePath = target.startsWith(POSTS_ROOT + '/')
      ? target.slice(POSTS_ROOT.length + 1)
      : target.slice(1);
    const imgUrl = `/images/posts/${relativePath}`;
    renderer.print(`<span class="t-green">→ ${esc(name)}</span>`);
    if (ctx.callbacks.onPreviewImage) {
      try { ctx.callbacks.onPreviewImage(imgUrl, name); } catch { /* ignore */ }
    }
    return;
  }

  if (!post) {
    previewFile(ctx, target);
    return;
  }

  renderer.print(`<span class="t-green">→ ${esc(name.replace('.md', ''))}</span>`);
  renderer.print(`<span class="t-dim">${esc(displayPath(target))}</span>`);

  if (ctx.callbacks.onOpenPost) {
    try { ctx.callbacks.onOpenPost(target); }
    catch { renderer.printErr('open', '페이지 이동 중 오류 발생'); }
  }
}

function generateHexDump(fileName) {
  const ext = fileName.split('.').pop().toLowerCase();
  const SIGNATURES = {
    png: [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52],
    jpg: [0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x00, 0x00, 0x01],
    jpeg: [0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x00, 0x00, 0x01],
    gif: [0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x20, 0x03, 0x58, 0x02, 0xF7, 0x00, 0x00, 0x00, 0x00, 0x00],
    svg: [0x3C, 0x3F, 0x78, 0x6D, 0x6C, 0x20, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6F, 0x6E, 0x3D, 0x22, 0x31],
    webp: [0x52, 0x49, 0x46, 0x46, 0x00, 0x00, 0x00, 0x00, 0x57, 0x45, 0x42, 0x50, 0x56, 0x50, 0x38, 0x20],
  };
  const sig = SIGNATURES[ext] || SIGNATURES.png;
  const totalLines = 24;
  const textLines = [];
  const htmlLines = [];

  textLines.push(`"${fileName}" [noeol][converted] -- binary file --`);
  htmlLines.push(`<span class="t-err">"${esc(fileName)}" [noeol][converted] -- binary file --</span>`);
  textLines.push('');
  htmlLines.push('');

  for (let i = 0; i < totalLines; i++) {
    const offset = i * 16;
    const bytes = [];
    for (let j = 0; j < 16; j++) {
      if (i === 0 && j < sig.length) bytes.push(sig[j]);
      else bytes.push(Math.floor(Math.random() * 256));
    }
    const hex = bytes.map(b => b.toString(16).padStart(2, '0')).join(' ');
    const ascii = bytes.map(b => (b >= 0x20 && b <= 0x7e) ? String.fromCharCode(b) : '.').join('');
    const addr = offset.toString(16).padStart(8, '0');
    const text = `${addr}  ${hex}  |${ascii}|`;
    textLines.push(text);
    htmlLines.push(
      `<span class="t-dim">${esc(addr)}</span>  ` +
      `<span class="t-cyan">${esc(hex)}</span>  ` +
      `<span class="t-dim">|</span><span class="t-out">${esc(ascii)}</span><span class="t-dim">|</span>`
    );
  }

  textLines.push('');
  htmlLines.push('');
  textLines.push(`-- ${totalLines * 16} bytes --`);
  htmlLines.push(`<span class="t-dim">-- ${totalLines * 16} bytes --</span>`);

  return { htmlLines, textLines };
}

export function execCat(ctx, args) {
  const target = resolveFileWithErrors(ctx, 'cat', args);
  if (!target) return;
  previewFile(ctx, target);
}

export function execVi(ctx, args) {
  const target = resolveFileWithErrors(ctx, 'vi', args);
  if (!target) return;
  const { vfs, renderer } = ctx;
  const fileName = target.split('/').pop();

  if (vfs.isHidden(target)) {
    renderer.print('');
    renderer.print(`<span class="t-yellow">${getHiddenMessage()}</span>`);
    renderer.print('');
    return;
  }

  if (vfs.isImage(target)) {
    const { htmlLines, textLines } = generateHexDump(fileName);
    renderer.print(`<span class="t-dim">vi ${esc(fileName)}</span>`);
    if (ctx.callbacks.onViOpen) {
      try { ctx.callbacks.onViOpen(htmlLines, textLines, fileName); } catch { /* ignore */ }
    }
    return;
  }

  const post = vfs.getPost(target);
  const easterEgg = EASTER_EGG_FILES[target];
  let htmlLines, textLines;

  if (post) {
    const raw = post.content.split('\n');
    textLines = raw;
    htmlLines = raw.map((line) => renderer.highlightLine(line));
  } else if (easterEgg) {
    textLines = easterEgg;
    htmlLines = easterEgg.map((l) => `<span class="t-out">${esc(l)}</span>`);
  } else {
    textLines = [''];
    htmlLines = [`<span class="t-dim">(빈 파일)</span>`];
  }

  renderer.print(`<span class="t-dim">vi ${esc(fileName)}</span>`);
  if (ctx.callbacks.onViOpen) {
    try { ctx.callbacks.onViOpen(htmlLines, textLines, fileName); } catch { /* ignore */ }
  }
}

export function execOpen(ctx, args) {
  const target = resolveFileWithErrors(ctx, 'open', args);
  if (!target) return;
  openFile(ctx, target);
}

export function execWget(ctx, args) {
  const { vfs, renderer } = ctx;
  const { flags, path: filePath, error } = ctx.parseArgs(args, { valueFlags: ['--format'] });
  if (error) { renderer.printErr('wget', `지원하지 않는 옵션입니다: ${error}`); renderer.printHint('wget'); return; }
  if (!filePath) {
    renderer.print('<span class="t-err">사용법: wget &lt;file&gt; [--format md|html]</span>');
    renderer.printHint('wget');
    return;
  }

  const format = flags['--format'] || 'md';
  if (format !== 'md' && format !== 'html') {
    renderer.printErr('wget', `지원하지 않는 포맷입니다: ${format} (md, html만 지원)`);
    return;
  }

  const target = ctx.resolveFileArg(filePath);
  if (!target) { renderer.printErr('wget', `포스트를 찾을 수 없습니다: ${filePath}`); return; }

  const post = vfs.getPost(target);
  if (!post) { renderer.printErr('wget', `포스트 데이터가 없습니다: ${filePath}`); return; }

  const fileName = post.title.replace(/[/\\:*?"<>|]/g, '_');

  if (format === 'md') {
    const blob = new Blob([post.content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${fileName}.md`; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    renderer.print(`<span class="t-green">✓ 다운로드: ${esc(fileName)}.md</span>`);
  } else {
    const html = `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>${esc(post.title)}</title>
<style>body{font-family:system-ui;max-width:720px;margin:40px auto;padding:0 20px;line-height:1.7;}
pre{background:#f5f5f5;padding:16px;border-radius:6px;overflow-x:auto;}code{font-family:monospace;}</style>
</head><body>
<h1>${esc(post.title)}</h1>
<p><em>${post.categories.join(' / ')} · ${DateUtil.formatShortDate(post.createdDate)}</em></p>
<hr>
${post.content.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}
</body></html>`;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${fileName}.html`; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    renderer.print(`<span class="t-green">✓ 다운로드: ${esc(fileName)}.html</span>`);
  }
}

function execScriptPath(ctx, path) {
  const { renderer } = ctx;
  const name = path.split('/').pop();
  const SCRIPT_MAP = {
    'snake.sh': 'snake',
    'cmatrix.sh': 'cmatrix',
    '2048.sh': '2048',
    'blocks.sh': 'blocks',
    'pipes.sh': 'pipes',
  };
  const appType = SCRIPT_MAP[name];
  if (!appType) {
    renderer.printErr(name, '실행할 수 없는 스크립트입니다');
    return;
  }
  renderer.print(`<span class="t-green">$ ./${esc(name)}</span>`);
  renderer.print(`<span class="t-dim">loading ${esc(name)}...</span>`);
  if (ctx.callbacks.onAppLaunch) ctx.callbacks.onAppLaunch(appType);
}

// Exported for use by TerminalEngine.exec() for ./script handling
export { execScriptPath };

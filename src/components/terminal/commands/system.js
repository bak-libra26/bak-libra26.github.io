import { esc } from '../../../utils/html-util.js';
import PostUtil from '../../../utils/post-util.js';

export function execHelp(ctx) {
  const r = ctx.renderer;
  r.print('');
  r.print('<span class="t-green">사용 가능한 명령어:</span>');
  r.print('');
  r.print('  <span class="t-cyan">ls</span> <span class="t-dim">[-l]</span>              현재 디렉터리 목록');
  r.print('  <span class="t-cyan">cd</span> <span class="t-dim">&lt;dir&gt;</span>            디렉터리 이동 (posts/about → 페이지 이동)');
  r.print('  <span class="t-cyan">pwd</span>                  현재 경로 출력');
  r.print('  <span class="t-cyan">tree</span> <span class="t-dim">[dir]</span>           디렉터리 트리');
  r.print('  <span class="t-cyan">cat</span> <span class="t-dim">&lt;file&gt;</span>           포스트 미리보기');
  r.print('  <span class="t-cyan">vi</span> <span class="t-dim">&lt;file&gt;</span>            vi 뷰어로 열기 (j/k/:q)');
  r.print('  <span class="t-cyan">open</span> <span class="t-dim">&lt;file&gt;</span>          포스트 열기 (브라우저 이동)');
  r.print('  <span class="t-cyan">grep</span> <span class="t-dim">[-i] &lt;keyword&gt;</span>  제목/태그 검색');
  r.print('  <span class="t-cyan">find</span> <span class="t-dim">&lt;path&gt; -name &lt;pattern&gt;</span>  파일 검색');
  r.print('  <span class="t-cyan">wc</span> <span class="t-dim">-l</span>               포스트 수 (컨텍스트 인식)');
  r.print('  <span class="t-cyan">wget</span> <span class="t-dim">&lt;file&gt;</span>          포스트 다운로드');
  r.print('  <span class="t-cyan">whoami</span>               사용자명');
  r.print('  <span class="t-cyan">history</span>              명령어 기록');
  r.print('  <span class="t-cyan">clear</span>                화면 지우기');
  r.print('  <span class="t-cyan">exit</span>                 터미널 닫기');
  r.print('');
  r.print('<span class="t-green">extras:</span>');
  r.print('');
  r.print('  <span class="t-cyan">neofetch</span>             시스템 정보 + ASCII 아트');
  r.print('  <span class="t-cyan">fortune</span>              랜덤 명언');
  r.print('  <span class="t-cyan">cowsay</span> <span class="t-dim">[text]</span>        소가 말해요');
  r.print('');
  r.print('<span class="t-green">games:</span>  <span class="t-dim">cd /games 에서 .sh 파일 실행</span>');
  r.print('');
  r.print('  <span class="t-dim">./snake.sh</span>           스네이크 게임');
  r.print('  <span class="t-dim">./cmatrix.sh</span>         Matrix rain');
  r.print('  <span class="t-dim">./2048.sh</span>            2048 퍼즐');
  r.print('  <span class="t-dim">./blocks.sh</span>          블록 쌓기 퍼즐');
  r.print('  <span class="t-dim">./pipes.sh</span>           파이프 스크린세이버');
  r.print('  <span class="t-dim">sl</span>                   🚂 (ls 오타 이스터에그)');
  r.print('');
  r.print('<span class="t-dim">Tab: 자동완성 · Tab×2: 후보 목록 · ↑↓: 히스토리</span>');
  r.print('<span class="t-dim">Ctrl+A/E: 줄 처음/끝 · Ctrl+W: 단어 삭제 · Ctrl+U: 줄 삭제</span>');
  r.print('<span class="t-dim">Ctrl+K: 뒤 삭제 · Ctrl+L: 클리어 · Ctrl+D: 종료 · &lt;cmd&gt; --help</span>');
}

export function execHistory(ctx) {
  const r = ctx.renderer;
  if (ctx.history.length === 0) { r.print('<span class="t-dim">(비어 있음)</span>'); return; }
  ctx.history.forEach((cmd, i) => {
    r.print(`<span class="t-dim">${String(i + 1).padStart(4)}</span>  ${esc(cmd)}`);
  });
}

export function execWhoami(ctx) {
  ctx.renderer.print('<span class="t-out">simjunghun</span>');
}

export function execClear(ctx) {
  ctx.renderer.outputLines.length = 0;
}

export function execExit(ctx) {
  if (ctx.callbacks.onClose) ctx.callbacks.onClose();
}

export function execNeofetch(ctx) {
  const r = ctx.renderer;
  const posts = PostUtil.posts;
  const categories = new Set();
  const tags = new Set();
  for (const p of posts) {
    if (p.categories) p.categories.forEach((c) => categories.add(c));
    if (p.tags) p.tags.forEach((t) => tags.add(t));
  }
  const ua = navigator.userAgent;
  const browser = ua.includes('Chrome') ? 'Chrome' : ua.includes('Firefox') ? 'Firefox' : ua.includes('Safari') ? 'Safari' : 'Unknown';
  const os = ua.includes('Mac') ? 'macOS' : ua.includes('Win') ? 'Windows' : ua.includes('Linux') ? 'Linux' : 'Unknown';
  const now = new Date();
  const uptime = `${now.getHours()}h ${now.getMinutes()}m`;

  const ascii = [
    '        <span class="t-green">  ██████╗ ██╗███╗   ███╗</span>',
    '        <span class="t-green"> ██╔════╝ ██║████╗ ████║</span>',
    '        <span class="t-green"> ╚█████╗  ██║██╔████╔██║</span>',
    '        <span class="t-green">  ╚═══██╗ ██║██║╚██╔╝██║</span>',
    '        <span class="t-green"> ██████╔╝ ██║██║ ╚═╝ ██║</span>',
    '        <span class="t-green"> ╚═════╝  ╚═╝╚═╝     ╚═╝</span>',
  ];

  const info = [
    `<span class="t-green">simjunghun</span><span class="t-dim">@</span><span class="t-green">blog</span>`,
    '<span class="t-dim">─────────────────────</span>',
    `<span class="t-cyan">OS</span>: ${esc(os)}`,
    `<span class="t-cyan">Browser</span>: ${esc(browser)}`,
    `<span class="t-cyan">Shell</span>: sim-terminal v5.0`,
    `<span class="t-cyan">Uptime</span>: ${uptime}`,
    `<span class="t-cyan">Posts</span>: ${posts.length}`,
    `<span class="t-cyan">Categories</span>: ${categories.size}`,
    `<span class="t-cyan">Tags</span>: ${tags.size}`,
    `<span class="t-cyan">Theme</span>: ${document.documentElement.getAttribute('data-theme') || 'dark'}`,
    '',
    '<span style="background:#f87171;color:#f87171">██</span><span style="background:#fbbf24;color:#fbbf24">██</span><span style="background:#4ade80;color:#4ade80">██</span><span style="background:#60a5fa;color:#60a5fa">██</span><span style="background:#a78bfa;color:#a78bfa">██</span><span style="background:#22d3ee;color:#22d3ee">██</span><span style="background:#fb923c;color:#fb923c">██</span><span style="background:#d4d4dc;color:#d4d4dc">██</span>',
  ];

  r.print('');
  const maxLines = Math.max(ascii.length, info.length);
  for (let i = 0; i < maxLines; i++) {
    const left = ascii[i] || '                              ';
    const right = info[i] || '';
    r.print(`${left}  ${right}`);
  }
}

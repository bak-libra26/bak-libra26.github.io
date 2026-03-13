import { esc } from '../../../utils/html-util.js';

export function execFortune(ctx) {
  const r = ctx.renderer;
  const quotes = [
    { text: '코드는 글쓰기와 같다. 읽는 사람을 생각하며 쓴다.', author: 'Robert C. Martin' },
    { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
    { text: '완벽한 코드는 없다. 완벽하게 작동하는 코드만 있을 뿐.', author: 'Unknown' },
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { text: '좋은 코드는 그 자체로 최고의 문서이다.', author: 'Steve McConnell' },
    { text: '프로그래밍은 생각하는 것이지, 타이핑하는 것이 아니다.', author: 'Rich Hickey' },
    { text: 'Debugging is twice as hard as writing the code.', author: 'Brian Kernighan' },
    { text: '삭제한 코드에는 버그가 없다.', author: 'Jeff Sickel' },
    { text: 'Any fool can write code that a computer can understand.', author: 'Martin Fowler' },
    { text: '오늘의 TODO: 커피 마시기, 코드 짜기, 커피 마시기, 버그 고치기, 커피...', author: 'Every Developer' },
    { text: 'It works on my machine. ¯\\_(ツ)_/¯', author: 'Anonymous' },
    { text: '내일의 나에게 미안하지 않은 코드를 작성하자.', author: 'Unknown' },
    { text: 'There are only two hard things in CS: cache invalidation and naming things.', author: 'Phil Karlton' },
    { text: '// TODO: 나중에 고치기 (3년째)', author: 'Legacy Code' },
    { text: 'git commit -m "fix" 의 실제 의미: 뭔가 바꿨는데 설명하기 귀찮음', author: 'Every Developer' },
  ];
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  ctx.lastFortune = q.text;
  r.print('');
  r.print(`<span class="t-purple"> "${esc(q.text)}"</span>`);
  r.print(`<span class="t-dim">    — ${esc(q.author)}</span>`);
}

export function execCowsay(ctx, args) {
  const r = ctx.renderer;
  const text = args.length > 0
    ? args.join(' ').slice(0, 200)
    : (ctx.lastFortune || 'moo');

  const line = esc(text);
  const len = text.length;
  const top = ' ' + '_'.repeat(len + 2);
  const bot = ' ' + '-'.repeat(len + 2);

  r.print('');
  r.print(`<span class="t-out">${top}</span>`);
  r.print(`<span class="t-out">&lt; ${line} &gt;</span>`);
  r.print(`<span class="t-out">${bot}</span>`);
  r.print('<span class="t-out">        \\   ^__^</span>');
  r.print('<span class="t-out">         \\  (oo)\\_______</span>');
  r.print('<span class="t-out">            (__)\\       )\\/\\</span>');
  r.print('<span class="t-out">                ||----w |</span>');
  r.print('<span class="t-out">                ||     ||</span>');
}

export function execSl(ctx) {
  ctx.renderer.print('<span class="t-dim">🚂 choo choo!</span>');
  if (ctx.callbacks.onAppLaunch) ctx.callbacks.onAppLaunch('sl');
}

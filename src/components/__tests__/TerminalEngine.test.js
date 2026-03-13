/**
 * TerminalEngine comprehensive unit tests
 * Run with: node src/components/__tests__/TerminalEngine.test.js
 */

// ── Test framework ──
let passed = 0;
let failed = 0;

function group(name) {
  console.log(`\n[${name}]`);
}

function assert(condition, message) {
  if (condition) { passed++; console.log(`  ✓ ${message}`); }
  else { failed++; console.log(`  ✗ ${message}`); }
}

function assertEqual(actual, expected, message) {
  if (actual === expected) { passed++; console.log(`  ✓ ${message}`); }
  else {
    failed++;
    console.log(`  ✗ ${message}`);
    console.log(`    expected: ${JSON.stringify(expected)}`);
    console.log(`    actual:   ${JSON.stringify(actual)}`);
  }
}

function assertDeepEqual(actual, expected, message) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) { passed++; console.log(`  ✓ ${message}`); }
  else {
    failed++;
    console.log(`  ✗ ${message}`);
    console.log(`    expected: ${JSON.stringify(expected)}`);
    console.log(`    actual:   ${JSON.stringify(actual)}`);
  }
}

function assertIncludes(str, substr, message) {
  if (str.includes(substr)) { passed++; console.log(`  ✓ ${message}`); }
  else { failed++; console.log(`  ✗ ${message}`); console.log(`    "${substr}" not found in: ${str.slice(0, 200)}`); }
}

// ── Constants & helpers ──
const HOME = '/home/simjunghun';
const POSTS_ROOT = HOME + '/posts';

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escPath(s) { return s.replace(/ /g, '\\ '); }

// ── splitCommand (mirrors TerminalEngine) ──
function splitCommand(text) {
  const parts = [];
  let current = '';
  let escaped = false;
  let inQuote = false;
  let quoteChar = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (escaped) { current += ch; escaped = false; continue; }
    if (ch === '\\') { escaped = true; current += ch; continue; }
    if (!inQuote && (ch === '"' || ch === "'")) { inQuote = true; quoteChar = ch; continue; }
    if (inQuote && ch === quoteChar) { inQuote = false; continue; }
    if (!inQuote && ch === ' ') {
      if (current) parts.push(current);
      current = '';
      continue;
    }
    current += ch;
  }
  if (current) parts.push(current);
  return parts.map((p) => p.replace(/\\ /g, ' '));
}

// ── _parseArgs (mirrors TerminalEngine) ──
function parseArgs(args, { boolFlags = [], valueFlags = [] } = {}) {
  const bools = new Set(boolFlags);
  const values = new Set(valueFlags);
  const flags = {};
  const rest = [];
  for (let i = 0; i < args.length; i++) {
    if (values.has(args[i]) && i + 1 < args.length) {
      flags[args[i]] = args[i + 1]; i++;
    } else if (bools.has(args[i])) {
      flags[args[i]] = true;
    } else if (args[i].startsWith('-')) {
      return { flags, path: rest.join(' '), error: args[i] };
    } else {
      rest.push(args[i]);
    }
  }
  return { flags, path: rest.join(' '), error: null };
}

// ── Mock TerminalEngine ──
class MockEngine {
  constructor(mockFs, mockPostMap) {
    this.fs = mockFs;
    this.postMap = mockPostMap || {};
    this.cwd = HOME;
    this.history = [];
    this.historyIdx = -1;
    this.tabCount = 0;
    this.outputLines = [];
    this.lastResults = [];
    this.lastResultContext = null;
  }

  resolve(input) {
    let path = input.replace(/\\ /g, ' ');
    if (path === '~' || path === '') return HOME;
    if (path.startsWith('~/')) path = HOME + '/' + path.slice(2);
    else if (!path.startsWith('/')) path = this.cwd + '/' + path;
    const parts = path.split('/').filter(Boolean);
    const result = [];
    for (const p of parts) {
      if (p === '..') { if (result.length > 0) result.pop(); }
      else if (p !== '.') result.push(p);
    }
    return '/' + result.join('/');
  }

  getNode(absPath) {
    if (absPath === HOME || absPath === HOME + '/') return this.fs;
    const rel = absPath.startsWith(HOME + '/') ? absPath.slice(HOME.length + 1) : null;
    if (rel === null) return null;
    const parts = rel.split('/').filter(Boolean);
    let node = this.fs;
    for (const p of parts) {
      if (node === null || typeof node !== 'object' || !(p in node)) return undefined;
      node = node[p];
    }
    return node;
  }

  isDir(absPath) { const n = this.getNode(absPath); return n !== null && n !== undefined && typeof n === 'object'; }
  isFile(absPath) { return this.getNode(absPath) === null; }
  displayPath(absPath) {
    if (absPath === HOME) return '~';
    if (absPath.startsWith(HOME + '/')) return '~/' + absPath.slice(HOME.length + 1);
    return absPath;
  }
  getPost(absPath) { return this.postMap[absPath] || null; }

  resolveFileArg(arg) {
    const target = this.resolve(arg);
    if (this.isFile(target)) return target;
    const cwdNode = this.getNode(this.cwd);
    if (cwdNode && typeof cwdNode === 'object') {
      const match = Object.keys(cwdNode).find((k) =>
        k === arg || k.startsWith(arg) || k.toLowerCase().includes(arg.toLowerCase())
      );
      if (match && cwdNode[match] === null) return this.cwd + '/' + match;
    }
    return null;
  }

  collectFiles(node, path) {
    const results = [];
    if (node === null) return results;
    for (const [name, child] of Object.entries(node)) {
      const fullPath = path + '/' + name;
      if (child === null) results.push(fullPath);
      else results.push(...this.collectFiles(child, fullPath));
    }
    return results;
  }

  countFiles(node) {
    if (node === null) return 0;
    let count = 0;
    for (const child of Object.values(node)) {
      if (child === null) count++;
      else count += this.countFiles(child);
    }
    return count;
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

// ── Mock filesystem ──
const mockFs = {
  posts: {
    '개발': {
      '언어': {
        '자바': {
          'NIO': {
            'Java NIO: 단방향 스트림 대신 양방향 채널로.md': null,
            'Java NIO: Buffer와 Channel 기초.md': null,
            'Java NIO 개요.md': null,
          },
        },
        '파이썬': { 'Python 기초 문법.md': null },
      },
      '백엔드': {
        '스프링': {
          '스프링 시큐리티': {
            '스프링 시큐리티: JWT 인증 구현하기.md': null,
            '스프링 시큐리티: CORS는 왜 필요하고, 어떻게 동작할까.md': null,
            '스프링 시큐리티: SecurityFilterChain은 어떻게 동작할까.md': null,
          },
          '스프링 부트': { 'Spring Boot AutoConfiguration.md': null },
        },
      },
    },
    '사이드 프로젝트': {
      '메신저': {
        '메신저: API 공통 응답 구조 설계하기.md': null,
        '메신저: Redis로 이메일 인증 Rate Limiting 구현하기.md': null,
      },
    },
  },
};

const mockPostMap = {};
function buildMockPostMap(node, path) {
  for (const [name, child] of Object.entries(node)) {
    const fullPath = path + '/' + name;
    if (child === null) {
      mockPostMap[fullPath] = {
        title: name.replace('.md', ''),
        content: '# Sample\n\nTest post.\n\n## Section 1\n\nContent here.\n',
        categories: fullPath.replace(POSTS_ROOT + '/', '').split('/').slice(0, -1),
        tags: ['test', 'sample'],
        createdDate: '2025-01-15',
        readingTime: 5,
      };
    } else { buildMockPostMap(child, fullPath); }
  }
}
buildMockPostMap(mockFs.posts, POSTS_ROOT);

// ════════════════════════════════════════════
// TESTS
// ════════════════════════════════════════════

// ── 1. splitCommand ──
group('splitCommand');

assertDeepEqual(splitCommand('ls'), ['ls'], 'single command');
assertDeepEqual(splitCommand('ls -l'), ['ls', '-l'], 'command with flag');
assertDeepEqual(splitCommand('cd ..'), ['cd', '..'], 'cd with ..');
assertDeepEqual(splitCommand('cat simple.md'), ['cat', 'simple.md'], 'simple filename');
assertDeepEqual(splitCommand('grep -i spring security'), ['grep', '-i', 'spring', 'security'], 'grep multi words');
assertDeepEqual(splitCommand(''), [], 'empty');
assertDeepEqual(splitCommand('   '), [], 'whitespace only');

assertDeepEqual(
  splitCommand('cat "~/posts/개발/Java NIO: test.md"'),
  ['cat', '~/posts/개발/Java NIO: test.md'],
  'double-quoted path'
);
assertDeepEqual(
  splitCommand("cat '~/posts/개발/Java NIO: test.md'"),
  ['cat', '~/posts/개발/Java NIO: test.md'],
  'single-quoted path'
);
assertDeepEqual(
  splitCommand('cat ~/posts/개발/Java\\ NIO:\\ test.md'),
  ['cat', '~/posts/개발/Java NIO: test.md'],
  'backslash-escaped spaces'
);
assertDeepEqual(
  splitCommand('cat Java NIO: test.md'),
  ['cat', 'Java', 'NIO:', 'test.md'],
  'unquoted splits at spaces'
);

// ── 2. _parseArgs ──
group('_parseArgs');

assertDeepEqual(
  parseArgs(['-l', '사이드', '프로젝트'], { boolFlags: ['-l'] }),
  { flags: { '-l': true }, path: '사이드 프로젝트', error: null },
  'ls: -l flag + spaced path joined'
);

assertDeepEqual(
  parseArgs(['-i', 'spring', 'security'], { boolFlags: ['-i'] }),
  { flags: { '-i': true }, path: 'spring security', error: null },
  'grep: -i flag + keyword joined'
);

assertDeepEqual(
  parseArgs(['스프링', '시큐리티:', 'JWT.md', '--format', 'html'], { valueFlags: ['--format'] }),
  { flags: { '--format': 'html' }, path: '스프링 시큐리티: JWT.md', error: null },
  'wget: --format value + spaced path joined'
);

assertDeepEqual(
  parseArgs(['--format', 'md', '사이드', '프로젝트.md'], { valueFlags: ['--format'] }),
  { flags: { '--format': 'md' }, path: '사이드 프로젝트.md', error: null },
  'wget: --format before path'
);

assertDeepEqual(
  parseArgs(['.', '-name', '*JWT*'], { valueFlags: ['-name'] }),
  { flags: { '-name': '*JWT*' }, path: '.', error: null },
  'find: -name value + search path'
);

assertDeepEqual(
  parseArgs(['-x', 'foo'], { boolFlags: ['-l'] }),
  { flags: {}, path: '', error: '-x' },
  'unknown flag returns error'
);

assertDeepEqual(
  parseArgs(['simple.md']),
  { flags: {}, path: 'simple.md', error: null },
  'no flags: path only'
);

assertDeepEqual(
  parseArgs([]),
  { flags: {}, path: '', error: null },
  'empty args: empty path'
);

// ── 3. resolve ──
group('resolve');

const engine = new MockEngine(mockFs, mockPostMap);

assertEqual(engine.resolve('~'), HOME, '~ → HOME');
assertEqual(engine.resolve(''), HOME, 'empty → HOME');
assertEqual(engine.resolve('~/posts'), HOME + '/posts', '~/posts');
assertEqual(engine.resolve('.'), HOME, '. → cwd');
assertEqual(engine.resolve('..'), '/home', '.. → parent');
assertEqual(engine.resolve('posts'), HOME + '/posts', 'relative dir');
assertEqual(engine.resolve('./posts'), HOME + '/posts', './dir');

engine.cwd = HOME + '/posts/개발/언어';
assertEqual(engine.resolve('자바'), HOME + '/posts/개발/언어/자바', 'nested relative');
assertEqual(engine.resolve('..'), HOME + '/posts/개발', '..');
assertEqual(engine.resolve('../..'), HOME + '/posts', '../..');
assertEqual(engine.resolve('../../백엔드'), HOME + '/posts/백엔드', 'relative with ..');
assertEqual(engine.resolve('/home/simjunghun/posts'), HOME + '/posts', 'absolute');
assertEqual(engine.resolve('~/posts/./개발'), HOME + '/posts/개발', '. in middle');
assertEqual(engine.resolve('~/posts/개발/../개발'), HOME + '/posts/개발', '.. in middle');
assertEqual(engine.resolve('~/posts/'), HOME + '/posts', 'trailing slash');
engine.cwd = HOME;

// ── 4. getNode / isDir / isFile ──
group('getNode / isDir / isFile');

assert(typeof engine.getNode(HOME) === 'object', 'HOME is object');
assert(typeof engine.getNode(HOME + '/posts') === 'object', 'posts is object');
assertEqual(engine.getNode(HOME + '/nonexistent'), undefined, 'nonexistent → undefined');
assertEqual(engine.getNode('/other'), null, 'outside HOME → null');

assertEqual(engine.getNode(HOME + '/posts/개발/언어/파이썬/Python 기초 문법.md'), null, 'file → null');
assertEqual(engine.getNode(HOME + '/posts/개발/언어/자바/NIO/Java NIO: 단방향 스트림 대신 양방향 채널로.md'), null, 'file with spaces → null');
assertEqual(engine.getNode(HOME + '/posts/개발/언어/자바/NIO/Java'), undefined, 'partial path → undefined');

assert(engine.isDir(HOME), 'HOME isDir');
assert(engine.isDir(HOME + '/posts/개발'), '개발 isDir');
assert(!engine.isDir(HOME + '/posts/개발/언어/파이썬/Python 기초 문법.md'), 'file !isDir');
assert(engine.isFile(HOME + '/posts/개발/언어/파이썬/Python 기초 문법.md'), 'file isFile');
assert(!engine.isFile(HOME + '/posts/개발'), 'dir !isFile');
assert(!engine.isFile(HOME + '/nonexistent'), 'nonexistent !isFile');

// ── 5. displayPath ──
group('displayPath');

assertEqual(engine.displayPath(HOME), '~', 'HOME → ~');
assertEqual(engine.displayPath(HOME + '/posts'), '~/posts', 'under HOME → ~/');
assertEqual(engine.displayPath('/other'), '/other', 'outside HOME stays absolute');

// ── 6. resolveFileArg ──
group('resolveFileArg');

assertEqual(
  engine.resolveFileArg('~/posts/개발/언어/파이썬/Python 기초 문법.md'),
  HOME + '/posts/개발/언어/파이썬/Python 기초 문법.md',
  'exact tilde path'
);

engine.cwd = HOME + '/posts/개발/언어/자바/NIO';
assertEqual(engine.resolveFileArg('Java NIO 개요.md'), HOME + '/posts/개발/언어/자바/NIO/Java NIO 개요.md', 'exact name in cwd');
assertEqual(engine.resolveFileArg('Java NIO'), HOME + '/posts/개발/언어/자바/NIO/Java NIO: 단방향 스트림 대신 양방향 채널로.md', 'startsWith match');
assertEqual(engine.resolveFileArg('Buffer'), HOME + '/posts/개발/언어/자바/NIO/Java NIO: Buffer와 Channel 기초.md', 'includes match');
assertEqual(engine.resolveFileArg('nonexistent'), null, 'no match → null');

// Joined args for paths with spaces
const joined1 = ['Java', 'NIO:', '단방향', '스트림', '대신', '양방향', '채널로.md'].join(' ');
assertEqual(engine.resolveFileArg(joined1), HOME + '/posts/개발/언어/자바/NIO/Java NIO: 단방향 스트림 대신 양방향 채널로.md', 'joined args resolve');
engine.cwd = HOME;

// ── 7. collectFiles / countFiles ──
group('collectFiles / countFiles');

const nioNode = engine.getNode(HOME + '/posts/개발/언어/자바/NIO');
assertEqual(engine.collectFiles(nioNode, HOME + '/posts/개발/언어/자바/NIO').length, 3, 'NIO: 3 files');
assertEqual(engine.countFiles(nioNode), 3, 'countFiles NIO = 3');
assertEqual(engine.countFiles(engine.getNode(HOME + '/posts')), 10, 'total = 10');

// ── 8. args.join for all path commands ──
group('args.join: consistent path handling');

// Simulate exec → splitCommand → args → command handler
function simExec(cmd) {
  const parts = splitCommand(cmd);
  const args = parts.slice(1);
  return args.join(' ');
}

// cat / open / wget — file path
assertEqual(simExec('cat Java NIO: 단방향.md'), 'Java NIO: 단방향.md', 'cat: args.join');
assertEqual(simExec('open 스프링 시큐리티: CORS는.md'), '스프링 시큐리티: CORS는.md', 'open: args.join');

// cd / ls / tree — dir path (PREVIOUSLY BROKEN)
assertEqual(simExec('cd 사이드 프로젝트'), '사이드 프로젝트', 'cd: args.join for spaced dir');
assertEqual(simExec('ls 사이드 프로젝트'), '사이드 프로젝트', 'ls: args.join for spaced dir');
assertEqual(simExec('tree 사이드 프로젝트'), '사이드 프로젝트', 'tree: args.join for spaced dir');

// With _parseArgs for ls
const lsArgs = splitCommand('ls -l 사이드 프로젝트').slice(1);
const lsParsed = parseArgs(lsArgs, { boolFlags: ['-l'] });
assertEqual(lsParsed.flags['-l'], true, 'ls _parseArgs: -l detected');
assertEqual(lsParsed.path, '사이드 프로젝트', 'ls _parseArgs: path joined');

// With _parseArgs for wget
const wgetArgs = splitCommand('wget 스프링 시큐리티: JWT.md --format html').slice(1);
const wgetParsed = parseArgs(wgetArgs, { valueFlags: ['--format'] });
assertEqual(wgetParsed.flags['--format'], 'html', 'wget _parseArgs: format extracted');
assertEqual(wgetParsed.path, '스프링 시큐리티: JWT.md', 'wget _parseArgs: path joined');

// With _parseArgs for grep
const grepArgs = splitCommand('grep -i spring security').slice(1);
const grepParsed = parseArgs(grepArgs, { boolFlags: ['-i'] });
assertEqual(grepParsed.flags['-i'], true, 'grep _parseArgs: -i detected');
assertEqual(grepParsed.path, 'spring security', 'grep _parseArgs: keyword joined');

// ── 9. open path → route conversion ──
group('open: path → route');

function handleOpenPost(terminalPath) {
  const prefix = '/home/simjunghun/posts/';
  if (terminalPath.startsWith(prefix)) {
    return '/posts/' + terminalPath.slice(prefix.length).replace(/\.md$/, '');
  }
  return null;
}

assertEqual(handleOpenPost(HOME + '/posts/개발/언어/자바/NIO/Java NIO: test.md'), '/posts/개발/언어/자바/NIO/Java NIO: test', 'with spaces');
assertEqual(handleOpenPost(HOME + '/posts/개발/백엔드/스프링/simple.md'), '/posts/개발/백엔드/스프링/simple', 'simple');
assertEqual(handleOpenPost(HOME + '/posts/사이드 프로젝트/메신저/메신저: API.md'), '/posts/사이드 프로젝트/메신저/메신저: API', 'spaced dir');
assertEqual(handleOpenPost('/other'), null, 'non-post → null');

// ── 10. cd navigation ──
group('cd: navigation');

const cdEngine = new MockEngine(mockFs, mockPostMap);

// With args.join, cd now works with spaced paths
cdEngine.cwd = cdEngine.resolve('posts');
assertEqual(cdEngine.cwd, HOME + '/posts', 'cd posts');

// Simulate: cd 사이드 프로젝트 → args = ['사이드', '프로젝트'] → join → '사이드 프로젝트'
const cdPath = ['사이드', '프로젝트'].join(' ');
cdEngine.cwd = cdEngine.resolve(cdPath);
assertEqual(cdEngine.cwd, HOME + '/posts/사이드 프로젝트', 'cd 사이드 프로젝트 (joined args)');
assert(cdEngine.isDir(cdEngine.cwd), 'result is valid dir');

cdEngine.cwd = cdEngine.resolve('메신저');
assertEqual(cdEngine.cwd, HOME + '/posts/사이드 프로젝트/메신저', 'cd 메신저');

cdEngine.cwd = cdEngine.resolve('~');
assertEqual(cdEngine.cwd, HOME, 'cd ~');

assert(!cdEngine.isDir(HOME + '/posts/개발/언어/파이썬/Python 기초 문법.md'), 'file → cd should reject');

// ── 11. history navigation ──
group('history');

const hEngine = new MockEngine(mockFs, mockPostMap);
hEngine.history = ['ls', 'cd posts', 'pwd', 'ls -l'];
hEngine.historyIdx = hEngine.history.length;

assertEqual(hEngine.historyUp(), 'ls -l', 'up → last');
assertEqual(hEngine.historyUp(), 'pwd', 'up → 2nd last');
assertEqual(hEngine.historyUp(), 'cd posts', 'up → 3rd');
assertEqual(hEngine.historyUp(), 'ls', 'up → first');
assertEqual(hEngine.historyUp(), null, 'up at start → null');

assertEqual(hEngine.historyDown(), 'cd posts', 'down → 2nd');
assertEqual(hEngine.historyDown(), 'pwd', 'down → 3rd');
assertEqual(hEngine.historyDown(), 'ls -l', 'down → last');
assertEqual(hEngine.historyDown(), '', 'down past end → empty');

// ── 12. tab completion: getCompletions ──
group('tab: command completion');

const ALL_CMDS = ['ls', 'cd', 'pwd', 'tree', 'cat', 'open', 'grep', 'find', 'wc', 'wget', 'history', 'clear', 'exit', 'help', 'whoami'];

assertDeepEqual(ALL_CMDS.filter(c => c.startsWith('c')), ['cd', 'cat', 'clear'], 'c → cd, cat, clear');
assertDeepEqual(ALL_CMDS.filter(c => c.startsWith('gr')), ['grep'], 'gr → grep');
assertDeepEqual(ALL_CMDS.filter(c => c.startsWith('w')), ['wc', 'wget', 'whoami'], 'w → wc, wget, whoami');
assertEqual(ALL_CMDS.filter(c => c.startsWith('z')).length, 0, 'z → none');

group('tab: path completion');

function getPathCompletions(dirNode, fragment, dirOnly, fileOnly) {
  if (!dirNode || typeof dirNode !== 'object') return [];
  return Object.entries(dirNode)
    .filter(([name, child]) => {
      if (!name.toLowerCase().startsWith(fragment.toLowerCase())) return false;
      if (dirOnly && child === null) return false;
      if (fileOnly && child !== null) return false;
      return true;
    })
    .map(([name, child]) => ({ name, isDir: child !== null }));
}

const postsNode = engine.getNode(HOME + '/posts');
assertEqual(getPathCompletions(postsNode, '', false, false).length, 2, 'posts/ → 2 entries');
assertEqual(getPathCompletions(postsNode, '', true, false).length, 2, 'cd: only dirs');

const nioNodeTab = engine.getNode(HOME + '/posts/개발/언어/자바/NIO');
assertEqual(getPathCompletions(nioNodeTab, '', false, true).length, 3, 'cat in NIO/ → 3 files');
assertEqual(getPathCompletions(nioNodeTab, 'Java NIO:', false, true).length, 2, 'Java NIO: → 2 files');

// ── 13. Escaped space in tab completion ──
group('tab: escaped space handling');

function extractPartial(raw) {
  const endsWithUnescapedSpace = raw.endsWith(' ') && !raw.endsWith('\\ ');
  if (endsWithUnescapedSpace) return '';
  let lastIdx = -1;
  for (let i = raw.length - 1; i >= 0; i--) {
    if (raw[i] === ' ' && (i === 0 || raw[i - 1] !== '\\')) { lastIdx = i; break; }
  }
  return raw.slice(lastIdx + 1);
}

assertEqual(extractPartial('wget '), '', 'normal trailing space → empty');
assertEqual(extractPartial('wget 메신저:\\ '), '메신저:\\ ', 'escaped trailing space → includes escaped part');
assertEqual(extractPartial('cat ~/posts/사이드\\ 프로젝트/메'), '~/posts/사이드\\ 프로젝트/메', 'escaped in middle');
assertEqual(extractPartial('cat simple.md'), 'simple.md', 'no escapes');
assertEqual(extractPartial('cd 사이드\\ 프로젝트/메신저/'), '사이드\\ 프로젝트/메신저/', 'escaped with trailing /');

group('tab: no-loop on escaped common prefix');

const partialFirst = extractPartial('wget ');
assertEqual(partialFirst, '', '1st tab: empty partial');

const partialSecond = extractPartial('wget 메신저:\\ ');
assertEqual(partialSecond, '메신저:\\ ', '2nd tab: escaped partial');

const display1 = escPath('메신저: API 공통 응답 구조 설계하기.md');
const display2 = escPath('메신저: Redis로 이메일 인증 Rate Limiting 구현하기.md');
let common = display1;
while (common && !display2.toLowerCase().startsWith(common.toLowerCase())) common = common.slice(0, -1);
assertEqual(common, '메신저:\\ ', 'common prefix of displays');
assertEqual(common.length, partialSecond.length, 'common === partial → no infinite extension');

const before = 'wget 메신저:\\ '.slice(0, 'wget 메신저:\\ '.length - partialSecond.length);
assertEqual(before, 'wget ', 'slicing with raw prefix → correct base');

// ── 13b. Bash-style applyTab ──
group('applyTab: bash-style behavior');

// Build a minimal applyTab for testing (mirrors TerminalEngine logic)
const DIR_ONLY_CMDS = ['cd'];
const FILE_ONLY_CMDS = ['cat', 'open', 'wget'];
const FLAG_MAP = {
  grep: ['-i'], ls: ['-l'], find: ['-name'], wc: ['-l'], wget: ['--format'],
};

class TabTestEngine extends MockEngine {
  getCompletions(text) {
    const raw = text.trimStart();
    const parts = splitCommand(raw);

    if (parts.length === 0) {
      return { prefix: '', items: ALL_CMDS.map(m => ({ name: m, isDir: false })), type: 'cmd' };
    }
    if (parts.length === 1 && !raw.endsWith(' ')) {
      const partial = parts[0];
      const matches = ALL_CMDS.filter(c => c.startsWith(partial));
      return { prefix: partial, items: matches.map(m => ({ name: m, isDir: false })), type: 'cmd' };
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
      const flags = FLAG_MAP[cmd].filter(f => f.startsWith(partial));
      return { prefix: partial, items: flags.map(f => ({ name: f, display: f, isDir: false })), type: 'flag' };
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

    const parentPath = parentInput ? this.resolve(parentInput) : this.cwd;
    const parentNode = this.getNode(parentPath);
    if (!parentNode || typeof parentNode !== 'object') return { prefix: partial, items: [], type: 'path' };

    const pathPrefix = parentInput ? parentInput + '/' : '';
    const dirOnly = DIR_ONLY_CMDS.includes(cmd);
    const fileOnly = FILE_ONLY_CMDS.includes(cmd);

    const matches = Object.entries(parentNode)
      .filter(([name, child]) => {
        if (!name.toLowerCase().startsWith(fragment.toLowerCase())) return false;
        if (dirOnly && child === null) return false;
        if (fileOnly && child !== null) return false;
        return true;
      })
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, child]) => ({
        name,
        display: escPath(pathPrefix + name),
        isDir: child !== null,
      }));

    return { prefix: partial, items: matches, type: 'path' };
  }

  applyTab(inputValue) {
    this.tabCount++;
    const comp = this.getCompletions(inputValue);
    if (comp.items.length === 0) return inputValue;

    const bef = inputValue.slice(0, inputValue.length - comp.prefix.length);

    // Unique match
    if (comp.items.length === 1) {
      const item = comp.items[0];
      let suffix;
      if (comp.type === 'cmd' || comp.type === 'flag') {
        suffix = item.name + ' ';
      } else {
        suffix = item.display + (item.isDir ? '/' : ' ');
      }
      this.tabCount = 0;
      return bef + suffix;
    }

    // Multiple
    const names = comp.items.map(i =>
      comp.type === 'cmd' || comp.type === 'flag' ? i.name : i.display
    );
    let cm = names[0];
    for (const n of names) {
      while (cm && !n.startsWith(cm)) cm = cm.slice(0, -1);
    }

    if (this.tabCount === 1) {
      if (cm.length > comp.prefix.length) return bef + cm;
      return inputValue;
    }

    // 2nd tab: show candidates
    this.outputLines.push(`[candidates: ${names.join(', ')}]`);
    this.tabCount = 0;
    return inputValue;
  }
}

// Test: unique command → complete with space
const tab = new TabTestEngine(mockFs, mockPostMap);
assertEqual(tab.applyTab('gr'), 'grep ', 'unique cmd: gr → grep ');
assertEqual(tab.tabCount, 0, 'tabCount reset after unique');

// Test: unique dir → complete with /
tab.cwd = HOME + '/posts';
tab.tabCount = 0;
assertEqual(tab.applyTab('cd 개'), 'cd 개발/', 'unique dir: 개 → 개발/');

// Test: unique file → complete with space
tab.cwd = HOME + '/posts/개발/언어/파이썬';
tab.tabCount = 0;
assertEqual(tab.applyTab('cat '), 'cat Python\\ 기초\\ 문법.md ', 'unique file: complete with space');

// Test: multiple commands, 1st tab → common prefix
tab.tabCount = 0;
const result1 = tab.applyTab('c');
assertEqual(result1, 'c', '1st tab: c → no common extension (cd/cat/clear)');

// Test: multiple commands, 2nd tab → show candidates
const result2 = tab.applyTab('c');
assertEqual(result2, 'c', '2nd tab: returns unchanged');
assert(tab.outputLines.length > 0, '2nd tab: candidates printed');
assertEqual(tab.tabCount, 0, '2nd tab: tabCount reset');

// Test: multiple paths, 1st tab → common prefix extension
tab.cwd = HOME + '/posts/개발/언어/자바/NIO';
tab.tabCount = 0;
tab.outputLines = [];
const nioResult1 = tab.applyTab('cat Java\\ NIO:\\ ');
// Two files start with "Java NIO: " → common prefix extends
assertEqual(nioResult1, 'cat Java\\ NIO:\\ ', '1st tab NIO: no extension beyond common');

// Test: 2nd tab shows candidates
const nioResult2 = tab.applyTab('cat Java\\ NIO:\\ ');
assertEqual(nioResult2, 'cat Java\\ NIO:\\ ', '2nd tab NIO: returns unchanged');
assert(tab.outputLines.length > 0, '2nd tab NIO: candidates printed');

// Test: no match → unchanged
tab.tabCount = 0;
assertEqual(tab.applyTab('cat zzz'), 'cat zzz', 'no match: unchanged');
assertEqual(tab.tabCount, 1, 'tabCount stays at 1 (no reset)');

// Test: empty input → all commands on 2nd tab
tab.tabCount = 0;
tab.outputLines = [];
const emptyTab1 = tab.applyTab('');
assertEqual(emptyTab1, '', '1st tab empty: no extension (all cmds)');
const emptyTab2 = tab.applyTab('');
assertEqual(emptyTab2, '', '2nd tab empty: returns unchanged');
assert(tab.outputLines.length > 0, '2nd tab empty: candidates printed');

// Test: flag completion
tab.tabCount = 0;
assertEqual(tab.applyTab('ls -'), 'ls -l ', 'unique flag: -l ');

// Test: cd only shows dirs, not files
tab.cwd = HOME + '/posts/개발/언어';
tab.tabCount = 0;
const cdTab = tab.applyTab('cd ');
// Only 자바 and 파이썬 are dirs
assert(cdTab.includes('자바') || cdTab.includes('파이썬') || cdTab === 'cd ', 'cd: only dirs shown');

// Test: cat only shows files, not dirs
tab.cwd = HOME + '/posts/개발/언어';
tab.tabCount = 0;
const catTab = tab.applyTab('cat ');
assertEqual(catTab, 'cat ', 'cat in dir with only subdirs: no files, unchanged');

// ── 14. Edge cases ──
group('edge cases');

// Deeply nested paths with Korean spaces
assertEqual(
  engine.resolve('~/posts/개발/백엔드/스프링/스프링 시큐리티'),
  HOME + '/posts/개발/백엔드/스프링/스프링 시큐리티',
  'deep nested Korean path'
);
assert(engine.isDir(HOME + '/posts/개발/백엔드/스프링/스프링 시큐리티'), 'nested spaced dir valid');

// .. traversal
engine.cwd = HOME + '/posts/개발/백엔드/스프링/스프링 시큐리티';
assertEqual(engine.resolve('../../..'), HOME + '/posts/개발', 'triple ..');
assertEqual(engine.resolve('../../../../..'), HOME, '5x .. → HOME');
assertEqual(engine.resolve('../../../../../../..'), '/', '7x .. → root');
engine.cwd = HOME;

// getPost
const postPath = HOME + '/posts/개발/언어/자바/NIO/Java NIO: 단방향 스트림 대신 양방향 채널로.md';
assert(engine.getPost(postPath) !== null, 'getPost finds post');
assertEqual(engine.getPost(postPath).title, 'Java NIO: 단방향 스트림 대신 양방향 채널로', 'correct title');
assertEqual(engine.getPost(HOME + '/nonexistent.md'), null, 'missing → null');

// ── 15. grep / find / numbered results ──
group('grep / find / numbered results');

const grepEngine = new MockEngine(mockFs, mockPostMap);
grepEngine.cwd = HOME + '/posts/개발/백엔드/스프링/스프링 시큐리티';

const secFiles = grepEngine.collectFiles(grepEngine.getNode(grepEngine.cwd), grepEngine.cwd);
assertEqual(secFiles.length, 3, '스프링 시큐리티: 3 files');

const jwtResults = secFiles.filter(f => f.split('/').pop().includes('JWT'));
assertEqual(jwtResults.length, 1, 'grep JWT → 1');
assertIncludes(jwtResults[0], 'JWT 인증 구현하기', 'correct file');

grepEngine.lastResults = secFiles;
assertEqual(grepEngine.lastResults[0], secFiles[0], 'open 1 → first result');
assertEqual(grepEngine.lastResults[2], secFiles[2], 'cat 3 → third result');
assert(grepEngine.lastResults[5] === undefined, 'out of bounds');

assert(/^\d+$/.test('1'), '"1" numeric');
assert(/^\d+$/.test('10'), '"10" numeric');
assert(!/^\d+$/.test('abc'), '"abc" not numeric');
assert(!/^\d+$/.test(''), 'empty not numeric');

// ── 16. glob matching ──
group('find: glob');

function globMatch(pattern, fileName) {
  const regexStr = pattern.replace(/\./g, '\\.').replace(/\*/g, '.*').replace(/\?/g, '.');
  return new RegExp(regexStr, 'i').test(fileName);
}

assert(globMatch('*.md', 'test.md'), '*.md matches');
assert(globMatch('*.md', 'Java NIO: test.md'), '*.md with spaces');
assert(!globMatch('*.txt', 'test.md'), '*.txt no match');
assert(globMatch('*JWT*', '스프링 시큐리티: JWT 인증.md'), '*JWT*');
assert(globMatch('spring*', 'Spring Boot Auto.md'), 'case insensitive');

// ── 17. End-to-end: all commands with spaced Korean paths ──
group('e2e: spaced paths across all commands');

const e2e = new MockEngine(mockFs, mockPostMap);

// cat with unquoted spaced path
e2e.cwd = HOME + '/posts/개발/언어/자바/NIO';
const catParts = splitCommand('cat Java NIO: 단방향 스트림 대신 양방향 채널로.md').slice(1);
assertEqual(catParts.join(' '), 'Java NIO: 단방향 스트림 대신 양방향 채널로.md', 'cat args joined');
assert(e2e.resolveFileArg(catParts.join(' ')) !== null, 'cat resolves file');

// open with unquoted spaced path
e2e.cwd = HOME + '/posts/개발/백엔드/스프링/스프링 시큐리티';
const openParts = splitCommand('open 스프링 시큐리티: CORS는 왜 필요하고, 어떻게 동작할까.md').slice(1);
assertEqual(openParts.join(' '), '스프링 시큐리티: CORS는 왜 필요하고, 어떻게 동작할까.md', 'open args joined');
assert(e2e.resolveFileArg(openParts.join(' ')) !== null, 'open resolves file');

// wget with spaced path + --format
const wgetParts2 = splitCommand('wget 스프링 시큐리티: JWT 인증 구현하기.md --format html').slice(1);
const wgetP = parseArgs(wgetParts2, { valueFlags: ['--format'] });
assertEqual(wgetP.path, '스프링 시큐리티: JWT 인증 구현하기.md', 'wget path joined');
assertEqual(wgetP.flags['--format'], 'html', 'wget format');
assert(e2e.resolveFileArg(wgetP.path) !== null, 'wget resolves file');

// cd with spaced dir (PREVIOUSLY BROKEN)
e2e.cwd = HOME + '/posts';
const cdParts = splitCommand('cd 사이드 프로젝트').slice(1);
const cdTarget = e2e.resolve(cdParts.join(' '));
assert(e2e.isDir(cdTarget), 'cd spaced dir resolves');
assertEqual(cdTarget, HOME + '/posts/사이드 프로젝트', 'cd spaced dir correct');

// ls with spaced dir (PREVIOUSLY BROKEN)
const lsParts = splitCommand('ls -l 사이드 프로젝트').slice(1);
const lsP = parseArgs(lsParts, { boolFlags: ['-l'] });
const lsTarget = lsP.path ? e2e.resolve(lsP.path) : e2e.cwd;
assert(e2e.isDir(lsTarget), 'ls spaced dir resolves');
assertEqual(lsTarget, HOME + '/posts/사이드 프로젝트', 'ls spaced dir correct');
assertEqual(lsP.flags['-l'], true, 'ls -l flag');

// tree with spaced dir (PREVIOUSLY BROKEN)
const treeParts = splitCommand('tree 사이드 프로젝트').slice(1);
const treeTarget = e2e.resolve(treeParts.join(' '));
assert(e2e.isDir(treeTarget), 'tree spaced dir resolves');

// ── 18. Error handling ──
group('error handling');

assert(!engine.isDir(HOME + '/posts/개발/언어/파이썬/Python 기초 문법.md'), 'cd to file → reject');
assert(engine.isDir(HOME + '/posts/개발'), 'cat on dir → reject');

const emptyParts = splitCommand('cat');
assertEqual(emptyParts.slice(1).length, 0, 'cat no args');

assert(splitCommand('ls --help').slice(1).includes('--help'), '--help detected');
assert(!ALL_CMDS.includes('rm'), 'rm not valid');

// _parseArgs error on unknown flag
const errResult = parseArgs(['-z', 'foo'], { boolFlags: ['-l'] });
assertEqual(errResult.error, '-z', 'unknown flag detected');

// ── Summary ──
console.log(`\n${'━'.repeat(50)}`);
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log(`${'━'.repeat(50)}`);
if (failed > 0) process.exit(1);

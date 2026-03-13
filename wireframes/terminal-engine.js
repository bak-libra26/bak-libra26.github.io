/**
 * Terminal Engine for sim.junghun blog wireframes
 * Bash-like terminal emulator with real post filesystem
 *
 * Usage:
 *   const term = createTerminal({ outputEl, inputEl, cwdEl });
 *   // Keyboard events are auto-bound to inputEl
 */

function createTerminal({ outputEl, inputEl, cwdEl, onClose, onOpenPost }) {

// ===== FILESYSTEM (real blog structure) =====
// null = file, object = directory
const fs = {
  'posts': {
    '개발': {
      '데이터베이스': {
        '몽고DB': {
          'Authentication Failed 에러.md': null
        }
      },
      '메세지큐': {
        '레빗엠큐': {
          '고급 큐 기능(DLX, 딜레이 큐, 우선 순위 큐).md': null,
          '메시지 신뢰성 보장을 위한 확인 메커니즘(ACK, NACK).md': null,
          '메시지 지속성과 생명주기 관리(Durable, Persistent, TTL, Auto-delete).md': null,
          '메시징 큐의 개념과 기본 구조.md': null,
          '발행 확인 메커니즘(트랜잭션, 게시자확인).md': null,
          '여러가지 Exchange 타입과 라우팅 방식.md': null
        }
      },
      '백엔드': {
        '네티': {
          'Netty: java.net과 java.nio의 한계를 보완한 비동기 이벤트 기반 네트워크 프레임워크.md': null
        },
        '스프링': {
          '리액티브': {
            'Hot vs Cold Publisher: 같은 Flux가 구독자마다 다르게 보이는 이유.md': null,
            'Sinks: 리액터 스트림에 직접 값을 밀어 넣는 방법.md': null,
            '리액터 스레드와 스케줄러: 언제 publishOn, subscribeOn을 쓸까.md': null,
            '리액터, 백프레셔와 여러가지 전략.md': null,
            '리액티브 스트림즈 구현체, 리액터 한 번 써보기.md': null,
            '리액티브 스트림즈와 프로젝트 리액터.md': null,
            '리액티브 프로그래밍 시작하기.md': null
          },
          '스프링 JPA': {
            'JPA: 무엇이고, 왜 쓰는가.md': null
          },
          '스프링 시큐리티': {
            '스프링 시큐리티: CORS는 왜 필요하고, 어떻게 동작할까.md': null,
            '스프링 시큐리티: CSRF 보호는 왜 필요하고, 어떻게 동작할까.md': null,
            '스프링 시큐리티: JWT 만료·재발급·로그아웃 전략.md': null,
            '스프링 시큐리티: JWT(JSON Web Token) 인증 구현하기.md': null,
            '스프링 시큐리티: JWT(JSON Web Token)는 무엇이고, 왜 쓰는가.md': null,
            '스프링 시큐리티: OAuth2 로그인과 리소스 서버 개념 정리.md': null,
            '스프링 시큐리티: SecurityFilterChain은 어떻게 동작할까.md': null,
            '스프링 시큐리티: remember-me, 자동 로그인은 어떻게 동작할까.md': null,
            '스프링 시큐리티: 스프링 애플리케이션 보안 솔루션.md': null,
            '스프링 시큐리티: 역할(Role)과 권한(Authority).md': null,
            '스프링 시큐리티: 인증 흐름과 동작 구조.md': null,
            '스프링 시큐리티: 인증·인가와 세션 vs 토큰.md': null
          },
          '스프링 클라우드': {
            'Spring Cloud: MSA 아키텍처 구현을 위한 솔루션.md': null,
            'Spring Cloud: 모놀리틱 아키텍처와 MSA 아키텍처.md': null
          },
          '스프링부트': {
            'Spring Boot 란.md': null,
            '빈(Bean) 이란.md': null,
            '제어의 역전(IoC) 과 의존성 주입(DI).md': null
          }
        }
      },
      '언어': {
        '자바': {
          'Java: 문자열 인코딩.md': null,
          'NIO': {
            'Java NIO: java.io의 한계를 넘은 새로운 모델.md': null,
            'Java NIO: 단방향 스트림 대신 양방향 채널로.md': null,
            'Java NIO: 바이트 버퍼로 버퍼 상태 관리하기.md': null,
            'Java NIO: 이벤트 루프의 핵심 요소 셀렉터.md': null
          }
        },
        '자바스크립트': {
          'Ubuntu 환경에서 NodeJS 설치하기.md': null,
          '자바스크립트 파일 확장자 차이.md': null
        }
      },
      '크로스플랫폼': {
        '다트': {
          '플러터': {
            '어플리케이션 이름 변경 방법.md': null,
            '플러터 MacOS CodeSign 에러.md': null
          }
        }
      },
      '프론트엔드': {
        '프론트엔드: 로드맵따라 시작해보기.md': null,
        'CSS': {
          'CSS: 인라인·내부·외부 스타일.md': null,
          'CSS: 작성 규칙과 기본 셀렉터.md': null,
          'CSS: 조합 셀렉터.md': null,
          'CSS: 캐스케이드 레이어.md': null,
          'CSS: 캐스케이딩 규칙과 우선순위.md': null
        },
        'HTML': {
          'HTML: 구조와 필수 태그.md': null,
          'HTML: 그룹핑 텍스트.md': null,
          'HTML: 메타 태그.md': null,
          'HTML: 시맨틱 마크업.md': null,
          'HTML: 여러가지 목록.md': null,
          'HTML: 인풋, 사용자에게 입력을 받자.md': null,
          'HTML: 임베디드 미디어.md': null,
          'HTML: 자바스크립트 추가하기.md': null,
          'HTML: 전역 속성.md': null,
          'HTML: 테이블 태그.md': null,
          'HTML: 텍스트 관련 태그.md': null,
          'HTML: 폼, 입력 필드를 묶어 서버로 전달하자.md': null
        },
        '리액트': {
          'StrictMode Definition.md': null
        }
      },
      '환경설정': {
        'Homebrew 설치하기.md': null,
        'NVM 설치하기.md': null,
        'OpenJDK 11 설치하기.md': null,
        'RabbitMQ 설치하기.md': null,
        'Ubuntu 환경에 몽고DB 설치.md': null,
        '깃허브 비공개 레포지토리 잔디 심기.md': null,
        '플러터 설치하기.md': null
      }
    },
    '데브옵스': {
      '그라파나': {
        'Grafana 설치.md': null
      },
      '넥서스': {
        'Nexus Repository 유형 및 Spring Boot 연동.md': null,
        'Nexus 설치하기.md': null,
        'Nginx 를 이용한 Nexus에 대한 리버스 프록시 구성.md': null
      },
      '젠킨스': {
        'Credentials 추가.md': null,
        'GitHub Webhook 자동 빌드 트리거링.md': null,
        'JDK 설치 및 설정.md': null,
        'Jenkins 버전 업그레이드.md': null,
        'Jenkins 설치.md': null,
        'Maven 설정하기.md': null,
        'Nexus 설정.md': null,
        'Pipeline JDK 설정.md': null,
        'Pipeline as YAML.md': null,
        'Publish Over SSH 서버 테스트 접속 실패.md': null,
        'Publish Over SSH 플러그인 Remote Directory 설정 가이드.md': null,
        'Slack 연동 및 알림 설정.md': null,
        '빌드 실패, 원인은 라이브러리 캐시.md': null
      },
      '프로메테우스': {
        'Node Exporter 설치.md': null,
        'Prometheus 설치.md': null,
        'Rabbit Exporter 설치.md': null,
        'SNMP 를 통한 스위치 모니터링.md': null
      }
    },
    '사이드 프로젝트': {
      '메신저': {
        '메신저: API Gateway 에서 x-usr 헤더 스푸핑 방어하기.md': null,
        '메신저: API 공통 응답 구조 설계하기.md': null,
        '메신저: JWT 로 만드는 메신저 인증 플로우.md': null,
        '메신저: Spring Boot AutoConfiguration 으로 공통 모듈 자동 등록하기.md': null,
        '메신저: Swagger 문서를 인터페이스로 분리하기.md': null
      },
      '블로그': {
        '블로그: GISCUS 를 통한 댓글 기능 구현하기.md': null,
        '블로그: 깃허브 페이지 배포하기.md': null,
        '블로그: 마크다운 파일로 블로그 포스팅 기능 구현하기.md': null,
        '블로그: 마크다운을 HTML로 변환하기.md': null,
        '블로그: 메타 태그 최적화하기.md': null,
        '블로그: 목차(TOC) 기능 추가하기.md': null
      },
      '저축했니': {
        '저축했니: 개인재무관리 어플리케이션.md': null
      }
    }
  }
};

const HOME = '/home/simjunghun';
let cwd = HOME;
let history = [];
let historyIdx = -1;
let tabCount = 0;
let lastTabInput = '';

// ===== HELPERS =====
function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// Escape spaces for display (like bash)
function escPath(s) { return s.replace(/ /g, '\\ '); }

// Resolve a path string to an absolute path
function resolve(input) {
  let path = input.replace(/\\ /g, ' '); // unescape spaces
  if (path === '~' || path === '') return HOME;
  if (path.startsWith('~/')) path = HOME + '/' + path.slice(2);
  else if (!path.startsWith('/')) path = cwd + '/' + path;

  // Normalize . and ..
  const parts = path.split('/').filter(Boolean);
  const result = [];
  for (const p of parts) {
    if (p === '..') { if (result.length > 0) result.pop(); }
    else if (p !== '.') result.push(p);
  }
  return '/' + result.join('/');
}

// Get the node at a path in the filesystem
function getNode(absPath) {
  if (absPath === HOME || absPath === HOME + '/') return fs;
  const rel = absPath.startsWith(HOME + '/') ? absPath.slice(HOME.length + 1) : null;
  if (rel === null) return null;
  const parts = rel.split('/').filter(Boolean);
  let node = fs;
  for (const p of parts) {
    if (node === null || typeof node !== 'object' || !(p in node)) return undefined; // not found
    node = node[p];
  }
  return node;
}

function isDir(absPath) {
  const node = getNode(absPath);
  return node !== null && node !== undefined && typeof node === 'object';
}

function isFile(absPath) {
  return getNode(absPath) === null;
}

function displayPath(absPath) {
  if (absPath === HOME) return '~';
  if (absPath.startsWith(HOME + '/')) return '~/' + absPath.slice(HOME.length + 1);
  return absPath;
}

function prompt() {
  return `<span class="t-user">simjunghun</span>:<span class="t-path">${esc(displayPath(cwd))}</span><span class="t-dollar">$</span>`;
}

// Collect all files recursively
function collectFiles(node, path) {
  const results = [];
  if (node === null) return results; // it's a file
  for (const [name, child] of Object.entries(node)) {
    const fullPath = path + '/' + name;
    if (child === null) results.push(fullPath);
    else results.push(...collectFiles(child, fullPath));
  }
  return results;
}

// ===== OUTPUT =====
function print(html) {
  const div = document.createElement('div');
  div.className = 'tl';
  div.innerHTML = html;
  outputEl.appendChild(div);
  outputEl.scrollTop = outputEl.scrollHeight;
}

function printCmd(cmd) {
  print(`${prompt()} ${esc(cmd)}`);
}

// ===== TAB COMPLETION (bash-like) =====
function getCompletions(text) {
  const raw = text.trimStart();
  const parts = splitCommand(raw);

  // No input yet or completing first word → command completion
  if (parts.length === 0) return { prefix: '', items: [], type: 'cmd' };
  if (parts.length === 1 && !raw.endsWith(' ')) {
    const partial = parts[0];
    const cmds = ['ls','cd','pwd','tree','cat','open','grep','find','wc','history','clear','exit','help','whoami'];
    const matches = cmds.filter(c => c.startsWith(partial));
    return { prefix: partial, items: matches.map(m => ({ name: m, isDir: false })), type: 'cmd' };
  }

  // Completing argument → path completion
  const partial = raw.endsWith(' ') ? '' : parts[parts.length - 1];
  const unescaped = partial.replace(/\\ /g, ' ');

  // Split into parent path and the part being typed
  const lastSlash = unescaped.lastIndexOf('/');
  let parentInput, fragment;
  if (lastSlash >= 0) {
    parentInput = unescaped.slice(0, lastSlash) || '/';
    fragment = unescaped.slice(lastSlash + 1);
  } else {
    parentInput = '';
    fragment = unescaped;
  }

  const parentPath = parentInput ? resolve(parentInput) : cwd;
  const parentNode = getNode(parentPath);
  if (!parentNode || typeof parentNode !== 'object') return { prefix: partial, items: [], type: 'path' };

  const pathPrefix = parentInput ? parentInput + '/' : '';
  const matches = Object.entries(parentNode)
    .filter(([name]) => name.toLowerCase().startsWith(fragment.toLowerCase()))
    .map(([name, child]) => ({
      name: name,
      display: escPath(pathPrefix + name) + (child !== null ? '/' : ''),
      isDir: child !== null
    }));

  return { prefix: partial, items: matches, type: 'path' };
}

function applyTab() {
  const text = inputEl.value;
  const comp = getCompletions(text);

  if (comp.items.length === 0) return;

  if (comp.items.length === 1) {
    // Single match → complete it
    const item = comp.items[0];
    const completion = comp.type === 'cmd' ? item.name + ' ' :
                       item.display + (item.isDir ? '' : ' ');
    const before = text.slice(0, text.length - comp.prefix.length);
    inputEl.value = before + completion;
    tabCount = 0;
    return;
  }

  // Multiple matches
  // First tab: complete common prefix
  // Second tab: show all options (like bash)
  const names = comp.items.map(i => comp.type === 'cmd' ? i.name : i.display);
  let common = names[0];
  for (const n of names) {
    while (common && !n.startsWith(common)) common = common.slice(0, -1);
  }

  if (text === lastTabInput) tabCount++;
  else tabCount = 1;
  lastTabInput = text;

  if (common.length > comp.prefix.length) {
    const before = text.slice(0, text.length - comp.prefix.length);
    inputEl.value = before + common;
    lastTabInput = inputEl.value;
    if (tabCount < 2) return;
  }

  // Show options (bash double-tab behavior)
  printCmd(text);
  const display = comp.items.map(i => {
    const n = comp.type === 'cmd' ? i.name : i.display;
    const cls = i.isDir ? 't-dir' : 't-file';
    return `<span class="${cls}">${esc(n)}</span>`;
  });
  print(display.join('  '));
}

// Split command respecting escaped spaces
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
  return parts.map(p => p.replace(/\\ /g, ' ')); // unescape spaces
}

// ===== COMMANDS =====
function execLs(args) {
  let long = false;
  let showAll = false;
  let target = cwd;
  for (const a of args) {
    if (a === '-l') long = true;
    else if (a === '-la' || a === '-al') { long = true; showAll = true; }
    else if (a === '-a') showAll = true;
    else target = resolve(a);
  }
  const node = getNode(target);
  if (node === undefined) { print(`<span class="t-err">ls: '${esc(args[0]||'.')}' 에 접근할 수 없습니다: 그런 파일이나 디렉터리가 없습니다</span>`); return; }
  if (node === null) { print(`<span class="t-file">${esc(displayPath(target))}</span>`); return; }

  const entries = Object.entries(node).sort(([a,av],[b,bv]) => {
    if ((av!==null) !== (bv!==null)) return av!==null ? -1 : 1;
    return a.localeCompare(b);
  });
  if (entries.length === 0) return;

  if (long) {
    print(`<span class="t-dim">합계 ${entries.length}</span>`);
    for (const [name, child] of entries) {
      if (child !== null) {
        print(`<span class="t-dim">drwxr-xr-x</span>  <span class="t-dir">${esc(name)}/</span>`);
      } else {
        print(`<span class="t-dim">-rw-r--r--</span>  <span class="t-file">${esc(name)}</span>`);
      }
    }
  } else {
    const cols = [];
    for (const [name, child] of entries) {
      if (child !== null) cols.push(`<span class="t-dir">${esc(name)}/</span>`);
      else cols.push(`<span class="t-file">${esc(name)}</span>`);
    }
    // Wrap at ~3 columns
    const perRow = entries.length > 6 ? 3 : entries.length > 3 ? 2 : entries.length;
    for (let i = 0; i < cols.length; i += perRow) {
      print(cols.slice(i, i + perRow).join('  '));
    }
  }
}

function execCd(args) {
  const target = resolve(args[0] || '~');
  if (!isDir(target)) {
    if (isFile(target)) print(`<span class="t-err">bash: cd: ${esc(args[0])}: 디렉터리가 아닙니다</span>`);
    else print(`<span class="t-err">bash: cd: ${esc(args[0])}: 그런 파일이나 디렉터리가 없습니다</span>`);
    return;
  }
  cwd = target;
  updateCwd();
}

function execPwd() {
  print(`<span class="t-out">${esc(cwd)}</span>`);
}

function execTree(args) {
  const target = resolve(args[0] || '.');
  const node = getNode(target);
  if (!node || node === null) { print(`<span class="t-err">${esc(args[0]||'.')}: 그런 파일이나 디렉터리가 없습니다</span>`); return; }

  let dirCount = 0, fileCount = 0;
  print(`<span class="t-dir">${esc(displayPath(target))}</span>`);

  function walk(n, prefix) {
    const entries = Object.entries(n).sort(([a,av],[b,bv]) => {
      if ((av!==null) !== (bv!==null)) return av!==null ? -1 : 1;
      return a.localeCompare(b);
    });
    entries.forEach(([name, child], i) => {
      const last = i === entries.length - 1;
      const connector = last ? '└── ' : '├── ';
      const ext = last ? '    ' : '│   ';
      if (child !== null) {
        dirCount++;
        print(`<span class="t-dim">${esc(prefix + connector)}</span><span class="t-dir">${esc(name)}/</span>`);
        walk(child, prefix + ext);
      } else {
        fileCount++;
        print(`<span class="t-dim">${esc(prefix + connector)}</span><span class="t-file">${esc(name)}</span>`);
      }
    });
  }
  walk(node, '');
  print('');
  print(`<span class="t-dim">${dirCount} directories, ${fileCount} files</span>`);
}

function execCat(args) {
  if (!args[0]) { print(`<span class="t-err">cat: 파일 피연산자가 없습니다</span>`); return; }
  const target = resolve(args[0]);
  const node = getNode(target);
  if (node === undefined) {
    // Try fuzzy match in current dir
    const cwdNode = getNode(cwd);
    if (cwdNode) {
      const match = Object.keys(cwdNode).find(k => k.startsWith(args[0]) || k.toLowerCase().includes(args[0].toLowerCase()));
      if (match && cwdNode[match] === null) {
        print('');
        print(`<span class="t-green">${esc(match.replace('.md', ''))}</span>`);
        print(`<span class="t-dim">${esc(displayPath(cwd + '/' + match))}</span>`);
        print('');
        if (onOpenPost) onOpenPost(cwd + '/' + match);
        return;
      }
    }
    print(`<span class="t-err">cat: ${esc(args[0])}: 그런 파일이나 디렉터리가 없습니다</span>`);
    return;
  }
  if (node !== null) { print(`<span class="t-err">cat: ${esc(args[0])}: 디렉터리입니다</span>`); return; }
  // It's a file — show title
  const name = target.split('/').pop();
  print('');
  print(`<span class="t-green">${esc(name.replace('.md', ''))}</span>`);
  print(`<span class="t-dim">${esc(displayPath(target))}</span>`);
  print('');
  if (onOpenPost) onOpenPost(target);
}

function execGrep(args) {
  let caseInsensitive = false;
  const keywords = [];
  for (const a of args) {
    if (a === '-i') caseInsensitive = true;
    else if (a === '-r' || a === '-rn') { /* ignore, always recursive */ }
    else keywords.push(a);
  }
  const keyword = keywords.join(' ');
  if (!keyword) { print(`<span class="t-err">grep: 검색 패턴이 없습니다</span>`); return; }

  const allFiles = collectFiles(fs, HOME + '/posts');
  const kw = caseInsensitive ? keyword.toLowerCase() : keyword;
  const results = allFiles.filter(f => {
    const name = f.split('/').pop();
    const cmp = caseInsensitive ? name.toLowerCase() : name;
    return cmp.includes(kw);
  });

  if (results.length === 0) { print(`<span class="t-dim">(no matches)</span>`); return; }

  // Group by directory
  const groups = {};
  for (const f of results) {
    const dir = f.split('/').slice(0, -1).join('/');
    if (!groups[dir]) groups[dir] = [];
    groups[dir].push(f);
  }

  for (const [dir, files] of Object.entries(groups)) {
    print(`<span class="t-purple">${esc(displayPath(dir))}/</span>`);
    for (const f of files) {
      const name = f.split('/').pop();
      // Highlight matched part
      const idx = (caseInsensitive ? name.toLowerCase() : name).indexOf(kw);
      const before = name.slice(0, idx);
      const match = name.slice(idx, idx + keyword.length);
      const after = name.slice(idx + keyword.length);
      print(`  <span class="t-file">${esc(before)}<span class="t-match">${esc(match)}</span>${esc(after)}</span>`);
    }
  }
  print('');
  print(`<span class="t-dim">${results.length}개 결과</span>`);
}

function execFind(args) {
  let searchPath = '.';
  let namePattern = '';
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '-name' && args[i+1]) {
      namePattern = args[i+1].replace(/['"]/g, '');
      i++;
    } else if (!args[i].startsWith('-')) {
      searchPath = args[i];
    }
  }
  if (!namePattern) {
    // Simple find: just search by keyword
    namePattern = args[0] || '';
  }

  const base = resolve(searchPath);
  const node = getNode(base);
  if (!node || node === null) { print(`<span class="t-err">find: '${esc(searchPath)}': 그런 파일이나 디렉터리가 없습니다</span>`); return; }

  const allFiles = collectFiles(node, base);
  // Convert glob to regex
  const regexStr = namePattern.replace(/\./g, '\\.').replace(/\*/g, '.*').replace(/\?/g, '.');
  const regex = new RegExp(regexStr, 'i');
  const results = allFiles.filter(f => regex.test(f.split('/').pop()));

  if (results.length === 0) { print(`<span class="t-dim">(no results)</span>`); return; }
  for (const f of results) {
    print(`<span class="t-out">${esc(displayPath(f))}</span>`);
  }
}

function execWc(args) {
  if (args[0] !== '-l') { print(`<span class="t-err">wc: -l 플래그만 지원합니다</span>`); return; }
  const node = getNode(cwd);
  const files = node ? collectFiles(node, cwd) : [];
  print(`<span class="t-out">${files.length} ${esc(displayPath(cwd))}</span>`);
}

function execHelp() {
  print('');
  print('<span class="t-green">사용 가능한 명령어:</span>');
  print('  <span class="t-cyan">ls</span> <span class="t-dim">[-l] [-la]</span>         현재 디렉터리 목록');
  print('  <span class="t-cyan">cd</span> <span class="t-dim">&lt;dir&gt;</span>            디렉터리 이동');
  print('  <span class="t-cyan">pwd</span>                  현재 경로 출력');
  print('  <span class="t-cyan">tree</span> <span class="t-dim">[dir]</span>           디렉터리 트리');
  print('  <span class="t-cyan">cat</span> <span class="t-dim">&lt;file&gt;</span>           포스트 열기');
  print('  <span class="t-cyan">open</span> <span class="t-dim">&lt;file&gt;</span>          포스트 열기 (alias)');
  print('  <span class="t-cyan">grep</span> <span class="t-dim">[-i] &lt;keyword&gt;</span>  제목 검색');
  print('  <span class="t-cyan">find</span> <span class="t-dim">&lt;path&gt; -name &lt;pattern&gt;</span>');
  print('  <span class="t-cyan">wc</span> <span class="t-dim">-l</span>               포스트 수');
  print('  <span class="t-cyan">whoami</span>               사용자명');
  print('  <span class="t-cyan">history</span>              명령어 기록');
  print('  <span class="t-cyan">clear</span>                화면 지우기');
  print('  <span class="t-cyan">exit</span>                 터미널 닫기');
  print('');
  print('<span class="t-dim">Tab: 자동완성 · ↑↓: 히스토리 · Ctrl+L: 클리어</span>');
}

function execHistory() {
  if (history.length === 0) { print('<span class="t-dim">(비어 있음)</span>'); return; }
  history.forEach((cmd, i) => {
    print(`<span class="t-dim">${String(i + 1).padStart(4)}</span>  ${esc(cmd)}`);
  });
}

// ===== EXECUTE =====
function exec(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return;
  history.push(trimmed);
  historyIdx = history.length;
  printCmd(trimmed);

  const parts = splitCommand(trimmed);
  const cmd = parts[0];
  const args = parts.slice(1);

  switch(cmd) {
    case 'ls': execLs(args); break;
    case 'cd': execCd(args); break;
    case 'pwd': execPwd(); break;
    case 'tree': execTree(args); break;
    case 'cat': case 'open': execCat(args); break;
    case 'grep': execGrep(args); break;
    case 'find': execFind(args); break;
    case 'wc': execWc(args); break;
    case 'help': execHelp(); break;
    case 'history': execHistory(); break;
    case 'whoami': print('<span class="t-out">simjunghun</span>'); break;
    case 'clear': outputEl.innerHTML = ''; return; // no blank line
    case 'exit': if (onClose) onClose(); return;
    default:
      print(`<span class="t-err">bash: ${esc(cmd)}: 명령을 찾을 수 없습니다</span>`);
      print(`<span class="t-dim">'help'를 입력하면 사용 가능한 명령어를 볼 수 있습니다.</span>`);
  }
  print(''); // blank line after output
}

function updateCwd() {
  if (cwdEl) cwdEl.textContent = displayPath(cwd);
}

// ===== INPUT HANDLING =====
inputEl.addEventListener('keydown', (e) => {
  // IME 한글 조합 중이면 무시
  if (e.isComposing || e.keyCode === 229) return;

  if (e.key === 'Enter') {
    e.preventDefault();
    exec(inputEl.value);
    inputEl.value = '';
    tabCount = 0;
  } else if (e.key === 'Tab') {
    e.preventDefault();
    applyTab();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (historyIdx > 0) {
      historyIdx--;
      inputEl.value = history[historyIdx];
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIdx < history.length - 1) {
      historyIdx++;
      inputEl.value = history[historyIdx];
    } else {
      historyIdx = history.length;
      inputEl.value = '';
    }
  } else if (e.key === 'l' && e.ctrlKey) {
    e.preventDefault();
    outputEl.innerHTML = '';
  } else if (e.key === 'c' && e.ctrlKey) {
    e.preventDefault();
    printCmd(inputEl.value + '^C');
    inputEl.value = '';
  } else {
    // Reset tab state on any other key
    if (e.key !== 'Shift' && e.key !== 'Control' && e.key !== 'Alt' && e.key !== 'Meta') {
      tabCount = 0;
    }
  }
});

// Welcome message
print('<span class="t-dim">sim.junghun terminal v2.0</span>');
print('<span class="t-dim">포스트는 ~/posts 에 있습니다. "help"를 입력하세요.</span>');
print('');
updateCwd();

// Return public API
return { exec, print, resolve, getNode, isDir, displayPath };

} // end createTerminal

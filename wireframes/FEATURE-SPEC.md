# Blog Redesign — Feature Specification v1.0

> 확정일: 2026-03-13
> 상태: 기능정의 확정 → 와이어프레임 작업 대기

---

## 0. 핵심 방향

- **Session Continuity**: 모든 페이지가 하나의 터미널 세션 안에서 다른 명령어를 실행한 결과
- **Authentic Terminal**: 실제 터미널 출력과 유사한 정보 밀도. 카드 UI에 모노폰트를 입힌 것이 아님
- **Functional First**: 장식보다 정보. 터미널 메타포가 UX를 방해하지 않음
- **Progressive Disclosure**: 기본은 심플, 인터랙션으로 깊이 드러남 (터미널, 게임, vi)

---

## 1. 테마 시스템

### 1.1 지원 테마 (5개)

| 테마 | 계열 | 선정 이유 |
|------|------|-----------|
| **GitHub Light** | 라이트 | 개발자에게 가장 친숙, 깔끔 |
| **Catppuccin Latte** | 라이트 | 부드러운 파스텔 톤, 가독성 우수 |
| **Dracula** | 다크 | 터미널 테마 중 가장 인기 |
| **Nord** | 다크 | 차가운 블루톤, 모던하고 부드러움 |
| **Tokyo Night** | 다크 | 보라+블루 기반, 최신 트렌드 |

### 1.2 토큰 구조

각 테마는 동일한 CSS 변수 세트를 오버라이드:

```
--bg / --bg-secondary / --surface / --surface-hover
--text / --text-secondary / --text-muted
--green / --blue / --purple / --yellow / --red / --orange / --cyan
--green-dim / --blue-dim / --purple-dim
--border / --border-hover
```

`data-theme` 속성으로 전환:
```html
<html data-theme="dracula">
```

### 1.3 테마 전환 UI

**헤더 드롭다운**:
- 현재 ☽/☀ 토글 → 테마 이름 드롭다운으로 교체
- 클릭 → 5개 테마 목록 표시 (색상 미리보기 dot 포함)
- 선택 즉시 전환

**터미널 명령어**:
```
$ theme dracula
$ theme nord
$ theme list        # 사용 가능한 테마 목록
```

### 1.4 코드블록 테마 연동

블로그 테마 변경 시 highlight.js 테마도 함께 전환:

| 블로그 테마 | highlight.js 테마 |
|-------------|-------------------|
| GitHub Light | github |
| Catppuccin Latte | catppuccin-latte (커스텀) |
| Dracula | dracula |
| Nord | nord |
| Tokyo Night | tokyo-night-dark |

동적으로 CSS를 교체하는 방식 (`<link>` swap 또는 dynamic import).

### 1.5 Giscus 댓글 연동

`transparent_dark` 고정. 블로그 배경색이 비쳐 보여 어떤 테마든 자연스럽게 따라감.

### 1.6 저장

`localStorage`에 테마 이름 저장. 없으면 시스템 설정 기반으로 라이트/다크 중 기본 테마 선택.

---

## 2. 터미널 시스템

### 2.1 가상 파일 시스템

```
~/
├── .bashrc               ← 개발자 감성 alias/설정
├── .gitconfig            ← git 설정 + 재미 alias
├── .vimrc                ← vim 설정
├── .secret               ← easter egg (히든 업적)
├── .history              ← 가짜 명령어 히스토리 (현실 공감)
├── .env                  ← "SECRET_KEY=nice-try-hacker"
├── todo.txt              ← 할 일 목록 (유머)
├── README.md             ← 블로그 소개
│
├── posts/                ← 실제 포스트 데이터에서 자동 생성
│   ├── 개발/
│   │   ├── 백엔드/
│   │   │   └── 스프링/
│   │   │       ├── 스프링 시큐리티: JWT 인증.md
│   │   │       └── ...
│   │   └── 프론트엔드/
│   └── 사이드 프로젝트/
│       └── 메신저/
│
├── about/
│   ├── resume.yml        ← About 페이지 원본 데이터 (YAML)
│   ├── stack.yml         ← 기술스택 원본
│   ├── education.yml     ← 학력 원본
│   ├── README.md         ← 재미 stats
│   └── .easter-egg       ← 축하 메시지
│
├── links.txt             ← 외부 링크
│
└── games/
    ├── README.md         ← 게임 목록 및 실행 방법
    ├── snake.sh          ← 스네이크
    ├── 2048.sh           ← 2048 퍼즐
    ├── blocks.sh         ← 블록 퍼즐 (테트리스)
    ├── cmatrix.sh        ← Matrix rain
    └── pipes.sh          ← 파이프 스크린세이버
```

- `posts/` 하위는 실제 포스트 데이터(PostUtil)에서 자동 생성
- `about/` 파일은 YAML 원본 형태로 출력
- 숨김 파일(`.`으로 시작)은 `ls -a`에서만 표시

### 2.2 명령어 세트

#### 기본 명령어

| 명령어 | 동작 | 옵션 |
|--------|------|------|
| `ls` | 현재 디렉토리 파일 목록 | `-l` (상세), `-a` (숨김 포함), `-t` (시간순), `-S` (크기순) |
| `cd` | 디렉토리 이동 + URL 동기화 | `cd posts/` → URL `/posts`로 이동 |
| `cat` | 파일 내용 출력 | 포스트, about 파일, 숨김 파일 등 |
| `vi` / `vim` | 읽기전용 vi 뷰어 | 수정 시도 시 → 권한 없음 메시지 |
| `man` | man page 표시 | `man sim.junghun` |
| `grep` | 포스트 검색 | `grep "JWT" posts/` → 검색 결과 |
| `pwd` | 현재 경로 출력 | |
| `whoami` | 사용자 정보 | |
| `clear` | 터미널 초기화 | |
| `help` | 명령어 목록 | |
| `theme` | 테마 변경 | `theme dracula`, `theme list` |
| `history` | 명령어 히스토리 | |
| `open` | 파일 열기 (이미지 → ImagePreview) | |
| `exit` | 터미널 닫기 | |

#### Easter Egg 명령어

| 명령어 | 반응 |
|--------|------|
| `chmod` | "chmod: 이 블로그의 권한은 바꿀 수 없습니다 😅" |
| `rm` | "rm: 삭제 권한이 없습니다. 이건 제 소중한 글이에요." |
| `rm -rf /` | 특별 반응 (화면 깜빡임 + "... 농담이죠?") |
| `sudo` | "sudo: 이 블로그에서는 제가 root입니다 🫡" |
| `sl` | SL 기차 애니메이션 (이미 구현됨) |
| `neofetch` | 블로그 시스템 정보 ASCII art |
| `curl` | "이미 이 페이지에 있잖아요" |
| `npm install` | "이미 설치되어 있습니다 ✓" |
| `git push --force` | "🚨 force push는 위험합니다!" |

#### 게임 실행

```
$ cd games
$ ./snake.sh          # 또는 sh snake.sh
$ ./2048.sh
$ ./blocks.sh
$ ./cmatrix.sh
$ ./pipes.sh
```

어디서든 절대경로로도 실행 가능:
```
$ sh /games/snake.sh
$ ./games/2048.sh
```

#### 전체화면 전용 게임/이펙트

아래 명령어는 **전체화면 터미널에서만** 실행 가능:

| 명령어 | 설명 | 이유 |
|--------|------|------|
| `cmatrix` / `./cmatrix.sh` | Matrix rain 애니메이션 | 전체 화면을 채워야 몰입감 |
| `pipes` / `./pipes.sh` | 파이프 스크린세이버 | 넓은 캔버스 필요 |
| `sl` | SL 기차 애니메이션 | 전체 폭 활용 필요 |

- 윈도우 모드에서 실행 시: 자동으로 전체화면 전환 후 실행
- 종료(q/Ctrl+C) 시: 이전 모드(윈도우)로 복귀

### 2.3 터미널 UI 모드

**윈도우 모드 (기본)**:
- `Cmd+J` 또는 ShortcutBar로 열기
- 맥 스타일 윈도우 (traffic lights: 닫기/최소화/전체화면)
- 드래그로 위치 이동, 우하단으로 리사이즈 가능
- 기본 크기: 640×420, 화면 중앙에 열림
- ESC 또는 빨강 dot으로 닫기
- 노랑 dot으로 최소화 (ShortcutBar에서 복원)
- 초록 dot 또는 타이틀바 더블클릭으로 전체화면 전환

**전체화면 모드**:
- 초록 dot 클릭 또는 터미널 내 `fullscreen` 명령어로 진입
- 헤더/푸터 없이 풀스크린
- 게임 실행 시 이 모드에서 최적 경험
- 초록 dot 다시 클릭하면 윈도우 모드로 복귀
- `exit` 또는 ESC로 닫기

### 2.4 상태 관리

- **히스토리**: 페이지 이동 후에도 유지 (DesktopContext)
- **localStorage**: 브라우저 새로고침 후에도 유지
  - 저장 항목: 명령어 히스토리, 현재 디렉토리, 테마
- **URL 동기화**: `cd posts/` 실행 → URL이 `/posts`로 변경. 반대도 마찬가지 (URL 변경 → pwd 동기화)

### 2.5 파일 권한 시스템

`ls -l` 출력에서 권한 표시:

```
-rw-r--r--  junghun  스프링    5min  Mar 13  JWT 인증.md
drwxr-xr-x  junghun  -         -     -       posts/
-rwx------  junghun  games     -     -       snake.sh
-r--------  junghun  secret    -     -       .secret
```

- 일반 포스트: `-rw-r--r--` (읽기 가능)
- 디렉토리: `drwxr-xr-x`
- 게임 스크립트: `-rwx------` (실행 가능)
- 숨김 파일: `-r--------` (특별 메시지)
- vi 수정 시도 → "E45: 'readonly' option is set (add ! to override)" 느낌의 메시지
- 권한에 따른 실제 차단은 하지 않음 (메시지만 표시)

---

## 3. 페이지별 기능 정의

### 3.1 Header (공통)

```
┌──────────────────────────────────────────────────┐
│ sim.junghun    home posts about    github email [▾ theme] │
└──────────────────────────────────────────────────┘
```
- 52px, sticky, border-bottom
- Logo: `sim.junghun` (`.` = accent color)
- Nav: home / posts / about — active = accent pill
- Right: github, email, 테마 드롭다운
- Mobile: 햄버거 드로어

### 3.2 Footer (공통)

```
─────────────────────────────
      © sim.junghun · github · email · rss
```
- centered, `--text-muted`
- `margin-bottom: var(--shortcut-bar-height)`

### 3.3 ShortcutBar / Dock (공통)

- 하단 고정, 28px
- 터미널 토글, 단축키 도움말, 열린 창 목록
- 전체화면 터미널 링크

### 3.4 Home Page — `cat ~/.profile`

**컨셉**: 프로필을 `cat`으로 출력한 하나의 연속 세션

```
┌─────────────────────────────────────────┐
│ ~ $ whoami                              │
│ ┌─────────────────────────────────────┐ │
│ │ sim.junghun                         │ │
│ │ Backend Engineer                    │ │
│ │ 비즈니스 문제를 코드로...           │ │
│ └─────────────────────────────────────┘ │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│ ~ $ cat stack.yml                       │
│ ┌─────────────────────────────────────┐ │
│ │ backend:  [Spring] [Java] ...       │ │
│ │ infra:    Docker Kubernetes ...     │ │
│ │ frontend: React                     │ │
│ └─────────────────────────────────────┘ │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│ ~ $ ls -lt posts/ | head -5            │
│ total 6 entries                         │
│ ┌─────────────────────────────────────┐ │
│ │ 카테고리  5min  Mar 13  제목        │ │
│ │ 카테고리  3min  Mar 12  제목        │ │
│ └─────────────────────────────────────┘ │
│ $ cd posts/ →                           │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│ ~ $ cat links.txt                       │
│ ┌─────────────────────────────────────┐ │
│ │ github   github.com/bak-libra26    │ │
│ │ email    bak-libra26@gmail.com      │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

- max-width: 700px, centered
- 섹션 간: dashed border divider
- Output box: `surface` bg, dashed border, accent left border 2px
- Recent posts: PostRow 재사용

**변경사항**: 현재 코드 유지 (이미 잘 되어 있음). 테마 토큰만 교체.

### 3.5 Posts Page — `ls -lt ~/posts/`

**컨셉**: 디렉토리 목록 조회

```
┌──────────┬──────────────────────────────────┐
│ sidebar  │ panel                            │
│          │                                  │
│ 전체 (42)│ ~/posts $ grep "▏___________"    │
│          │                                  │
│ 개발     │ sort: -t (time) ▾                │
│ ├ 백엔드 │ ─────────────────────────────── │
│ ├ 프론트 │ -rw-r--  junghun  스프링  5min...│
│ └ 인프라 │ -rw-r--  junghun  리액트  3min...│
│          │ ...                              │
│ 사이드   │                                  │
│ ├ 블로그 │              ‹ prev 1 2 ... next ›│
│ └ 메신저 │                                  │
└──────────┴──────────────────────────────────┘
```

**스펙**:
- Grid: `160px 1fr`, gap 32px
- Sidebar: sticky, 카테고리 트리 (├─/└─ connectors)
- **검색**: 프롬프트 스타일 입력 (`~/posts $ grep "▏"`)
  - 입력 시 실시간 필터링
  - 터미널 커서 깜빡임 효과
  - 터미널에서도 `grep "keyword" posts/`로 동일 검색 가능
- **정렬**: 드롭다운 (`-t` 시간순 / `-S` 크기순 / 이름순)
  - 기본: `-t` (시간순, 최신 먼저)
  - 터미널 ls 옵션과 동일한 네이밍
- PostRow: 6-column grid (`perm / owner / category / readTime / date / title`)
  - perm 유지 (터미널 감성)
- Pagination: right-aligned, accent active page
- Mobile: sidebar → 가로 스크롤 칩, PostRow → 간소화하되 터미널 느낌 유지

### 3.6 Post Detail Page — `cat post.md`

**컨셉**: `cat`으로 마크다운 파일을 열어본 결과

```
┌──────────────────────────────────┬──────┐
│ article                          │ toc  │
│                                  │      │
│ ~/posts/개발/백엔드/스프링 $     │ on   │
│ cat "JWT 인증.md"                │ this │
│                                  │ page │
│ 개발 / 백엔드 / 스프링           │      │
│ 스프링 시큐리티: JWT 인증        │ ├ H2 │
│ [spring] [jwt] [security]        │ ├ H3 │
│ 2024-03-13 · 5 min read          │ └ H2 │
│ ─────────────────────────────── │      │
│ [Series Nav - collapsible]       │      │
│ ─────────────────────────────── │      │
│ ## 마크다운 본문                 │      │
│ ─────────────────────────────── │      │
│ [Ad]                             │      │
│ ─────────────────────────────── │      │
│ related posts (같은 시리즈)      │      │
│ ─────────────────────────────── │      │
│ [Giscus Comments]                │      │
└──────────────────────────────────┴──────┘
```

**스펙**:
- Grid: `minmax(0, 720px) 180px`, centered
- **Prompt**: `~/posts/카테고리/경로 $ cat "제목.md"`
- **Breadcrumb**: 터미널 경로 스타일 (`개발 / 백엔드 / 스프링`)
- Body: ReactMarkdown + GFM + highlight.js (테마 연동)
- Code blocks: 언어 라벨 + copy 버튼
- Images: click → ImageLightbox (zoom/pan)
- **Series Nav**: 같은 카테고리 = 시리즈. collapsible, 진행도 표시, prev/next
- Recommends: 같은 시리즈 최대 4개
- TOC: sticky aside, scroll-spy active
- Comments: Giscus (transparent_dark 고정)
- Mobile: single column, TOC hidden

### 3.7 About Page — `man sim.junghun`

**컨셉**: man page

```
┌─────────────────────────────────────────┐
│ ~ $ man sim.junghun                     │
│ ┌─────────────────────────────────────┐ │
│ │ NAME                                │ │
│ │     sim.junghun — Backend Engineer  │ │
│ │                                     │ │
│ │ SYNOPSIS                            │ │
│ │     비즈니스 문제를 코드로...       │ │
│ │                                     │ │
│ │ DESCRIPTION                         │ │
│ │   CORE COMPETENCIES                 │ │
│ │     ▸ Backend Engineering           │ │
│ │     ▸ System Design                 │ │
│ │     ▸ Technical Writing             │ │
│ │                                     │ │
│ │ STACK                               │ │
│ │   backend:  [Spring] [Java] ...     │ │
│ │   infra:    Docker Kubernetes ...   │ │
│ │                                     │ │
│ │ EDUCATION                           │ │
│ │   서울사이버대학교  재학중          │ │
│ │   KT DS  Docker ...  2024.10       │ │
│ │   멀티캠퍼스  ▸ 최우수상 ▸ 우수상  │ │
│ │                                     │ │
│ │ SEE ALSO                            │ │
│ │   github  github.com/bak-libra26   │ │
│ │   email   bak-libra26@gmail.com    │ │
│ │                                     │ │
│ │ sim.junghun(1)      March 2026     │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**스펙**:
- max-width: 700px (Home과 동일)
- prompt + 전체를 하나의 output box로 감싸기
- 섹션 헤더: `NAME`, `SYNOPSIS`, `DESCRIPTION`, `STACK`, `EDUCATION`, `SEE ALSO` — uppercase, bold
- 본문: 들여쓰기 24px
- Stack: Home과 동일한 `key: [tags]` 형식
- 하단: `sim.junghun(1)` + 날짜 — man page footer 관행
- Font Awesome 의존 제거
- **터미널 연동**: `cat about/resume.yml`, `cat about/stack.yml` 등으로 각 섹션을 YAML 원본으로 볼 수 있음

### 3.8 404 Page — `bash: command not found`

**컨셉**: prompt + output box (다른 페이지와 통일)

```
┌─────────────────────────────────────────┐
│                                         │
│ ~ $ curl /requested-path                │
│ ┌─────────────────────────────────────┐ │
│ │ bash: 404: page not found           │ │
│ │                                     │ │
│ │ 요청하신 페이지가 존재하지 않거나   │ │
│ │ 이동되었습니다.                     │ │
│ │                                     │ │
│ │ $ cd ~/home                         │ │
│ │ $ cd ~/posts                        │ │
│ └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**스펙**:
- max-width: 700px
- 세로 중앙 정렬 (`min-height: calc(100vh - header - footer)`)
- Prompt: `~ $ curl {pathname}`
- Output box: 에러 메시지 + 네비 링크
- 에러: `bash: 404:` in `--red`
- 링크: `$ cd ~/home`, `$ cd ~/posts` — 클릭 가능, accent hover
- 기존 traffic lights 제거 (다른 페이지에 없으므로 통일)

### 3.9 Terminal 전체화면 Page — `/terminal`

**컨셉**: 맥 앱 느낌의 풀스크린 터미널

```
┌─────────────────────────────────────────┐
│ ● ● ●   sim.junghun — bash             │
├─────────────────────────────────────────┤
│                                         │
│ Last login: Thu Mar 13 14:30            │
│ ~ $                                     │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

**스펙**:
- 별도 라우트: `/terminal`
- 헤더/푸터 없이 풀스크린
- 맥 윈도우 스타일 헤더 (traffic lights + 타이틀)
- 모든 터미널 명령어 사용 가능
- 게임 실행 시 최적 경험 (전체 뷰포트 활용)
- CMatrix, pipes, SL Train은 전체화면에서만 동작 (윈도우 모드에서 실행 시 자동 전환)
- 진입: Cmd+J, ShortcutBar 버튼, 또는 URL 직접 입력
- 탈출: `exit`, ESC, 또는 브라우저 뒤로가기

### 3.10 시리즈 (Series)

- 같은 카테고리 = 하나의 시리즈
- PostDetail에서 SeriesNav로 표시 (collapsible, 진행도, prev/next)
- 별도 시리즈 목록 페이지는 추후 고려 (현재 스코프 외)

---

## 4. 공유 컴포넌트

### 4.1 Prompt Header
```
~/path $ command-name
```
- `~` or path: `--blue`
- `$`: `--text-muted`
- command: `--green`

### 4.2 Output Box
```css
padding: 24px;
background: var(--surface);
border: 1px dashed var(--border);
border-left: 2px solid var(--green);
```

### 4.3 Dashed Divider
```css
border-bottom: 1px dashed var(--border);
```

### 4.4 PostRow (`ls -lt` 스타일)
```
-rw-r--r--  junghun  카테고리  5min  Mar 13 14:30  제목
```
6-column grid. 모바일에서 간소화하되 터미널 느낌 유지.

### 4.5 검색 Input (프롬프트 스타일)
```
~/posts $ grep "▏___________"
```
실시간 필터링, 커서 깜빡임 효과.

---

## 5. 반응형 (Mobile)

**원칙**: 데스크톱과 최대한 동일한 터미널 느낌. 단, 모바일 UX를 해치는 요소는 제거.

| 요소 | 데스크톱 | 모바일 |
|------|----------|--------|
| Header | 풀 nav | 햄버거 드로어 |
| PostRow | 6-column | 간소화 (cat/date/title 정도), 터미널 느낌 유지 |
| Posts sidebar | 왼쪽 패널 | 가로 스크롤 칩 |
| PostDetail TOC | 우측 aside | 숨김 |
| 검색 | 프롬프트 스타일 | 동일 |
| 터미널 오버레이 | 드래그 윈도우 (traffic lights) | 바텀시트: 스와이프 업/다운으로 절반↔전체화면↔닫기, traffic lights 없음, 드래그 핸들+타이틀만 |
| Output box | padding 24px | padding 16px |
| Prompt | 동일 | 동일 |

---

## 6. Easter Eggs 요약

| 트리거 | 반응 |
|--------|------|
| `ls -a` | 숨김 파일 표시 (.bashrc, .secret, .env 등) |
| `cat .bashrc` | 개발자 감성 alias |
| `cat .secret` | 히든 업적 달성 메시지 |
| `cat .env` | "SECRET_KEY=nice-try-hacker 😏" |
| `cat .history` | 가짜 명령어 히스토리 |
| `cat .vimrc` | vim 설정 |
| `cat .gitconfig` | git alias |
| `sl` | 기차 애니메이션 |
| `sudo` | "이 블로그에서는 제가 root입니다" |
| `rm -rf /` | 화면 효과 + 재미 메시지 |
| `chmod` | 권한 변경 불가 메시지 |
| `vi 파일` → `:w` | "E45: readonly" 스타일 메시지 |
| 게임들 | snake, 2048, blocks, cmatrix, pipes |
| `neofetch` | 블로그 시스템 정보 ASCII art |

---

## 7. 기술 구현 참고

### 변경 필요한 파일/시스템

| 영역 | 파일 | 변경 내용 |
|------|------|-----------|
| 테마 | `tokens.css` | 5개 테마 토큰 정의 |
| 테마 | `ThemeContext.jsx` | toggleTheme → setTheme(name) |
| 테마 | `ThemeToggle.jsx` | 토글 → 드롭다운 |
| 테마 | `useTheme.js` | theme 값이 테마 이름 |
| 테마 | highlight.js | 동적 CSS 로딩 |
| About | `AboutPage.jsx` | man page 스타일 재작성 |
| About | `about-page.css` | 전면 재작성 |
| 404 | `NotFoundPage.jsx` | prompt + output 스타일 |
| 404 | `not-found-page.css` | 재작성 |
| PostDetail | `PostDetailPage.jsx` | prompt 추가 |
| PostDetail | `post-detail-meta.css` | prompt 스타일 |
| Posts | `PostsContent.jsx` | 검색 input + 정렬 드롭다운 |
| Terminal | `TerminalEngine.js` | theme 명령어, 파일 시스템 보강 |
| Terminal | 신규 페이지 | `/terminal` 전체화면 라우트 |
| 공통 | `index.html` | Font Awesome CDN 제거 |
| 삭제 | `home-hero.css` | 미사용 |
| 삭제 | `latest-posts.css` | 미사용 |

### 변경하지 않는 것

- Home 페이지 (현재 잘 되어 있음, 테마 토큰만 교체)
- Posts 페이지 레이아웃 (검색/정렬 추가만)
- DesktopContext / WindowShell
- Data layer (PostUtil, PostService, models)
- 게임 컴포넌트들 (이미 구현됨)

---

## 8. 다음 단계

1. **이 기능정의서 리뷰 & 확정**
2. **와이어프레임 작성** — 각 페이지별 + 테마 적용 시각화
3. **와이어프레임 논의 & 확정**
4. **개발 진행**

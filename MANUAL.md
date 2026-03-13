# sim.junghun 블로그 — 프로젝트 인수인계서 / 매뉴얼

> 최종 업데이트: 2026-03-14

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | bak-libra26-blog (sim.junghun 개발 블로그) |
| **URL** | https://bak-libra26.co.kr |
| **프레임워크** | React 19 + Vite 7 |
| **배포** | GitHub Pages (`gh-pages -d dist -t`) |
| **호스팅** | GitHub Pages + 커스텀 도메인 |
| **언어** | 한국어 (ko) |

### 기술 스택

```
프론트엔드:  React 19, React Router 7, Vite 7
마크다운:    react-markdown, remark-gfm, rehype-highlight, rehype-slug, rehype-raw
스타일:      Vanilla CSS (CSS Variables 기반 테마 시스템)
분석:        Google Analytics 4 (react-ga4)
수익화:      Google AdSense
댓글:        Giscus (GitHub Discussions 기반)
PWA:         vite-plugin-pwa (Workbox)
SEO:         JSON-LD, OG Tags, sitemap.xml, RSS/Atom, Puppeteer 프리렌더링
```

---

## 2. 디렉토리 구조

```
/
├── public/                      # 정적 파일 (favicon, robots.txt, ads.txt, 이미지)
│   ├── images/                  # OG 이미지, 포스트 이미지
│   ├── robots.txt               # 크롤러 규칙
│   ├── ads.txt                  # AdSense 인증
│   └── favicon-96x96.png 등     # 파비콘 세트
│
├── scripts/                     # 빌드 후처리 스크립트
│   ├── generate-sitemap.js      # sitemap.xml 자동 생성
│   ├── generate-rss.js          # RSS/Atom 피드 생성
│   └── prerender.js             # Puppeteer 기반 정적 HTML 생성
│
├── src/
│   ├── index.jsx                # 진입점: BrowserRouter, ThemeProvider, App 마운트
│   ├── App.jsx                  # 라우팅, GA4 초기화, 로딩 화면 관리
│   ├── ScrollToTop.jsx          # 라우트 변경 시 스크롤 초기화
│   │
│   ├── pages/                   # 페이지 컴포넌트 (라우트 단위)
│   │   ├── HomePage.jsx         # 메인 페이지 (whoami, stack, recent posts, links)
│   │   ├── PostsPage.jsx        # 글 목록 (사이드바 + 콘텐츠)
│   │   ├── PostDetailPage.jsx   # 글 상세 (마크다운 렌더링, TOC, 댓글, 추천)
│   │   ├── AboutPage.jsx        # 소개 (man page 스타일)
│   │   └── NotFoundPage.jsx     # 404 에러
│   │
│   ├── components/              # 재사용 컴포넌트
│   │   ├── SeoHelper.jsx        # <head> 메타태그, JSON-LD 스키마 주입
│   │   ├── ErrorBoundary.jsx    # 전역 에러 캐칭 (class component)
│   │   ├── LoadingScreen.jsx    # 초기 로딩 애니메이션
│   │   ├── PostsResolver.jsx    # /posts/* URL 분석 → 카테고리 or 상세 분기
│   │   ├── PostsContent.jsx     # 포스트 목록 (검색, 정렬, 페이지네이션)
│   │   ├── PostRow.jsx          # 개별 포스트 행 (ls 스타일)
│   │   ├── PostsSidebar.jsx     # 카테고리 트리 사이드바
│   │   ├── Breadcrumb.jsx       # 경로 탐색 (카테고리 링크)
│   │   ├── SeriesNav.jsx        # 시리즈 네비게이션 (같은 카테고리 글 목록)
│   │   ├── ImageLightbox.jsx    # 이미지 확대 뷰어 (pinch zoom, 드래그)
│   │   ├── ImagePreview.jsx     # 터미널에서 열리는 이미지 프리뷰 윈도우
│   │   ├── AdsenseAd.jsx        # AdSense 광고 슬롯
│   │   ├── ThemeToggle.jsx      # 테마 선택 드롭다운
│   │   ├── ShortcutBar.jsx      # 하단 바 (윈도우 목록, 터미널 토글)
│   │   ├── ShortcutsModal.jsx   # 키보드 단축키 모달
│   │   ├── WindowShell.jsx      # 드래그/리사이즈 가능한 윈도우 프레임
│   │   ├── TerminalOverlay.jsx  # 터미널 윈도우 (vi, 게임 포함)
│   │   ├── ViEditor.jsx         # vi 에디터 UI
│   │   ├── TerminalEngine.js    # 터미널 핵심 로직 (명령 실행, 탭 완성, 히스토리)
│   │   │
│   │   ├── terminal/            # 터미널 서브시스템
│   │   │   ├── VirtualFS.js     # 가상 파일시스템 (블로그 구조 반영)
│   │   │   ├── OutputRenderer.js # HTML 출력 포맷터
│   │   │   ├── path-utils.js    # 경로 해석, CWD 관리
│   │   │   ├── commands/        # 명령어 핸들러
│   │   │   │   ├── index.js     # 명령어 레지스트리
│   │   │   │   ├── navigation.js # cd, ls, pwd
│   │   │   │   ├── file-ops.js  # cat, open, vi, head, tail
│   │   │   │   ├── search.js    # grep, find
│   │   │   │   ├── system.js    # clear, exit, help, whoami, date, echo
│   │   │   │   ├── fun.js       # fortune, cowsay, cmatrix, neofetch
│   │   │   │   └── script.js    # ./script.sh, bash script 실행
│   │   │   └── data/            # 정적 데이터
│   │   │       ├── help-texts.js    # 명령어 도움말
│   │   │       ├── constants.js     # 상수 (MOTD 등)
│   │   │       ├── file-icons.js    # 파일 확장자별 아이콘
│   │   │       └── easter-eggs.js   # 이스터에그 응답
│   │   │
│   │   ├── games/               # 터미널 내장 게임
│   │   │   ├── CMatrix.jsx      # Matrix 비 애니메이션
│   │   │   ├── SnakeGame.jsx    # 뱀 게임
│   │   │   ├── Game2048.jsx     # 2048 퍼즐
│   │   │   ├── BlocksGame.jsx   # 테트리스 클론
│   │   │   ├── Pipes.jsx        # 파이프 애니메이션
│   │   │   └── SLTrain.jsx      # sl 기차 이스터에그
│   │   │
│   │   └── common/
│   │       └── TerminalFrame.jsx # 터미널 스타일 프레임 (재사용)
│   │
│   ├── context/                 # React Context
│   │   ├── ThemeContext.jsx      # 테마 관리 (5종 테마, localStorage 저장)
│   │   └── DesktopContext.jsx   # 윈도우 매니저 (열기/닫기/포커스/최소화/전체화면)
│   │
│   ├── hooks/                   # 커스텀 훅
│   │   ├── useTheme.js          # ThemeContext 소비자
│   │   ├── useDesktop.js        # DesktopContext 소비자
│   │   ├── useTerminal.js       # 터미널 상태 + 키 입력 처리
│   │   ├── useVi.js             # vi 에디터 상태 (모드, 커서, 명령)
│   │   ├── useScrollSpy.js      # TOC 활성 항목 추적
│   │   ├── useKeyboardShortcuts.js # 전역 단축키 (Ctrl+J, ?, Esc)
│   │   └── ga4/
│   │       └── useGoogleAnalytics.jsx # GA4 추적 (페이지뷰, 스크롤, 읽기, 외부클릭, 검색)
│   │
│   ├── layouts/                 # 레이아웃 컴포넌트
│   │   ├── Layout.jsx           # 공통 레이아웃 (Header + Main + Footer + Desktop)
│   │   ├── Header.jsx           # 네비게이션 바 (데스크톱/모바일 드로어)
│   │   ├── Main.jsx             # 콘텐츠 영역 + AdSense
│   │   └── Footer.jsx           # 푸터 (저작권, 링크)
│   │
│   ├── models/
│   │   └── post.js              # Post 클래스 (제목, 내용, 태그, 날짜, 카테고리)
│   │
│   ├── utils/                   # 유틸리티 함수
│   │   ├── post-util.js         # 포스트 컬렉션 (전체 조회, 카테고리 필터, 경로 검색)
│   │   ├── markdown-util.js     # 프론트매터 파싱, TOC 생성
│   │   ├── date-util.js         # 날짜 포맷 (한국어, ISO, ls 스타일)
│   │   ├── href-util.js         # URL 빌더 (포스트 목록, 상세)
│   │   ├── html-util.js         # HTML 이스케이프, 경로 이스케이프
│   │   └── reading-time-util.js # 읽기 시간 추정 (한국어 500자/분, 영어 200단어/분)
│   │
│   ├── styles/                  # CSS (컴포넌트별 분리)
│   │   ├── base/                # 전역 (tokens, reset, typography, layout, animations)
│   │   ├── layout/              # 레이아웃 (header, main, footer)
│   │   ├── components/          # 컴포넌트별 스타일
│   │   └── pages/               # 페이지별 스타일
│   │
│   └── assets/
│       └── posts/               # 마크다운 포스트 파일 (카테고리/서브카테고리/제목.md)
│
├── index.html                   # HTML 엔트리 (OG 기본값, AdSense, SPA redirect)
├── vite.config.js               # Vite 설정 (PWA, 코드 스플리팅)
├── package.json                 # 의존성, 스크립트
└── .env                         # 환경변수 (GA4 ID, AdSense client)
```

---

## 3. 핵심 아키텍처

### 3.1 데이터 흐름

```
마크다운 파일 (src/assets/posts/**/*.md)
    ↓ Vite import.meta.glob (빌드 타임에 eagerly 로드)
    ↓
MarkdownUtil.metadata() → YAML 프론트매터 파싱
MarkdownUtil.content()  → 본문 추출
    ↓
Post 클래스 인스턴스 생성 (models/post.js)
    ↓
PostUtil (utils/post-util.js) → 정렬, 필터, 캐시 (pathMap)
    ↓
React 컴포넌트에서 PostUtil.findBy(), findByPath() 등으로 조회
```

### 3.2 포스트 메타데이터 형식

```yaml
---
created_date: "2024-12-25"           # 필수. YYYY-MM-DD (KST 기준)
last_modified_date: "2025-01-10"     # 선택. 생략 시 created_date 사용
tags: [Spring, Security, JWT]        # 배열 또는 쉼표 구분 문자열
summary: "JWT 인증 구현 방법 정리"     # 글 목록에 표시되는 요약
visibility: hidden                   # 'hidden'이면 목록에서 제외
---

본문 마크다운...
```

### 3.3 라우팅 구조

```
URL 패턴                     → 처리
──────────────────────────────────────────────────────
/                            → HomePage
/posts                       → PostsPage (전체 글)
/posts/개발                   → PostsPage (카테고리: 개발)
/posts/개발/백엔드             → PostsPage (서브카테고리)
/posts/개발/백엔드/스프링/제목  → PostDetailPage (글 상세)
/about                       → AboutPage
그 외                         → NotFoundPage (404)

* PostsResolver가 /posts/* URL을 분석하여 카테고리인지 글인지 판단
* 판단 기준: PostUtil.findByPath()로 매칭되면 글, 아니면 카테고리
```

### 3.4 테마 시스템

```
5가지 테마 지원:
1. dracula (기본 다크)
2. nord (다크)
3. tokyo-night (다크)
4. github-light (라이트)
5. catppuccin-latte (라이트)

동작 원리:
- CSS Variables 기반 (src/styles/base/tokens.css)
- <html data-theme="dracula"> 속성으로 테마 전환
- localStorage에 사용자 선택 저장
- 미선택 시 시스템 다크모드(prefers-color-scheme) 따름
```

### 3.5 윈도우 매니저 (DesktopContext)

```
데스크톱 환경을 시뮬레이션하는 윈도우 관리 시스템:

윈도우 타입:
- terminal: 터미널 (싱글톤, 항상 존재, 최소화/복원만 가능)
- post: 포스트 리더 (터미널에서 open 시)
- image: 이미지 프리뷰 (터미널에서 이미지 열기 시)

상태: normal → minimized → restored
       normal → fullscreen → normal

z-index 계층:
- 일반 윈도우: 10000 + win.zIndex
- 전체화면:    10500 (--z-window-fullscreen)
- 단축키 모달: 11000 (--z-shortcuts)
- 로딩 화면:   12000 (--z-loading)
```

### 3.6 터미널 시스템

```
구성:
- TerminalEngine.js: 명령 파싱, 실행, 탭 완성, 히스토리
- VirtualFS.js: 블로그 디렉토리 구조를 가상 파일시스템으로 제공
- commands/: 각 명령어별 핸들러

지원 명령어:
  네비게이션: cd, ls, pwd, tree
  파일:       cat, head, tail, open, vi, wc
  검색:       grep, find
  시스템:     clear, exit, help, whoami, date, echo, env, uname, history
  재미:       fortune, cowsay, cmatrix, snake, 2048, blocks, pipes, sl, neofetch

특수 기능:
- 탭 완성 (명령어, 경로, 플래그)
- 히스토리 (↑↓)
- Ctrl+C/L/U/W/A/E/K/D 단축키
- cd posts → 실제 /posts 라우트로 이동
- open file.md → 포스트 상세 페이지로 이동
```

---

## 4. 환경 설정

### 4.1 환경변수 (.env)

```bash
VITE_GA_MEASUREMENT_ID=G-82NTHKNYRE    # Google Analytics 4 측정 ID
VITE_AD_CLIENT=ca-pub-8945417625760085  # Google AdSense 퍼블리셔 ID
```

> `.env`는 git에 포함되어 있음. 민감 정보가 아님 (클라이언트 사이드 공개 키).

### 4.2 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 시작 (--host로 LAN 접근 허용)
npm run dev

# 프로덕션 빌드
npm run build
# → vite build + sitemap + RSS + prerender

# 로컬 프리뷰
npm run preview

# 배포
npm run deploy
# → gh-pages -d dist -t
```

### 4.3 Node.js 요구사항

```
Node.js: 18+
npm: 9+
Puppeteer: prerender.js에서 사용 (Chrome/Chromium 필요)
```

---

## 5. 빌드 파이프라인

```
npm run build 실행 시:

1. vite build
   - React 코드 컴파일 + 번들링
   - CSS 추출 및 최소화
   - 코드 스플리팅 (vendor-react, vendor-markdown, 페이지별)
   - PWA: Service Worker + manifest.webmanifest 생성
   - 출력 → dist/

2. node scripts/generate-sitemap.js
   - src/assets/posts/**/*.md 를 스캔
   - visibility: hidden 인 포스트 제외
   - 카테고리, 서브카테고리, 포스트 URL 수집
   - dist/sitemap.xml 생성

3. node scripts/generate-rss.js
   - 동일한 포스트 스캔
   - dist/feed.xml (RSS 2.0) + dist/atom.xml (Atom 1.0) 생성

4. node scripts/prerender.js
   - 로컬 서버 (port 45678)에서 dist/ 서빙
   - Puppeteer로 각 라우트 방문 → 렌더된 HTML 캡처
   - 외부 리소스 (GA, AdSense, 폰트) 차단하여 속도 향상
   - dist/{route}/index.html 에 정적 HTML 저장
   - 크롤러가 JavaScript 없이도 콘텐츠를 읽을 수 있게 함
```

---

## 6. 배포

### 6.1 GitHub Pages 배포

```bash
npm run deploy
# gh-pages -d dist -t
# -t 플래그: dotfiles(.nojekyll 등)도 포함
```

### 6.2 커스텀 도메인

- `public/CNAME` 파일에 도메인 설정 (있다면)
- GitHub repo Settings → Pages → Custom domain에서 설정
- DNS: A 레코드 또는 CNAME 설정 필요

### 6.3 배포 체크리스트

```
□ npm run build 성공 확인
□ dist/sitemap.xml 생성 확인
□ dist/feed.xml, dist/atom.xml 생성 확인
□ 프리렌더링 완료 확인 (콘솔 로그)
□ npm run deploy 실행
□ 배포 후 https://bak-libra26.co.kr 접근 확인
□ Google Search Console에서 sitemap 제출
```

---

## 7. SEO 구성 상세

### 7.1 메타태그 (SeoHelper.jsx)

| 태그 | 적용 페이지 | 동적 여부 |
|------|------------|----------|
| `<title>` | 모든 페이지 | 동적 |
| `<meta description>` | 모든 페이지 | 동적 |
| `<link canonical>` | 모든 페이지 | 동적 |
| `<meta og:*>` | 모든 페이지 | 동적 |
| `<meta twitter:*>` | 모든 페이지 | 동적 |
| JSON-LD WebSite | 홈페이지만 | 정적 |
| JSON-LD Person | 홈페이지만 | 정적 |
| JSON-LD BlogPosting | 포스트 상세 | 동적 |
| JSON-LD BreadcrumbList | 비홈 페이지 | 동적 |

### 7.2 크롤링 최적화

- **robots.txt**: `/games/`만 차단, 나머지 허용
- **sitemap.xml**: 정적 페이지 + 카테고리 + 서브카테고리 + 모든 포스트
- **프리렌더링**: 모든 라우트에 대해 정적 HTML 생성 (SPA 크롤링 문제 해결)
- **SPA redirect**: index.html에 GitHub Pages 404 → SPA 리디렉트 스크립트 포함

---

## 8. Google Analytics 4

### 8.1 추적 이벤트

| 이벤트 | 트리거 | 파라미터 |
|--------|--------|---------|
| `pageview` | 라우트 변경 | page, title |
| `scroll_depth` | 25/50/75/90% 스크롤 | percent, page |
| `post_read` | 포스트에서 10초+ 체류 후 이탈 | post_title, read_time_seconds, page |
| `outbound_click` | 외부 링크 클릭 | url |
| `search` | 포스트 검색 (800ms debounce) | search_term |

### 8.2 초기화 조건

- `import.meta.env.PROD === true` (프로덕션 빌드에서만)
- `VITE_GA_MEASUREMENT_ID` 환경변수가 설정되어 있을 때만

---

## 9. Google AdSense

### 9.1 현재 광고 위치

| 위치 | 슬롯 ID | 포맷 |
|------|---------|------|
| 포스트 본문 하단 | `7492590861` | auto (responsive) |
| 메인 콘텐츠 하단 | Main.jsx 내 | auto (responsive) |

### 9.2 설정 파일

- **index.html**: AdSense 스크립트 로드 (`ca-pub-8945417625760085`)
- **.env**: `VITE_AD_CLIENT=ca-pub-8945417625760085`
- **public/ads.txt**: `google.com, pub-8945417625760085, DIRECT, f08c47fec0942fa0`

### 9.3 개발 모드

개발 모드에서는 실제 광고 대신 `AD PLACEHOLDER (Google AdSense)` 텍스트가 표시된다.

---

## 10. 포스트 작성 가이드

### 10.1 파일 위치

```
src/assets/posts/{카테고리}/{서브카테고리}/{제목}.md
```

예시:
```
src/assets/posts/개발/백엔드/스프링/스프링 시큐리티: JWT 인증 구현하기.md
```

### 10.2 프론트매터 템플릿

```yaml
---
created_date: "2026-03-14"
last_modified_date: "2026-03-14"
tags: [Spring, Security, JWT]
summary: "Spring Security에서 JWT 인증을 구현하는 방법을 정리합니다."
---
```

### 10.3 이미지 사용

```markdown
<!-- 방법 1: 상대 경로 (자동으로 /images/posts/{카테고리}/ 접두사 추가) -->
![설명](image.png)

<!-- 방법 2: 절대 경로 -->
![설명](/images/posts/개발/백엔드/image.png)

<!-- 방법 3: 외부 URL -->
![설명](https://example.com/image.png)
```

이미지 파일은 `public/images/posts/{카테고리}/{서브카테고리}/` 에 저장한다.

### 10.4 콜아웃 (특수 인용문)

```markdown
> ▸ TIP 이것은 팁 박스입니다.    → 녹색 TIP 콜아웃
> ⚠ WARNING 주의 사항입니다.     → 노란색 WARNING 콜아웃
> ℹ INFO 참고 정보입니다.        → 파란색 INFO 콜아웃
> 일반 인용문                    → 기본 blockquote
```

### 10.5 포스트 숨기기

```yaml
visibility: hidden
```

프론트매터에 위 설정 추가 시 목록에서 제외되지만, URL로 직접 접근은 가능하다.

---

## 11. 키보드 단축키

| 키 | 동작 | 컨텍스트 |
|----|------|---------|
| `⌘J` / `Ctrl+J` | 터미널 열기/닫기 | 전역 |
| `?` | 단축키 모달 열기/닫기 | 전역 (입력 필드 외) |
| `Esc` | 활성 윈도우 닫기/최소화 | 전역 |
| `Tab` | 자동완성 | 터미널 |
| `↑` / `↓` | 명령 히스토리 | 터미널 |
| `Ctrl+L` | 화면 초기화 | 터미널 |
| `Ctrl+C` | 명령 취소 | 터미널 |
| `Ctrl+U` | 입력줄 삭제 | 터미널 |
| `Ctrl+W` | 마지막 단어 삭제 | 터미널 |
| `Ctrl+A` / `Ctrl+E` | 줄 시작/끝 이동 | 터미널 |

---

## 12. 테마 커스터마이징

### 12.1 새 테마 추가 방법

1. `src/styles/base/tokens.css`에 새 테마 CSS 변수 블록 추가:

```css
[data-theme="my-theme"] {
  --bg: #...; --bg-secondary: #...; --surface: #...;
  --text: #...; --text-secondary: #...; --text-muted: #...;
  --green: #...; --blue: #...; --purple: #...; --yellow: #...;
  --red: #...; --orange: #...; --cyan: #...;
  --border: #...; --border-hover: #...;
  --green-dim: rgba(...); --blue-dim: rgba(...); --purple-dim: rgba(...);
  color-scheme: dark; /* 또는 light */
}
```

2. `src/components/ThemeToggle.jsx`의 `THEMES` 배열에 추가:

```javascript
{ id: 'my-theme', label: 'My Theme', palette: ['#색1', '#색2', '#색3', '#색4'] }
```

3. `src/components/SeoHelper.jsx`의 `THEME_COLORS`에 추가 (선택사항)

---

## 13. PWA 설정

### 13.1 캐싱 전략

| 리소스 | 전략 | 만료 |
|--------|------|------|
| JS/CSS/HTML | Precache (빌드 타임) | 즉시 갱신 |
| 이미지 (png/jpg/svg/webp) | Cache First (런타임) | 30일, 최대 100개 |
| 포스트 에셋 | Cache First (런타임) | 30일, 최대 200개 |

### 13.2 갱신 방식

`registerType: "autoUpdate"` — 새 Service Worker가 감지되면 자동으로 활성화된다.

---

## 14. 문제 해결

### 14.1 빌드 실패

```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# Vite 캐시 초기화
rm -rf node_modules/.vite
npm run build
```

### 14.2 프리렌더링 실패

```bash
# Puppeteer가 Chrome을 찾지 못하는 경우
npx puppeteer browsers install chrome

# 특정 라우트에서 타임아웃
# → prerender.js 콘솔에서 SKIP 로그 확인
# → 해당 포스트의 마크다운 문법 오류 확인
```

### 14.3 AdSense 미노출

```
1. 배포 환경인지 확인 (dev에서는 placeholder만 표시)
2. ads.txt 접근 가능 확인: https://bak-libra26.co.kr/ads.txt
3. AdSense 대시보드 → 정책 센터에서 위반 사항 확인
4. Chrome DevTools → Network → "adsbygoogle" 필터로 응답 확인
```

### 14.4 GA4 이벤트 미추적

```
1. VITE_GA_MEASUREMENT_ID 환경변수 확인
2. 프로덕션 빌드인지 확인 (dev에서는 비활성화)
3. GA4 대시보드 → 실시간 → 이벤트에서 확인
4. Chrome 확장 "Google Analytics Debugger"로 디버그
```

---

## 15. 유지보수 체크리스트

### 정기 점검 (월 1회)

```
□ npm audit 실행 → 보안 취약점 확인
□ npm outdated 실행 → 의존성 업데이트 확인
□ Google Search Console → 크롤링 에러 확인
□ GA4 대시보드 → 트래픽/이벤트 정상 확인
□ AdSense 대시보드 → 정책 위반 확인
□ Lighthouse 감사 실행 → SEO/성능/접근성 점수 확인
```

### 의존성 업데이트 시 주의사항

```
react / react-dom: 메이저 업데이트 시 Breaking Changes 확인
react-router-dom: v7 → v8 전환 시 라우팅 API 변경 주의
react-markdown / rehype-*: 플러그인 호환성 확인
vite: 메이저 업데이트 시 설정 변경 필요 가능성
vite-plugin-pwa: Workbox 버전과 함께 업데이트
```

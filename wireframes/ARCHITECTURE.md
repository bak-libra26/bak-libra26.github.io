# Blog Redesign — Development Architecture

> 확정일: 2026-03-13
> 기준: FEATURE-SPEC.md + v2-redesign.html + mobile.html 와이어프레임

---

## 1. 기술 스택

| 영역 | 기술 | 버전 |
|------|------|------|
| Framework | React | 19 |
| Build | Vite | 7.3 |
| Router | React Router | 7 |
| Markdown | ReactMarkdown + remark-gfm | - |
| Syntax | highlight.js (테마 연동) | - |
| Deploy | GitHub Pages (gh-pages) | - |
| PWA | vite-plugin-pwa | - |

---

## 2. 디렉토리 구조

```
src/
├── components/
│   ├── common/              # 범용 재사용 컴포넌트
│   │   ├── TerminalFrame.jsx    # 터미널 프레임 (title bar + body) — P0
│   │   ├── PromptLine.jsx       # ~/path $ command 프롬프트 — P0
│   │   ├── OutputBox.jsx        # surface + dashed border + green left — P0
│   │   ├── DashedDivider.jsx    # 섹션 구분선 — P0
│   │   ├── WindowShell.jsx      # 데스크탑 윈도우 / 모바일 바텀시트 — P2
│   │   ├── LoadingScreen.jsx    # 초기 로딩 화면
│   │   ├── Breadcrumb.jsx       # 경로 탐색
│   │   ├── ImageLightbox.jsx    # 이미지 확대
│   │   └── ErrorBoundary.jsx    # 에러 경계
│   │
│   ├── terminal/            # 터미널 전용
│   │   ├── TerminalOverlay.jsx  # 터미널 윈도우 컨테이너
│   │   ├── ViEditor.jsx         # Vi 읽기전용 에디터
│   │   ├── ShortcutsModal.jsx   # 단축키 도움말
│   │   ├── ShortcutBar.jsx      # 하단 독
│   │   └── engine/              # 터미널 엔진 모듈화 — P3
│   │       ├── TerminalEngine.js    # 코어 (파싱, I/O, 히스토리)
│   │       ├── virtual-fs.js        # 가상 파일시스템 트리
│   │       ├── fs-commands.js       # ls, cd, cat, pwd
│   │       ├── system-commands.js   # clear, help, whoami, echo, theme
│   │       ├── nav-commands.js      # open, 라우팅 연동
│   │       └── game-commands.js     # cmatrix, pipes, sl, snake, 2048, blocks
│   │
│   ├── post/                # 포스트 관련
│   │   ├── PostRow.jsx          # ls -lt 스타일 행
│   │   ├── PostReaderWindow.jsx # 포스트 읽기 윈도우
│   │   ├── SeriesNav.jsx        # 시리즈 네비게이션
│   │   └── ImagePreview.jsx     # 이미지 미리보기 윈도우
│   │
│   └── games/               # 게임 컴포넌트
│       ├── CMatrix.jsx
│       ├── Pipes.jsx
│       ├── SLTrain.jsx
│       ├── SnakeGame.jsx
│       ├── Game2048.jsx
│       └── BlocksGame.jsx
│
├── context/
│   ├── DesktopContext.jsx   # 윈도우 상태 관리 (useReducer)
│   └── ThemeContext.jsx     # 5-테마 관리 (useState + localStorage)
│
├── hooks/
│   ├── useDesktop.js        # DesktopContext 소비
│   ├── useTheme.js          # ThemeContext 소비
│   ├── useTerminal.js       # 터미널 상태 + 입력 처리
│   ├── useVi.js             # Vi 에디터 상태
│   └── useKeyboardShortcuts.js
│
├── layouts/
│   ├── Layout.jsx           # DesktopProvider + LayoutInner + WindowRenderer
│   ├── Header.jsx           # 52px sticky, 로고 + 네비 + 테마 드롭다운
│   ├── Main.jsx             # <Outlet /> 래퍼
│   └── Footer.jsx           # 센터 정렬, 링크
│
├── pages/
│   ├── HomePage.jsx         # cat ~/.profile 컨셉
│   ├── PostsPage.jsx        # ls -lt ~/posts/ 컨셉
│   ├── PostDetailPage.jsx   # cat post.md 컨셉 (lazy)
│   ├── AboutPage.jsx        # man sim.junghun 컨셉 (lazy)
│   └── NotFoundPage.jsx     # bash: 404 (lazy)
│
├── services/
│   └── post-service.js      # Vite glob → 포스트 파싱/캐싱
│
├── models/
│   └── post.js              # Post 데이터 모델
│
├── utils/
│   ├── post-util.js         # 정렬, 필터, 검색, 시리즈 그룹핑
│   ├── date-util.js         # 날짜 포맷
│   ├── href-util.js         # URL 생성
│   ├── markdown-util.js     # 마크다운 처리
│   ├── reading-time-util.js # 읽기 시간 계산
│   └── html-util.js         # HTML 유틸
│
└── styles/
    ├── base/
    │   ├── tokens.css       # 5개 테마 CSS 변수 정의 — P1
    │   ├── reset.css        # CSS 초기화
    │   ├── typography.css   # 타이포그래피
    │   ├── animations.css   # 모든 @keyframes 통합 — P1
    │   ├── global.css       # 글로벌 스타일 + import 순서
    │   └── layout.css       # 기본 레이아웃
    │
    ├── components/          # 컴포넌트 1:1 CSS
    │   ├── terminal-frame.css   # P0
    │   ├── window-shell.css
    │   ├── loading-screen.css
    │   ├── terminal-overlay.css
    │   ├── shortcut-bar.css
    │   ├── shortcuts-modal.css
    │   ├── post-row.css
    │   ├── post-reader.css
    │   ├── series-nav.css
    │   ├── breadcrumb.css
    │   ├── image-lightbox.css
    │   ├── image-preview.css
    │   └── theme-toggle.css
    │
    ├── layout/
    │   ├── header.css
    │   ├── main.css
    │   └── footer.css
    │
    └── pages/
        ├── home/
        │   └── home-page.css
        ├── posts/
        │   ├── posts-page.css
        │   └── posts-sidebar.css
        ├── post-detail/
        │   ├── post-detail-page.css
        │   ├── post-detail-body.css
        │   ├── post-detail-toc.css
        │   └── post-detail-recommends.css
        ├── about/
        │   └── about-page.css
        └── not-found/
            └── not-found-page.css
```

---

## 3. 컴포넌트 계층

```
<BrowserRouter>
  <ThemeProvider>                     ← 5-테마 상태 + data-theme
    <ScrollToTop>
      <ErrorBoundary>
        <LoadingScreen />            ← 최초 1회, 2초
        <Routes>
          <Layout>                   ← DesktopProvider 래핑
            ├── Header               ← 로고 + 네비 + ThemeDropdown
            ├── Main → <Outlet>
            │   ├── HomePage
            │   ├── PostsPage
            │   ├── PostDetailPage   ← lazy
            │   ├── AboutPage        ← lazy
            │   └── NotFoundPage     ← lazy
            ├── Footer
            ├── WindowRenderer       ← 열린 윈도우 순회 렌더
            │   └── WindowShell
            │       ├── desktop: 드래그/리사이즈/traffic lights
            │       └── mobile: 바텀시트/스와이프/드래그핸들
            ├── ShortcutBar          ← 하단 독
            └── ShortcutsModal       ← 단축키 도움말
```

---

## 4. 재사용 공통 컴포넌트 (P0)

### 4.1 TerminalFrame

터미널 프레임 UI (title bar + body). LoadingScreen, NotFoundPage에서 중복 마크업 제거.

```jsx
<TerminalFrame title="bash — 404">
  <div>...</div>
</TerminalFrame>
```

Props:
- `title: string` — 타이틀 바 텍스트
- `className?: string` — 추가 클래스
- `children` — 본문 콘텐츠

### 4.2 PromptLine

터미널 프롬프트 한 줄. 모든 페이지에서 `$ command` 표시에 사용.

```jsx
<PromptLine path="~/posts/개발/백엔드" command='cat "JWT 인증.md"' />
```

Props:
- `path?: string` — 경로 (기본 `~`)
- `command: string` — 명령어 텍스트
- `className?: string`

### 4.3 OutputBox

터미널 출력 영역. surface bg + dashed border + green left accent.

```jsx
<OutputBox>{children}</OutputBox>
```

### 4.4 DashedDivider

섹션 구분선.

```jsx
<DashedDivider />
```

---

## 5. 테마 시스템 (P1)

### 5.1 토큰 구조

`tokens.css`에 5개 테마 정의. `data-theme` 속성으로 전환.

| 테마 | data-theme 값 | 계열 |
|------|---------------|------|
| Dracula | `dracula` (기본 다크) | 다크 |
| Nord | `nord` | 다크 |
| Tokyo Night | `tokyo-night` | 다크 |
| GitHub Light | `github-light` | 라이트 |
| Catppuccin Latte | `catppuccin-latte` | 라이트 |

### 5.2 ThemeContext 변경

```
Before: { theme: 'dark'|'light', toggleTheme() }
After:  { theme: string, setTheme(name), themes: string[] }
```

- `localStorage` 키: `theme` (테마 이름 저장)
- 시스템 설정 fallback: `prefers-color-scheme: dark` → `dracula`, light → `github-light`

### 5.3 ThemeToggle → ThemeDropdown

헤더의 ☽/☀ 토글을 5개 테마 드롭다운으로 교체.

### 5.4 highlight.js 테마 연동

`PostDetailPage`에서 테마 변경 시 highlight.js CSS 동적 교체.

### 5.5 @keyframes 통합

현재 3곳에 분산된 `@keyframes blink` → `animations.css`로 통합.

---

## 6. WindowShell 분리 (P2)

WindowShell 내부를 플랫폼별 렌더 패스로 분리:

### Desktop (기존)
- macOS traffic lights (닫기/최소화/전체화면)
- 타이틀바 드래그로 위치 이동
- 우하단 핸들로 리사이즈
- 더블클릭 전체화면 토글

### Mobile (바텀시트)
- 드래그 핸들 (pill) + 타이틀만 (traffic lights 없음)
- 스와이프 업/다운: 50vh ↔ 100vh ↔ 닫기 (25vh 이하)
- 배경 탭 → 닫기
- body scroll lock

---

## 7. TerminalEngine 모듈화 (P3)

현재 ~55KB 단일 파일 → 기능별 모듈 분할:

| 모듈 | 책임 |
|------|------|
| `TerminalEngine.js` | 코어: 명령 파싱, 히스토리, I/O, 명령 라우팅 |
| `virtual-fs.js` | 파일시스템 트리 구조, 경로 해석, posts/ 자동 생성 |
| `fs-commands.js` | ls, cd, cat, pwd, grep |
| `system-commands.js` | clear, help, whoami, echo, theme, neofetch, history |
| `nav-commands.js` | open (라우터 연동) |
| `game-commands.js` | 게임 실행 (cmatrix, pipes, sl, snake, 2048, blocks) |

---

## 8. 구현 Phase

| Phase | 작업 | 파일 | 상태 |
|-------|------|------|------|
| **P0** | 공통 컴포넌트 추출 | TerminalFrame, PromptLine, OutputBox, DashedDivider | **완료** |
| **P1** | 5-테마 시스템 | tokens.css, ThemeContext, ThemeToggle→Dropdown, animations.css 통합 | **완료** |
| **P2** | 404 페이지 재작성 | NotFoundPage → prompt+output 스타일 (TerminalFrame 제거, FEATURE-SPEC 통일) | **완료** |
| **P3** | About 페이지 재작성 | AboutPage → man page 스타일 | **완료** |
| **P4** | Posts 페이지 개선 | 검색 프롬프트, 정렬 드롭다운, PostDetail 프롬프트 | **완료** |
| **P5** | TerminalEngine 모듈화 | 55KB → 6개 모듈 분할 | 대기 |
| **P6** | 모바일 전체 검증 | 반응형 점검, 바텀시트 테스트 | 대기 |

---

## 9. 코딩 컨벤션

| 항목 | 규칙 |
|------|------|
| 컴포넌트 | PascalCase, 함수형, export default |
| Hook | `use` prefix, 하나의 관심사만 |
| 유틸 | camelCase, 순수 함수 |
| CSS 클래스 | BEM-light: `.component-element` |
| import 순서 | react → 라이브러리 → context/hooks → components → utils → styles |
| Props | 구조분해 할당, children 활용 |
| 상태 | 로컬 UI → useState, 공유 → Context |
| 플랫폼 분기 | 컴포넌트 최상위 early return |
| CSS 파일 | 컴포넌트와 1:1, styles/ 하위에 위치 |

---

## 10. 변경하지 않는 것

- Home 페이지 구조 (테마 토큰만 교체)
- DesktopContext 리듀서/액션 구조
- 데이터 레이어 (PostService, PostUtil, Post 모델)
- 게임 컴포넌트 내부 로직
- Vite 빌드 설정

# 🐱 bak-libra26 개발 블로그

> 개발하는 고양이는, 줄여서 **개고양** — 백엔드·프론트엔드·모바일 개발 기록을 공유하는 개인 기술 블로그입니다.

🔗 **[bak-libra26.co.kr](https://bak-libra26.co.kr)**

---

## 📌 소개

개발하면서 배운 것들, 삽질한 것들, 그리고 아키텍처 고민들을 기록하는 공간입니다.  
React + Vite로 제작된 정적 블로그이며, GitHub Pages를 통해 배포됩니다.

---

## 🛠️ 기술 스택

| 구분 | 기술 |
|------|------|
| **프레임워크** | React 19 |
| **번들러** | Vite 7 |
| **라우팅** | React Router DOM v7 |
| **렌더링** | react-markdown + remark/rehype 파이프라인 |
| **애니메이션** | Framer Motion |
| **배포** | GitHub Pages (`gh-pages`) |
| **분석** | Google Analytics 4 (`react-ga4`) |

---

## 📂 프로젝트 구조

```
bak-libra26.github.io/
├── public/               # 정적 파일 (favicon, manifest 등)
├── src/
│   ├── assets/posts/     # 마크다운 블로그 포스트
│   │   ├── 개발/         # 백엔드·프론트엔드·DB·메시지큐 등
│   │   ├── 데브옵스/      # CI/CD, 서버 설정 등
│   │   └── 사이드 프로젝트/ # 개인 프로젝트 기록
│   ├── components/       # 재사용 UI 컴포넌트 (PostCard 등)
│   ├── layouts/          # 공통 레이아웃 (Header, Footer)
│   ├── pages/            # 페이지 컴포넌트 (Home, Posts, PostDetail)
│   ├── hooks/            # 커스텀 훅 (GA4 등)
│   ├── services/         # 외부 서비스 연동
│   ├── utils/            # 유틸리티 함수 (날짜, URL, 포스트 파싱 등)
│   └── styles/           # 컴포넌트별 CSS
└── vite.config.js
```

---

## ✍️ 포스트 카테고리

- **개발** — 백엔드, 프론트엔드, 데이터베이스, 메시지큐, 크로스플랫폼, 환경설정
- **데브옵스** — 서버 구성, 배포 파이프라인
- **사이드 프로젝트** — 개인 프로젝트 개발 과정

---

## 🚀 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

---

## 📄 포스트 작성 방법

포스트는 `src/assets/posts/` 디렉토리 하위에 **Markdown 파일**로 작성합니다.  
파일 상단에 YAML frontmatter를 사용해 메타데이터를 정의합니다.

```markdown
---
title: 포스트 제목
summary: 포스트 요약
createdDate: 2025-01-01
categories:
  - 개발
  - 백엔드
---

본문 내용...
```

---

## 📜 라이선스

개인 포트폴리오 및 기술 블로그 프로젝트입니다.  
포스트 내용은 저작권법의 보호를 받습니다. 무단 전재 및 재배포를 금합니다.

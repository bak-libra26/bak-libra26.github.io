/**
 * @file App.jsx - 애플리케이션 루트 컴포넌트
 *
 * 주요 책임:
 * 1. 페이지별 코드 스플리팅 (React.lazy)으로 초기 번들 크기를 최소화한다.
 * 2. Google Analytics 훅을 초기화하여 페이지뷰, 스크롤 깊이, 외부 링크 클릭을 추적한다.
 * 3. 로딩 화면 → 실제 콘텐츠 전환을 관리한다.
 * 4. ErrorBoundary로 전체 앱을 감싸 런타임 에러를 안전하게 처리한다.
 *
 * 라우트 구조:
 *   /           → HomePage (메인)
 *   /posts      → PostsPage (글 목록)
 *   /posts/*    → PostsResolver (글 상세 or 카테고리)
 *   /about      → AboutPage (소개)
 *   *           → NotFoundPage (404)
 */

import { lazy, Suspense, useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import useGoogleAnalytics, { useScrollDepth, useOutboundTracking } from './hooks/ga4/useGoogleAnalytics.jsx';

// lazy()로 각 페이지를 동적 import하여 번들을 분리한다.
// 사용자가 해당 라우트에 접근할 때만 해당 코드를 다운로드한다.
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const PostsPage = lazy(() => import('./pages/PostsPage.jsx'));
const PostsResolver = lazy(() => import('./components/PostsResolver.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

/**
 * App - 루트 컴포넌트
 *
 * GA4 추적 훅들을 최상위에서 한 번만 초기화하고,
 * 로딩 화면 표시 여부를 상태로 관리한다.
 */
function App() {
  // GA4: 페이지뷰 추적, 스크롤 깊이 추적, 외부 링크 클릭 추적
  useGoogleAnalytics();
  useScrollDepth();
  useOutboundTracking();

  // 초기 로딩 화면 표시 상태 (true → 로딩 중, false → 콘텐츠 표시)
  const [showLoading, setShowLoading] = useState(true);

  // 로딩 애니메이션 완료 시 호출되는 콜백
  const handleLoadingDone = useCallback(() => {
    setShowLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      {/* 로딩 화면: 완료되면 자동으로 숨겨진다 */}
      {showLoading && <LoadingScreen onDone={handleLoadingDone} />}

      {/* Suspense: lazy 컴포넌트가 로드될 때까지 빈 배경을 fallback으로 표시한다 */}
      <Suspense fallback={<div style={{ minHeight: '100dvh', background: 'var(--bg)' }} aria-busy="true" />}>
        <Routes>
          {/* Layout은 Header/Main/Footer를 포함하는 공통 레이아웃이다 */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            {/* /posts/* 는 PostsResolver가 URL 패턴을 분석하여 카테고리 또는 상세 페이지를 결정한다 */}
            <Route path="/posts/*" element={<PostsResolver />} />
            <Route path="/about" element={<AboutPage />} />
            {/* 매칭되지 않는 모든 경로는 404 페이지로 이동한다 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

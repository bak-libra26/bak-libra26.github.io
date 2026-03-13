import { lazy, Suspense, useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import useGoogleAnalytics, { useScrollDepth, useOutboundTracking } from './hooks/ga4/useGoogleAnalytics.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const PostsPage = lazy(() => import('./pages/PostsPage.jsx'));
const PostsResolver = lazy(() => import('./components/PostsResolver.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  useGoogleAnalytics();
  useScrollDepth();
  useOutboundTracking();

  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingDone = useCallback(() => {
    setShowLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      {showLoading && <LoadingScreen onDone={handleLoadingDone} />}
      <Suspense fallback={<div style={{ minHeight: '100dvh', background: 'var(--bg)' }} />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/*" element={<PostsResolver />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

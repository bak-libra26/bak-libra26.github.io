/**
 * @file index.jsx - 애플리케이션 진입점 (Entry Point)
 *
 * React 앱의 최상위 렌더링을 담당한다.
 * Provider 계층 구조:
 *   BrowserRouter → ThemeProvider → ScrollToTop → App
 *
 * - BrowserRouter: 클라이언트 사이드 라우팅을 활성화한다.
 * - ThemeProvider: 다크/라이트 테마 상태를 전역으로 관리한다.
 * - ScrollToTop: 페이지 전환 시 스크롤 위치를 초기화한다.
 */

import { createRoot } from 'react-dom/client';

// 전역 CSS (리셋, 변수, 공통 스타일 등)
import './styles/base/global.css';

import App from './App.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';

// #root DOM 요소에 React 트리를 마운트한다.
// basename="/"는 루트 경로 기준으로 라우팅을 설정한다.
createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter basename="/">
      <ThemeProvider>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );

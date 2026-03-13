/**
 * @file Main - 페이지 본문 영역을 담당하는 레이아웃 컴포넌트
 *
 * React Router의 Outlet을 통해 현재 경로에 해당하는 페이지 컴포넌트를 렌더링하고,
 * 하단에 Google AdSense 인라인 광고 영역을 배치한다.
 *
 * @module layouts/Main
 */

import { Outlet } from 'react-router-dom';

import '../styles/layout/main.css';
import AdsenseAd from '../components/AdsenseAd.jsx';

/**
 * 메인 콘텐츠 영역 컴포넌트
 *
 * 컨테이너 안에 라우트별 페이지(Outlet)를 렌더링하고,
 * 그 아래에 AdSense 광고 슬롯을 배치한다.
 * 접근성을 위해 id="main-content"로 스킵 링크 대상이 된다.
 *
 * @returns {React.ReactElement} main 요소로 감싸진 본문 영역
 */
const Main = () => {
  return (
    <main id="main-content" className="main">
      <div className="container">
        <Outlet />
      </div>
      <div className="inline-promo">
        <AdsenseAd slot="1102442335" />
      </div>
    </main>
  );
};

export default Main;

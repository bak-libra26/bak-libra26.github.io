/**
 * @file NotFoundPage.jsx - 404 에러 페이지
 *
 * 존재하지 않는 경로에 접근했을 때 표시되는 페이지이다.
 * 터미널의 curl 명령어 스타일로 에러를 표현하고,
 * 홈(~)과 글 목록(/posts)으로의 네비게이션 링크를 제공한다.
 *
 * @exports NotFoundPage
 */

import { Link, useLocation } from 'react-router-dom';
import SeoHelper from '../components/SeoHelper.jsx';
import PromptLine from '../components/common/PromptLine.jsx';
import OutputBox from '../components/common/OutputBox.jsx';
import '../styles/pages/not-found/not-found-page.css';

const NotFoundPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <SeoHelper title="404 — sim.junghun" description="페이지를 찾을 수 없습니다." type="website" />
      <div className="not-found">
        <PromptLine command={`curl ${pathname}`} />
        <OutputBox>
          <div className="error-title">bash: 404: page not found</div>
          <div className="error-desc">요청하신 페이지가 존재하지 않거나 이동되었습니다.</div>
          <Link to="/" className="nav-link"><span className="prompt-dollar">$ </span>cd ~</Link>
          <Link to="/posts" className="nav-link"><span className="prompt-dollar">$ </span>cd /posts</Link>
        </OutputBox>
      </div>
    </>
  );
};

export default NotFoundPage;

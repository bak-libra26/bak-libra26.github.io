/**
 * @file PostsPage.jsx - 글 목록 페이지
 *
 * URL 패턴에 따라 카테고리/서브카테고리를 결정하고,
 * 사이드바(카테고리 트리)와 콘텐츠(글 목록)를 나란히 렌더링한다.
 *
 * URL 구조:
 *   /posts                        → 전체 글 목록
 *   /posts/{category}             → 특정 카테고리의 글 목록
 *   /posts/{category}/{sub}       → 특정 서브카테고리의 글 목록
 *   ?page=N                       → 페이지네이션
 *
 * @exports PostsPage
 */

import { useParams, useSearchParams } from 'react-router-dom';

import SeoHelper from '../components/SeoHelper.jsx';
import PostsSidebar from '../components/PostsSidebar.jsx';
import PostsContent from '../components/PostsContent.jsx';

import '../styles/pages/posts/posts-page.css';

/**
 * URI 컴포넌트를 안전하게 디코딩한다.
 * 잘못된 인코딩이 들어올 경우 원본 문자열을 그대로 반환한다.
 * @param {string} str - 디코딩할 문자열
 * @returns {string} 디코딩된 문자열
 */
const decodePathSafe = (str) => {
  try { return decodeURIComponent(str); } catch { return str; }
};

const PostsPage = () => {
  // wildcard: /posts/ 이후의 모든 경로 세그먼트를 캡처한다
  const { '*': wildcard } = useParams();
  const [searchParams] = useSearchParams();

  // 기본값: 카테고리 '전체', 서브카테고리 없음
  let category = '전체';
  let subcategory = null;

  // URL에서 카테고리/서브카테고리를 추출한다
  if (wildcard) {
    const decoded = decodePathSafe(wildcard);
    const segments = decoded.split('/').filter(Boolean);
    if (segments.length >= 1) category = segments[0];
    if (segments.length >= 2) subcategory = segments[1];
  }

  // 페이지 번호는 최소 1 이상을 보장한다
  const page = Math.max(Number(searchParams.get('page') || 1), 1);
  const params = { category, subcategory, page };

  // SEO 메타 정보: 카테고리에 따라 동적으로 타이틀/설명을 생성한다
  const seoTitle = category === '전체'
    ? 'Posts — sim.junghun'
    : subcategory
      ? `${category} / ${subcategory} — sim.junghun`
      : `${category} — sim.junghun`;

  const seoDesc = category === '전체'
    ? '블로그의 전체 글 목록입니다.'
    : subcategory
      ? `${category} > ${subcategory} 카테고리의 글 목록입니다.`
      : `${category} 카테고리의 글 목록입니다.`;

  const seoPath = category === '전체'
    ? '/posts'
    : subcategory
      ? `/posts/${encodeURIComponent(category)}/${encodeURIComponent(subcategory)}`
      : `/posts/${encodeURIComponent(category)}`;

  return (
    <>
      <SeoHelper
        title={seoTitle}
        description={seoDesc}
        path={seoPath}
        type="website"
      />
      <div className="posts-layout">
        <PostsSidebar params={params} />
        <PostsContent params={params} />
      </div>
    </>
  );
};

export default PostsPage;

/**
 * @file PostsResolver - URL 와일드카드 경로를 분석하여 적절한 페이지로 라우팅하는 컴포넌트
 *
 * `/posts/*` 경로에서 와일드카드 부분을 디코딩한 뒤,
 * 해당 경로가 실제 게시글과 일치하면 게시글 상세 페이지(PostDetailPage)를 렌더링하고,
 * 그렇지 않으면 게시글 목록 페이지(PostsPage)를 렌더링한다.
 */
import { useParams } from 'react-router-dom';
import PostUtil from '../utils/post-util.js';
import PostsPage from '../pages/PostsPage.jsx';
import PostDetailPage from '../pages/PostDetailPage.jsx';

/**
 * 게시글 경로 해석기 컴포넌트
 *
 * URL의 와일드카드(`*`) 파라미터를 디코딩하여 게시글 존재 여부를 판별하고,
 * 게시글이면 상세 페이지, 아니면 목록 페이지를 반환한다.
 * @returns {JSX.Element} PostDetailPage 또는 PostsPage
 */
const PostsResolver = () => {
  const { '*': wildcard } = useParams();
  let decoded;
  try { decoded = decodeURIComponent(wildcard); } catch { decoded = wildcard; }

  /** 디코딩된 경로로 게시글 검색 */
  const post = PostUtil.findByPath({ path: decoded });
  if (post) return <PostDetailPage />;

  /** 게시글이 아닌 경우 카테고리 목록 페이지로 처리 */
  return <PostsPage />;
};

export default PostsResolver;

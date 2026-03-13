import { useParams, useSearchParams } from 'react-router-dom';

import SeoHelper from '../components/SeoHelper.jsx';
import PostsSidebar from '../components/PostsSidebar.jsx';
import PostsContent from '../components/PostsContent.jsx';

import '../styles/pages/posts/posts-page.css';

/** Safely decode a URI component, returning the original string on failure. */
const decodePathSafe = (str) => {
  try { return decodeURIComponent(str); } catch { return str; }
};

const PostsPage = () => {
  const { '*': wildcard } = useParams();
  const [searchParams] = useSearchParams();

  let category = '전체';
  let subcategory = null;

  if (wildcard) {
    const decoded = decodePathSafe(wildcard);
    const segments = decoded.split('/').filter(Boolean);
    if (segments.length >= 1) category = segments[0];
    if (segments.length >= 2) subcategory = segments[1];
  }

  const page = Math.max(Number(searchParams.get('page') || 1), 1);
  const params = { category, subcategory, page };

  return (
    <>
      <SeoHelper
        title="Posts — sim.junghun"
        description="블로그의 전체 글 목록입니다."
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

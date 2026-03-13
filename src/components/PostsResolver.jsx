import { useParams } from 'react-router-dom';
import PostUtil from '../utils/post-util.js';
import PostsPage from '../pages/PostsPage.jsx';
import PostDetailPage from '../pages/PostDetailPage.jsx';

const PostsResolver = () => {
  const { '*': wildcard } = useParams();
  let decoded;
  try { decoded = decodeURIComponent(wildcard); } catch { decoded = wildcard; }

  // Check if path matches a post
  const post = PostUtil.findByPath({ path: decoded });
  if (post) return <PostDetailPage />;

  // Otherwise treat as category listing
  return <PostsPage />;
};

export default PostsResolver;

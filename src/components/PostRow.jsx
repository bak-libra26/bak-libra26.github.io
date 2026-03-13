import { memo } from 'react';
import { Link } from 'react-router-dom';
import HrefUtil from '../utils/href-util.js';
import DateUtil from '../utils/date-util.js';
import '../styles/components/post-row.css';

const PostRow = memo(({ post }) => {
  const lastCategory = post.categories[post.categories.length - 1];
  const date = DateUtil.formatLs(post.createdDate);

  return (
    <Link className="post-row" to={HrefUtil.getPostDetailHref({ path: post.path })}>
      <span className="pr-perm">-rw-r--r--</span>
      <span className="pr-owner">junghun</span>
      <span className="pr-cat">{lastCategory}</span>
      <span className="pr-size">{post.readingTime}min</span>
      <span className="pr-date">{date}</span>
      <div className="pr-title-cell">
        <span className="pr-title">{post.title}</span>
        {post.summary && <p className="pr-summary">{post.summary}</p>}
        {post.tags.length > 0 && (
          <div className="pr-tags">
            {post.tags.map((tag, i) => (
              <span key={tag} className={`tag${i === 0 ? ' tag--primary' : ''}`}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
});
PostRow.displayName = 'PostRow';

export default PostRow;

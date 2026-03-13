import { Link } from 'react-router-dom';
import PostUtil from '../utils/post-util.js';
import HrefUtil from '../utils/href-util.js';
import PostService from '../services/post-service.js';
import '../styles/pages/posts/posts-sidebar.css';

const PostsSidebar = ({ params }) => {
  return (
    <aside className="sidebar">
      <p className="sidebar-label">categories</p>
      <ul className="sidebar-tree">
        <li>
          <Link
            to={HrefUtil.getPostsHref({ page: 1, category: '전체' })}
            data-active={params.category === '전체'}
          >
            전체 <span className="count">{PostUtil.posts.length}</span>
          </Link>
        </li>
        {PostService.getCategories().map((category) => (
          <li key={category}>
            <Link
              to={HrefUtil.getPostsHref({ page: 1, category })}
              data-active={params.category === category && !params.subcategory}
            >
              {category} <span className="count">{PostService.countByCategory({ category })}</span>
            </Link>
            <ul className="sub">
              {PostService.getSubcategories({ category }).map((subcategory, i, arr) => (
                <li key={subcategory} className={i === arr.length - 1 ? 'last' : ''}>
                  <Link
                    to={HrefUtil.getPostsHref({ page: 1, category, subcategory })}
                    data-active={params.subcategory === subcategory}
                  >
                    {subcategory}{' '}
                    <span className="count">
                      {PostService.countByCategoryAndSubcategory({ category, subcategory })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PostsSidebar;

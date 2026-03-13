/**
 * @file PostsSidebar - 게시글 목록 페이지의 카테고리 사이드바 컴포넌트
 *
 * 전체 카테고리 및 하위 카테고리를 트리 구조로 렌더링하며,
 * 각 카테고리 옆에 해당 카테고리의 게시글 수를 표시한다.
 * 현재 선택된 카테고리는 `data-active` 속성으로 하이라이트된다.
 */
import { Link } from 'react-router-dom';
import PostUtil from '../utils/post-util.js';
import HrefUtil from '../utils/href-util.js';
import PostService from '../services/post-service.js';
import '../styles/pages/posts/posts-sidebar.css';

/**
 * 카테고리 사이드바 컴포넌트
 * @param {Object} props
 * @param {Object} props.params - 현재 URL에서 파싱한 카테고리/서브카테고리 파라미터
 * @param {string} props.params.category - 현재 선택된 상위 카테고리
 * @param {string} [props.params.subcategory] - 현재 선택된 하위 카테고리 (선택적)
 * @returns {JSX.Element} 카테고리 트리 사이드바
 */
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

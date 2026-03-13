import { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostUtil from '../utils/post-util.js';
import HrefUtil from '../utils/href-util.js';
import PostRow from './PostRow.jsx';
import { trackSearch } from '../hooks/ga4/useGoogleAnalytics.jsx';

const SORT_OPTIONS = [
  { id: '-t', label: '-t (time)' },
  { id: '-S', label: '-S (size)' },
  { id: 'name', label: '-n (name)' },
];

const PostsContent = ({ params }) => {
  const { page, category, subcategory } = params;
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('-t');

  const size = 10;
  const start = (page - 1) * size;

  const allPosts = useMemo(() => PostUtil.findBy({ category, subcategory }), [category, subcategory]);

  const filtered = useMemo(() => {
    let posts = allPosts;

    // Search filter
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      posts = posts.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sort === '-S') {
      posts = [...posts].sort((a, b) => (b.readingTime || 0) - (a.readingTime || 0));
    } else if (sort === 'name') {
      posts = [...posts].sort((a, b) => a.title.localeCompare(b.title, 'ko'));
    }
    // -t is default order (time, already sorted from PostUtil)

    return posts;
  }, [allPosts, search, sort]);

  const last = Math.max(1, Math.ceil(filtered.length / size));
  const displayPosts = filtered.slice(start, start + size);

  const displayPath = subcategory
    ? `~/posts/${category}/${subcategory}`
    : category === '전체'
      ? '~/posts'
      : `~/posts/${category}`;

  const searchTimer = useRef(null);

  // Clean up search debounce timer on unmount
  useEffect(() => {
    return () => clearTimeout(searchTimer.current);
  }, []);

  const handleSearch = useCallback((e) => {
    const value = e.target.value;
    setSearch(value);
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => trackSearch(value), 800);
  }, []);

  const placeholder = '검색어를 입력하세요...';

  return (
    <div className="posts-panel">
      {/* Search */}
      <div className="posts-search">
        <span className="path">{displayPath}</span>
        <span className="dollar">$</span>
        <span className="cmd">grep</span>
        <div className="posts-search__input-wrap">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder={placeholder}
            spellCheck={false}
            autoComplete="off"
            aria-label="포스트 검색"
          />
          <span className="posts-search__ghost">{search || placeholder}</span>
          {!search && <span className="cursor-blink">█</span>}
        </div>
      </div>

      {/* Sort */}
      <div className="posts-sort">
        <span>sort:</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="포스트 정렬 기준">
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.id} value={opt.id}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* List */}
      <div className="pp-list">
        {displayPosts.map((post) => (
          <PostRow key={post.path} post={post} />
        ))}
        {displayPosts.length === 0 && (
          <div className="pp-empty">no posts in this directory</div>
        )}
      </div>

      {/* Pagination */}
      {last > 1 && <PostNavigation params={params} last={last} />}
    </div>
  );
};

const PostNavigation = ({ params, last }) => {
  const curr = params.page;
  const { category, subcategory } = params;

  const start = Math.max(2, curr - 2);
  const end = Math.min(last - 1, curr + 2);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <nav className="pp-pagination" aria-label="Posts pages">
      {curr > 1 && (
        <Link className="pp-page pp-nav" to={HrefUtil.getPostsHref({ page: curr - 1, category, subcategory })}>
          &lsaquo; prev
        </Link>
      )}
      <Link className={`pp-page${curr === 1 ? ' pp-active' : ''}`} to={HrefUtil.getPostsHref({ page: 1, category, subcategory })}>1</Link>
      {start > 2 && <span className="pp-ellipsis">&hellip;</span>}
      {pages.map((p) => (
        <Link key={p} className={`pp-page${p === curr ? ' pp-active' : ''}`} to={HrefUtil.getPostsHref({ page: p, category, subcategory })}>{p}</Link>
      ))}
      {end < last - 1 && <span className="pp-ellipsis">&hellip;</span>}
      {last > 1 && (
        <Link className={`pp-page${curr === last ? ' pp-active' : ''}`} to={HrefUtil.getPostsHref({ page: last, category, subcategory })}>{last}</Link>
      )}
      {curr < last && (
        <Link className="pp-page pp-nav" to={HrefUtil.getPostsHref({ page: curr + 1, category, subcategory })}>
          next &rsaquo;
        </Link>
      )}
    </nav>
  );
};

export default PostsContent;

/**
 * @file PostsContent.jsx - 글 목록 패널 컴포넌트
 *
 * 카테고리/서브카테고리 기준으로 글을 조회하고,
 * 검색 필터링, 정렬, 페이지네이션 기능을 제공한다.
 *
 * 터미널 스타일 UI:
 *   - 검색: grep 명령어 형태의 검색바
 *   - 정렬: -t (시간순), -S (크기=읽기시간순), -n (이름순)
 *   - 목록: PostRow 컴포넌트로 ls -l 형태 표시
 *   - 페이지네이션: 페이지당 10개, 현재 페이지 +-2 범위 표시
 *
 * @exports PostsContent
 */

import { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostUtil from '../utils/post-util.js';
import HrefUtil from '../utils/href-util.js';
import PostRow from './PostRow.jsx';
import AdsenseAd from './AdsenseAd.jsx';
import { trackSearch } from '../hooks/ga4/useGoogleAnalytics.jsx';

/** 인피드 광고가 삽입될 글 목록 내 위치 (0-indexed, 5번째 글 뒤) */
const AD_INSERT_INDEX = 4;

// 정렬 옵션: ls 명령어의 플래그를 모방한다
const SORT_OPTIONS = [
  { id: '-t', label: '-t (time)' },     // 시간순 (기본값, PostUtil의 기본 정렬)
  { id: '-S', label: '-S (size)' },      // 크기순 (readingTime 기준)
  { id: 'name', label: '-n (name)' },    // 이름순 (한국어 로케일)
];

/**
 * PostsContent - 글 목록 메인 패널
 * @param {Object} params - { page, category, subcategory }
 */
const PostsContent = ({ params }) => {
  const { page, category, subcategory } = params;
  const [search, setSearch] = useState('');  // 검색어 상태
  const [sort, setSort] = useState('-t');    // 현재 정렬 기준

  const size = 10;                // 페이지당 표시할 글 수
  const start = (page - 1) * size; // 현재 페이지의 시작 인덱스

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
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder={placeholder}
          spellCheck={false}
          autoComplete="off"
          aria-label="포스트 검색"
        />
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
        {displayPosts.map((post, i) => (
          <div key={post.path}>
            <PostRow post={post} />
            {/* 5번째 글 뒤에 인피드 광고 삽입 (글이 6개 이상일 때만) */}
            {i === AD_INSERT_INDEX && displayPosts.length > AD_INSERT_INDEX + 1 && (
              <div className="pp-infeed-ad">
                <AdsenseAd slot="7492590861" format="fluid" />
              </div>
            )}
          </div>
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

/**
 * PostNavigation - 페이지네이션 컴포넌트
 * 현재 페이지를 중심으로 앞뒤 2페이지를 표시하고,
 * 범위 밖의 페이지는 말줄임표(...)로 표시한다.
 * @param {Object} params - { page, category, subcategory }
 * @param {number} last - 마지막 페이지 번호
 */
const PostNavigation = ({ params, last }) => {
  const curr = params.page;
  const { category, subcategory } = params;

  const start = Math.max(2, curr - 2);
  const end = Math.min(last - 1, curr + 2);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i).filter((p) => p !== 1 && p !== last);

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

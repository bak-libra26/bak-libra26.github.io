/**
 * @file SeriesNav.jsx - 시리즈 네비게이션 컴포넌트
 *
 * 동일 서브카테고리에 속한 글들을 시리즈로 묶어 표시한다.
 * 시리즈에 글이 2개 이상일 때만 렌더링된다.
 *
 * 기능:
 *   - 접기/펼치기 토글
 *   - 현재 글 위치 표시 (번호, 화살표, "현재" 레이블)
 *   - 읽은 글(과거)에 체크마크, 미래 글은 흐리게 표시
 *   - 이전/다음 글 네비게이션 버튼
 *
 * @exports SeriesNav
 */

import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import HrefUtil from '../utils/href-util.js';
import PostService from '../services/post-service.js';
import '../styles/components/series-nav.css';

/**
 * SeriesNav - 시리즈 네비게이터
 * @param {Object} post - 현재 글의 Post 객체
 */
const SeriesNav = memo(({ post }) => {
  const [open, setOpen] = useState(true);
  const seriesPosts = PostService.findSeriesPosts({ post });

  if (seriesPosts.length <= 1) return null;

  const currentIndex = seriesPosts.findIndex((p) => p.path === post.path);
  const seriesTitle = post.categories[post.categories.length - 1];
  const prevPost = currentIndex > 0 ? seriesPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < seriesPosts.length - 1 ? seriesPosts[currentIndex + 1] : null;

  return (
    <nav className={`series-nav${open ? '' : ' collapsed'}`}>
      <button
        type="button"
        className="series-nav__header"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <div>
          <span className="label">SERIES</span>
          <span className="title">&middot; {seriesTitle}</span>
          <span className="count">({currentIndex + 1}/{seriesPosts.length})</span>
        </div>
        <span className="arrow">&#9662;</span>
      </button>

      {open && (
        <>
          <div className="series-nav__list">
            {seriesPosts.map((p, i) => {
              const isCurrent = p.path === post.path;
              const isPast = i < currentIndex;
              const isFuture = i > currentIndex;
              const cls = isCurrent ? ' active' : isFuture ? ' future' : '';
              return (
                <Link
                  key={p.path}
                  to={HrefUtil.getPostDetailHref({ path: p.path })}
                  className={`series-nav__item${cls}`}
                >
                  <span className="num">{i + 1}.</span>
                  {isPast && <span className="check">&#10003;</span>}
                  {isCurrent && <span className="current-marker">&rarr;</span>}
                  {isFuture && <span style={{ minWidth: 16 }} />}
                  <span>{p.title}{isCurrent ? ' (현재)' : ''}</span>
                </Link>
              );
            })}
          </div>
          <div className="series-nav__footer">
            {prevPost ? (
              <Link to={HrefUtil.getPostDetailHref({ path: prevPost.path })}>
                &larr; prev
              </Link>
            ) : (
              <span className="disabled">&larr; prev</span>
            )}
            {nextPost ? (
              <Link to={HrefUtil.getPostDetailHref({ path: nextPost.path })}>
                next &rarr;
              </Link>
            ) : (
              <span className="disabled">next &rarr;</span>
            )}
          </div>
        </>
      )}
    </nav>
  );
});
SeriesNav.displayName = 'SeriesNav';

export default SeriesNav;

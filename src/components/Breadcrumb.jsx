/**
 * @file Breadcrumb.jsx - 카테고리 경로 탐색(빵부스러기) 컴포넌트
 *
 * 글 상세 페이지 상단에 카테고리 계층을 표시한다.
 * 마지막 카테고리는 현재 위치(텍스트)로, 나머지는 링크로 렌더링한다.
 *
 * 예시: 개발 / 백엔드 / 스프링
 *       (링크)  (링크)   (텍스트)
 *
 * @exports Breadcrumb
 */

import { memo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/breadcrumb.css';

/** Breadcrumb - 카테고리 경로를 누적(cumulative) 방식으로 링크를 생성한다 */
const Breadcrumb = memo(({ categories }) => {
  return (
    <nav className="detail-breadcrumb">
      {categories.map((cat, i) => {
        const isLast = i === categories.length - 1;
        // Build cumulative path: /posts/개발/백엔드/스프링
        const path = '/posts/' + categories.slice(0, i + 1).join('/');
        return (
          <span key={`${i}-${cat}`}>
            {i > 0 && <span className="sep">/</span>}
            {isLast ? (
              <span className="current">{cat}</span>
            ) : (
              <Link to={path}>{cat}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
});
Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;

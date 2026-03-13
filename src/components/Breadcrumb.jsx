import { memo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/breadcrumb.css';

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

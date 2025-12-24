import React from 'react';
import { useNavigate } from 'react-router-dom';

import { posts } from '../utils/posts';

import { formatDate } from '../utils/dateFormatter';
import PostCard from '../components/PostCard';

function Home() {
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <main className="container page-container" style={{ marginTop: '48px', flex: 1 }}>
      <title>Dev | baklibra26</title>
      <meta name="description" content="2년차 백엔드 개발자로서, 공부한 것을 정리한 블로그입니다." />
      <meta property="og:title" content="Dev | baklibra26" />
      <meta property="og:description" content="2년차 백엔드 개발자로서, 공부한 것을 정리한 블로그입니다." />

      {/* Hero Section - Modern & Minimal */}
      <section className="hero flex flex-col justify-between" style={{ marginBottom: '72px', minHeight: '20vh' }}>
        <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{
            display: 'inline-block',
            marginBottom: '24px',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            color: 'var(--color-accent-wood)',
            fontWeight: 600,
            textTransform: 'uppercase'
          }}>
            개발 블로그
          </span>
          <h1 style={{ marginBottom: '32px' }}>
            개발하는 고양이는<br />
            <span className="text-serif" style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>줄여서 개고양</span>
          </h1>
          <p className="text-serif" style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
            개고냐옹냐옹<br />
          </p>
        </div>

      </section>

      {/* Blog List Section */}
      <section className="blog-list">
        <div className="flex justify-between items-end" style={{ maxWidth: '992px', width: '100%', margin: '0 auto 24px', padding: '0' }}>
          <h2 style={{ margin: 0 }}>최신 글</h2>
          <a href="/posts" style={{ fontSize: '0.9rem', fontWeight: 600, textDecoration: 'underline' }}>전체 보기</a>
        </div>

        <div className="posts-grid">
          {posts.slice(0, 6).map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .page-container h1 {
            font-size: 2rem !important;
          }

          .page-container h2 {
            font-size: 1.5rem !important;
          }

          .page-container p {
            font-size: 0.95rem !important;
          }

          /* "개발 블로그" 태그 (첫 번째 span) 타겟팅 구체화 */
          .page-container .hero > div > span {
            font-size: 0.8rem !important;
          }
          
          /* "줄여서 개고양" 타겟팅 및 스타일 보정 */
          .page-container .hero h1 span {
            display: block; /* 모바일에서 줄바꿈 */
            margin-top: 8px;
            font-size: 1.45rem !important; /* 크기 키움 */
          }

        }
      `}</style>
    </main>
  );
}

export default Home;

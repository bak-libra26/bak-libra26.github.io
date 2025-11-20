import React from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';

function Home() {
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <main className="container" style={{ flex: 1, paddingTop: '120px' }}>
      {/* Hero Section - Modern & Minimal */}
      <section className="hero flex flex-col justify-between" style={{ marginBottom: '120px', minHeight: '40vh' }}>
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
            baklibra26의 블로그
          </span>
          <h1 style={{ marginBottom: '32px' }}>
            import note;<br />
            <span className="text-serif" style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>import pen;</span>
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            적어두지 않으면 까먹습니다.<br />
          </p>
        </div>
        
        {/* Subtle Hanok Touch - Vertical Text as Accent */}
        <div style={{ 
          position: 'absolute', 
          right: '5%', 
          top: '30%', 
          writingMode: 'vertical-rl', 
          textOrientation: 'mixed',
          fontFamily: 'var(--font-serif)',
          fontSize: '1rem',
          color: 'rgba(0,0,0,0.1)',
          letterSpacing: '1em',
          userSelect: 'none'
        }}>
          日日是好日
        </div>
      </section>

      {/* Blog List Section */}
      <section className="blog-list">
        <div className="flex justify-between items-end" style={{ marginBottom: '40px' }}>
          <h2 style={{ margin: 0 }}>최신 글</h2>
          <a href="/posts" style={{ fontSize: '0.9rem', fontWeight: 600, textDecoration: 'underline' }}>전체 보기</a>
        </div>
        
        <div className="posts-grid">
          {posts.map(post => (
            <article 
              key={post.id} 
              className="card post-card" 
              style={{ cursor: 'pointer' }}
              onClick={() => handlePostClick(post.id)}
            >
              <div className="flex justify-between items-center" style={{ marginBottom: '24px' }}>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: 700, 
                  color: 'var(--color-accent-wood)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#999' }}>{post.date}</span>
              </div>
              <h3 style={{ marginBottom: '16px', fontSize: '1.4rem' }}>{post.title}</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                {post.summary}
              </p>
              <div className="hanok-accent-line" style={{ marginTop: 'auto', width: '24px', height: '2px', backgroundColor: '#eee' }}></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../utils/posts';

import { Helmet } from 'react-helmet-async';

function PostDetail() {
  const params = useParams();
  // The wildcard param is stored in `*`.
  // We need to decode it just in case, though React Router usually does.
  const id = params['*'];
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Post not found</h2>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <main className="container" style={{ flex: 1, paddingTop: '120px', paddingBottom: '80px' }}>
      <Helmet>
        <title>{post.title} | DevKat</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
      </Helmet>

      <button
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        ← Back to Home
      </button>

      <article style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ marginBottom: '60px', textAlign: 'center' }}>
          <div style={{
            fontSize: '0.9rem',
            color: 'var(--color-accent-wood)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '16px'
          }}>
            {post.category}
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', wordBreak: 'keep-all' }}>{post.title}</h1>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            {post.date}
          </div>
        </header>

        <div className="markdown-content">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </div>

        <div style={{
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-text-muted)',
            marginBottom: '20px'
          }}>
            Thanks for reading.
          </div>
        </div>
      </article>
    </main>
  );
}

export default PostDetail;

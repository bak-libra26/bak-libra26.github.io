import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '../utils/posts';

// Components
import NotFound from '../components/NotFound';
import PostHeader from '../components/PostHeader';
import PostContent from '../components/PostContent';
import PostFooter from '../components/PostFooter';
import TableOfContents from '../components/TableOfContents';

function PostDetail() {
  const params = useParams();
  const id = params['*'];
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className="container" style={{ flex: 1, paddingTop: '120px', paddingBottom: '80px', position: 'relative' }}>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:url" content={`https://bak-libra26.github.io/posts/${post.id}`} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.summary} />
        <link rel="canonical" href={`https://bak-libra26.github.io/posts/${post.id}`} />
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
        ← 돌아가기
      </button>

      {/* Flex Container for Article + Sidebar */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>

        {/* Main Article Content */}
        <article style={{ flex: 1, maxWidth: '800px', width: '100%', minWidth: 0 }}>
          <PostHeader
            title={post.title}
            category={post.category}
            date={post.date}
          />

          <PostContent content={post.content} />

          <PostFooter />
        </article>

        {/* Sidebar TOC - Visible only on Desktop via CSS */}
        <TableOfContents content={post.content} />
      </div>
    </main>
  );
}

export default PostDetail;

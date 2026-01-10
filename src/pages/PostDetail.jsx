import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { posts } from '../utils/posts';

// Components
import NotFound from '../components/NotFound';
import PostHeader from '../components/PostHeader';
import PostContent from '../components/PostContent';
import PostFooter from '../components/PostFooter';
import TableOfContents from '../components/TableOfContents';
import Giscus from '../components/Giscus';

function PostDetail() {
  // ... existing code ...
  const params = useParams();
  const id = params['*'];
  const navigate = useNavigate();
  const post = posts.find(p => p.id === (id ? id.normalize('NFC') : ''));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className="container page-container" style={{ marginTop: '48px', flex: 1, position: 'relative' }}>
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

        {/* Main Article Content Wrapper */}
        <div style={{ width: '100%', maxWidth: '800px', minWidth: 0 }}>
          <article>
            <PostHeader
              title={post.title}
              category={post.category}
              date={post.date}
            />

            <PostContent content={post.content} postId={post.id} />

            <PostFooter />
          </article>

          {/* Comments Section */}
          <Giscus />
        </div>

        {/* Sidebar TOC - Visible only on Desktop via CSS */}
        <TableOfContents content={post.content} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          /* Prevent horizontal overflow on mobile */
          article {
            max-width: 100vw;
            overflow-x: hidden;
          }

          .post-title {
            font-size: 2rem !important;
          }

          .post-category {
            font-size: 0.8rem !important;
          }

          .post-date {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </main>
  );
}

export default PostDetail;

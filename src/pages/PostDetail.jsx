import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../utils/posts';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        <title>{post.title}</title>
        <meta name="description" content={post.summary} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:url" content={`https://bak-libra26.github.io/posts/${post.id}`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.summary} />

        {/* Canonical */}
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
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <div style={{
                    margin: '2rem 0',
                    borderRadius: 'var(--border-radius)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    backgroundColor: '#1e1e1e'
                  }}>
                    {/* Mac-style Window Header */}
                    <div style={{
                      background: '#1e1e1e',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      borderBottom: '1px solid #333'
                    }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                      </div>
                      <div style={{
                        flex: 1,
                        textAlign: 'center',
                        color: '#888',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 500,
                        userSelect: 'none'
                      }}>
                        {match[1] ? match[1].toUpperCase() : 'CODE'}
                      </div>
                    </div>

                    {/* Code Content */}
                    <div style={{ position: 'relative' }}>
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        showLineNumbers={true}
                        wrapLines={true}
                        wrapLongLines={true} // Enable component-level support for wrapping
                        lineNumberStyle={{
                          minWidth: '3em',
                          paddingRight: '1.5em',
                          textAlign: 'right',
                          color: '#6e7681',
                          borderRight: '1px solid #333',
                          marginRight: '1.5em',
                          backgroundColor: '#1e1e1e',
                          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                          fontSize: '14px',
                          lineHeight: '1.6'
                        }}
                        customStyle={{
                          margin: 0,
                          borderRadius: 0,
                          fontSize: '14px',
                          lineHeight: '1.6',
                          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                          padding: '24px 24px 24px 0',
                          background: '#1e1e1e',
                          border: 'none',
                          overflowX: 'hidden', // Hide horizontal scroll since we are wrapping
                          color: '#ffffff'
                        }}
                        codeTagProps={{
                          style: {
                            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            whiteSpace: 'pre-wrap', // Allow wrapping
                            wordBreak: 'normal', // Do NOT break words like 'wget' arbitrarily
                            overflowWrap: 'anywhere', // Only break long strings if they simply don't fit the container width
                            backgroundColor: 'transparent',
                            color: '#ffffff',
                            display: 'block'
                          }
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                ) : (
                  <code className={className}
                    style={{
                      background: 'var(--color-bg-subtle)',
                      padding: '0.2em 0.4em',
                      borderRadius: '4px',
                      color: 'var(--color-accent-roof)',
                      fontSize: '0.9em',
                      fontFamily: '"Fira Code", "JetBrains Mono", Consolas, monospace'
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                );
              }
            }}
          >
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
      </article >
    </main >
  );
}

export default PostDetail;

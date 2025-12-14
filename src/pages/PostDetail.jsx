import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../utils/posts';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSlug from 'rehype-slug';
import { Helmet } from 'react-helmet-async';

import GithubSlugger from 'github-slugger';

function PostDetail() {
  const params = useParams();
  const id = params['*'];
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);
  const [activeId, setActiveId] = useState('');
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (post?.content) {
      const slugger = new GithubSlugger();
      // Extract headings for TOC
      const lines = post.content.split('\n');
      const extractedHeadings = [];
      lines.forEach(line => {
        const match = line.match(/^(#{1,3})\s+(.+)$/);
        if (match) {
          const level = match[1].length;
          const text = match[2];
          const slug = slugger.slug(text);
          extractedHeadings.push({ level, text, id: slug });
        }
      });
      setHeadings(extractedHeadings);
    }
  }, [post]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Post not found</h2>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
              rehypePlugins={[rehypeSlug]}
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

                      <div style={{ position: 'relative' }}>
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          showLineNumbers={true}
                          wrapLines={true}
                          wrapLongLines={true}
                          lineNumberStyle={{
                            minWidth: '3em',
                            paddingRight: '1em',
                            textAlign: 'right',
                            color: '#6e7681',
                            borderRight: '1px solid #333',
                            marginRight: '1em',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            backgroundColor: 'transparent',
                            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                            fontSize: '14px',
                            lineHeight: '1.6'
                          }}
                          lineProps={{
                            style: {
                              display: 'block',
                              position: 'relative',
                              paddingLeft: '4.5em',
                              wordBreak: 'break-all',
                              overflowWrap: 'anywhere',
                              whiteSpace: 'pre-wrap',
                              backgroundColor: 'transparent',
                            }
                          }}
                          customStyle={{
                            margin: 0,
                            borderRadius: 0,
                            fontSize: '14px',
                            lineHeight: '1.6',
                            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                            padding: '24px 0',
                            background: 'rgb(30, 30, 30)',
                            border: 'none',
                            overflowX: 'hidden',
                            color: '#ffffff'
                          }}
                          codeTagProps={{
                            style: {
                              fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                              fontSize: '14px',
                              lineHeight: '1.6',
                              color: '#ffffff',
                              display: 'block',
                              backgroundColor: 'transparent'
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
                        fontFamily: 'Menlo, Monaco, "Courier New", monospace'
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
              읽어주셔서 감사합니다.
            </div>
          </div>
        </article>

        {/* Sidebar TOC - Visible only on Desktop via CSS */}
        <aside className="toc-sidebar">
          <div style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--color-text-muted)',
            marginBottom: '16px'
          }}>
            On this page
          </div>
          <nav>
            {headings.map((heading, index) => (
              <a
                key={index}
                href={`#${heading.id}`}
                className={`toc-link h${heading.level} ${activeId === heading.id ? 'active' : ''}`}
                onClick={(e) => handleTocClick(e, heading.id)}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </main>
  );
}

export default PostDetail;

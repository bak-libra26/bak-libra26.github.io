import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeHighlightLines from 'rehype-highlight-code-lines';

import { useMemo, useCallback, useState, useRef, useEffect } from 'react';
import useDesktop from '../hooks/useDesktop.js';
import WindowShell from './WindowShell.jsx';
import ImageLightbox from './ImageLightbox.jsx';
import PostUtil from '../utils/post-util.js';
import DateUtil from '../utils/date-util.js';

import '../styles/components/post-reader.css';

const REMARK_PLUGINS = [remarkGfm];
const REHYPE_PLUGINS = [
  rehypeRaw,
  rehypeSlug,
  rehypeHighlight,
  [rehypeHighlightLines, { showLineNumbers: true, keepOuterBlankLine: true }],
];

const Heading = (Tag) => ({ children, ...props }) => (
  <Tag id={props.id} className="post-heading">{children}</Tag>
);

const PostReaderWindow = ({ windowId }) => {
  const desktop = useDesktop();
  const win = desktop.getWindow(windowId);
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  const postPath = win?.meta?.postPath;
  const post = useMemo(() => {
    if (!postPath) return null;
    return PostUtil.findByPath({ path: postPath });
  }, [postPath]);

  const handleClose = useCallback(() => {
    desktop.closeWindow(windowId);
  }, [desktop, windowId]);

  const handleOpenInPage = useCallback(() => {
    if (post) {
      window.open(`/posts/${post.path}`, '_blank');
    }
  }, [post]);

  const openLightbox = useCallback((src, alt) => {
    setLightbox({ open: true, src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, open: false }));
  }, []);

  const components = useMemo(() => {
    if (!post) return {};
    return {
      h1: Heading('h1'),
      h2: Heading('h2'),
      h3: Heading('h3'),
      h4: Heading('h4'),
      pre({ node, children }) {
        return <ReaderCode node={node}>{children}</ReaderCode>;
      },
      img({ src, alt }) {
        const imgSrc = (src.startsWith('http') || src.startsWith('/'))
          ? src
          : `/images/posts/${post.categories.join('/')}/${src}`;
        return (
          <img
            src={imgSrc}
            alt={alt}
            loading="lazy"
            style={{ cursor: 'zoom-in' }}
            onClick={() => openLightbox(imgSrc, alt)}
          />
        );
      },
    };
  }, [post, openLightbox]);

  if (!win || !post) return null;

  const titleExtra = (
    <button className="post-reader-open-btn" onClick={handleOpenInPage} title="페이지에서 열기">
      ↗
    </button>
  );

  return (
    <WindowShell
      windowId={windowId}
      title={post.title}
      titleExtra={titleExtra}
      onClose={handleClose}
      className="post-reader-window"
    >
      <div className="post-reader-content">
        {/* Meta */}
        <header className="post-reader-meta">
          <h1>{post.title}</h1>
          {post.tags && post.tags.length > 0 && (
            <div className="post-reader-tags">
              {post.tags.map((tag, i) => (
                <span key={tag} className={`tag${i === 0 ? ' primary' : ''}`}>{tag}</span>
              ))}
            </div>
          )}
          <div className="post-reader-info">
            <span>{DateUtil.formatISO(post.createdDate).slice(0, 10)}</span>
            <span>&middot;</span>
            <span>{post.readingTime} min read</span>
          </div>
        </header>

        {/* Body */}
        <div className="post-reader-body detail-body">
          <ReactMarkdown
            remarkPlugins={REMARK_PLUGINS}
            rehypePlugins={REHYPE_PLUGINS}
            components={components}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>

      <ImageLightbox
        src={lightbox.src}
        alt={lightbox.alt}
        open={lightbox.open}
        onClose={closeLightbox}
      />
    </WindowShell>
  );
};

const ReaderCode = ({ node, children }) => {
  const element = node?.children?.[0];
  const classes = element?.properties?.className || [];
  const match = /language-(\w+)/.exec(classes.join(' '));
  const language = match ? match[1] : 'plaintext';
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleCopy = () => {
    const text = element?.children?.map((c) => c.value || '').join('');
    if (text) {
      try {
        navigator.clipboard.writeText(text);
        setCopied(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setCopied(false), 2000);
      } catch { /* clipboard API unavailable */ }
    }
  };

  return (
    <figure className="post-detail__code">
      <figcaption className="post-detail__code-header">
        <span className="post-detail__code-language">{language}</span>
        <button className="post-detail__code-copy" onClick={handleCopy}>
          {copied ? 'copied!' : 'copy'}
        </button>
      </figcaption>
      <pre className="post-detail__code-block hljs">{children}</pre>
    </figure>
  );
};

export default PostReaderWindow;

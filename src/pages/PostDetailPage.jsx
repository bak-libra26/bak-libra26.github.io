import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from 'rehype-highlight';
import rehypeHighlightLines from 'rehype-highlight-code-lines';

import {useEffect, useRef, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {useScrollSpy} from "../hooks/useScrollSpy.js";

import PostUtil from "../utils/post-util.js";
import DateUtil from "../utils/date-util.js";
import MarkdownUtil from "../utils/markdown-util.js";

import SeoHelper from "../components/SeoHelper.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import SeriesNav from "../components/SeriesNav.jsx";
import HrefUtil from "../utils/href-util.js";

import '../styles/pages/post-detail/post-detail-page.css';
import '../styles/components/hljs-theme.css';
import AdsenseAd from "../components/AdsenseAd.jsx";
import { useReadTracking } from "../hooks/ga4/useGoogleAnalytics.jsx";

/** Safely decode a URI component, returning the original string on failure. */
const decodePathSafe = (str) => {
    try { return decodeURIComponent(str); } catch { return str; }
};

const PostDetailPage = () => {
    const { "*": path } = useParams();
    const decoded = decodePathSafe(path);
    const post = PostUtil.findByPath({path: decoded});
    useReadTracking(post?.title);

    if (!post) {
        return (
            <div className="post-detail post-detail--not-found">
                <p>요청하신 글을 찾을 수 없습니다.</p>
                <Link to="/posts">← 글 목록으로 돌아가기</Link>
            </div>
        );
    }

    const catPath = post.categories.join('/');

    return (
        <>
            <SeoHelper title={`${post.title} - bak-libra26`}
                       description={post.summary || `${post.title} — ${post.categories.join(' / ')}`}
                       path={`/posts/${post.path}`}
                       type="article"
                       publishedTime={post.createdDate}
                       modifiedTime={post.lastModifiedDate}
                       tags={post.tags} />

            <article className="post-detail">

                <section className="post-detail__article">
                    {/* Prompt line */}
                    <div className="prompt" style={{ marginBottom: '20px' }}>
                        <span className="path">~/posts/{catPath}</span>
                        <span className="dollar">$</span>
                        <span className="cmd">cat</span>
                        <span className="args">"{post.title}.md"</span>
                    </div>

                    <Breadcrumb categories={post.categories} />
                    <PostDetailMeta post={post} />

                    <hr className="dashed-divider" style={{ marginTop: 0 }} />

                    <SeriesNav post={post} />
                    <PostDetailBody post={post} />
                    <AdsenseAd slot="7492590861" />
                    <PostDetailRecommendList post={post} />
                    <PostDetailComment key={post.path} />
                </section>

                <aside className="post-detail__sidebar">
                    <PostDetailToc post={post} />
                </aside>

            </article>
        </>
    )
}

const PostDetailMeta = ({ post }) => {
    return (
        <header className="post-meta">
            <h1 className="post-detail__title">
                { post.title }
            </h1>

            {post.tags && post.tags.length > 0 && (
                <div className="post-detail__tags">
                    {post.tags.map((tag, i) => (
                        <span key={tag} className={`tag${i === 0 ? ' tag--primary' : ''}`}>{tag}</span>
                    ))}
                </div>
            )}

            <div className="post-detail__meta">
                <span>{DateUtil.formatISOShort(post.createdDate)}</span>
                <span className="sep">·</span>
                <span>{post.readingTime} min read</span>
            </div>
        </header>
    )
}


const PostDetailBody = ({ post }) => {
    return (
        <main className="detail-body">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                    rehypeRaw,
                    rehypeSlug,
                    rehypeHighlight,
                    [rehypeHighlightLines, { showLineNumbers: true, keepOuterBlankLine: true }],
                ]}
                components={{
                    h1({children, ...props}) {
                        return (<h1 id={props.id} className="post-heading post-heading__h1">{children}</h1>);
                    },
                    h2({children, ...props}) {
                        return (<h2 id={props.id} className="post-heading post-heading__h2">{children}</h2>);
                    },
                    h3({children, ...props}) {
                        return (<h3 id={props.id} className="post-heading post-heading__h3">{children}</h3>);
                    },
                    h4({children, ...props}) {
                        return (<h4 id={props.id} className="post-heading post-heading__h4">{children}</h4>);
                    },
                    blockquote({children}) {
                        return <Callout>{children}</Callout>;
                    },
                    pre({node, children }) {
                        return <Code node={node}>{children}</Code>
                    },
                    img({src, alt}) {
                        const imgSrc = (src.startsWith('http') || src.startsWith('/'))
                            ? src
                            : `/images/posts/${post.categories.join('/')}/${src}`;
                        return (<img src={imgSrc} alt={alt} loading="lazy" decoding="async"/>);
                    }
                }}>
                {post.content}
            </ReactMarkdown>
        </main>
    );
}

/**
 * Callout policy — blockquote → styled callout box:
 *
 *  TIP (green):     > ▸ TIP …   or  > Tips: …
 *  WARNING (yellow): > ⚠ WARNING … or > 주의: … or > **주의**: …
 *  INFO (blue):     > ℹ INFO …  or  > 참고: … or > (참고) …
 *  Otherwise:        default italic blockquote (gray border)
 */
const CALLOUT_PATTERNS = [
    { re: /^[▸►]\s*TIP|^Tips?:/i,                         type: 'tip',  icon: '▸', label: 'TIP' },
    { re: /^[⚠⚠️]\s*WARNING|^\*{0,2}주의\*{0,2}[\s:]/i,  type: 'warn', icon: '⚠', label: 'WARNING' },
    { re: /^[ℹℹ️]\s*INFO|^\(?참고\)?[\s:]/i,              type: 'info', icon: 'ℹ', label: 'INFO' },
];

const Callout = ({ children }) => {
    // Extract text from first child to detect callout type
    const firstChild = Array.isArray(children) ? children[0] : children;
    let textContent = '';
    if (firstChild?.props?.children) {
        const inner = firstChild.props.children;
        if (typeof inner === 'string') {
            textContent = inner.trim();
        } else if (Array.isArray(inner) && typeof inner[0] === 'string') {
            textContent = inner[0].trim();
        }
    }

    for (const { re, type, icon, label } of CALLOUT_PATTERNS) {
        if (re.test(textContent)) {
            // Remove the marker from content
            const restChildren = Array.isArray(children) ? children.slice(0) : [children];
            // Rebuild first paragraph without the marker line
            const first = restChildren[0];
            if (first?.props?.children) {
                const inner = first.props.children;
                let cleaned;
                if (typeof inner === 'string') {
                    cleaned = inner.replace(re, '').replace(/^\s*\n?/, '');
                } else if (Array.isArray(inner)) {
                    const newInner = [...inner];
                    if (typeof newInner[0] === 'string') {
                        newInner[0] = newInner[0].replace(re, '').replace(/^\s*\n?/, '');
                        if (newInner[0] === '') newInner.shift();
                    }
                    cleaned = newInner;
                }
                // If all content was in the marker, skip empty paragraph
                const hasContent = cleaned && (typeof cleaned === 'string' ? cleaned.trim() : cleaned.length > 0);
                return (
                    <div className={`callout callout--${type}`}>
                        <div className="callout__header">{icon} {label}</div>
                        {hasContent && <div className="callout__body">{cleaned}</div>}
                        {restChildren.slice(1)}
                    </div>
                );
            }
            return (
                <div className={`callout callout--${type}`}>
                    <div className="callout__header">{icon} {label}</div>
                    {restChildren.slice(1)}
                </div>
            );
        }
    }

    // Default blockquote
    return <blockquote>{children}</blockquote>;
};

const Code = ({ node, children }) => {
    const element = node?.children?.[0];
    const classes = element?.properties?.className || [];
    const match = /language-(\w+)/.exec(classes.join(' '));
    const language = match ? match[1] : 'plaintext';

    return (
        <figure className="post-detail__code">
            <figcaption className="post-detail__code-header">
                <span className="post-detail__code-language">
                    {language.toUpperCase()}
                </span>
            </figcaption>
            <pre className="post-detail__code-block hljs">
                {children}
            </pre>
        </figure>
    )
}

const PostDetailRecommendList= ({ post }) => {
    const recommends = PostUtil.findBy({
                                    category: post.categories[0],
                                    subcategory: post.categories[1]
                                })
                                .filter((recommend) => post !== recommend)
                                .slice(0, 5);

    if (recommends.length === 0) return null;

    return (
        <section className="related-posts">
            <div className="related-posts__title">related posts</div>
            <ul className="related-posts__list">
                {recommends.map((p, i) => {
                    const isLast = i === recommends.length - 1;
                    return (
                        <li key={p.path}>
                            <Link to={HrefUtil.getPostDetailHref({ path: p.path })} className="related-posts__item">
                                <span className="connector">{isLast ? '└' : '├'}</span>
                                <span>{p.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

const PostDetailToc = ({ post }) => {
    const toc = MarkdownUtil.toc({post: post});
    const activeId = useScrollSpy();

    const minLevel = toc.length > 0 ? Math.min(...toc.map((t) => t.level)) : 2;

    return (
        <aside className="post-detail__toc">
            <div className="toc__title">on this page</div>
            <nav className="toc__list">
                {toc.map((item) => {
                    const { level, text, slug } = item;
                    const depth = level - minLevel;
                    const isActive = slug === activeId;

                    return (
                        <a
                            key={slug}
                            href={`#${slug}`}
                            className={`toc__item${isActive ? ' active' : ''}`}
                            style={{ paddingLeft: `${12 + depth * 14}px` }}
                        >
                            {text}
                        </a>
                    );
                })}
            </nav>
        </aside>
    );
};

const PostDetailComment = () => {
    const ref = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!ref.current || ref.current.hasChildNodes()) return;

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.async = true;
        script.crossOrigin = 'anonymous';

        script.setAttribute('data-repo', 'bak-libra26/bak-libra26.github.io-comments');
        script.setAttribute('data-repo-id', 'R_kgDOQ2hXqw');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'DIC_kwDOQ2hXq84C0v_o');
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'top');
        script.setAttribute('data-theme', 'transparent_dark');
        script.setAttribute('data-lang', 'ko');
        script.setAttribute('data-loading', 'lazy');

        ref.current.appendChild(script);

        // Watch for giscus iframe to appear
        const observer = new MutationObserver(() => {
            if (ref.current?.querySelector('iframe.giscus-frame')) {
                setLoaded(true);
                observer.disconnect();
            }
        });
        observer.observe(ref.current, { childList: true, subtree: true });

        const timer = setTimeout(() => setLoaded(true), 10000);
        return () => { observer.disconnect(); clearTimeout(timer); };
    }, []);

    return (
        <div style={{ width: '100%', marginTop: '4rem' }}>
            {!loaded && (
                <div className="giscus-loading" style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
                    댓글 로딩 중...
                </div>
            )}
            <section ref={ref} />
        </div>
    );
}


export default PostDetailPage;

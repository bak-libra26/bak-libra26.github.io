/**
 * @file PostDetailPage.jsx - 블로그 글 상세 페이지
 *
 * 마크다운 파일을 파싱하여 렌더링하는 핵심 페이지이다.
 *
 * 주요 구성요소:
 *   - PostDetailMeta: 제목, 태그, 날짜, 읽기 시간 표시
 *   - PostDetailBody: 마크다운 → HTML 렌더링 (코드 하이라이팅, 이미지 라이트박스 포함)
 *   - PostDetailToc: 목차 (Table of Contents), 스크롤 스파이로 현재 위치 하이라이트
 *   - PostDetailRecommendList: 동일 카테고리의 관련 글 추천 (최대 5개)
 *   - PostDetailComment: Giscus 기반 댓글 시스템
 *   - Callout: blockquote를 TIP/WARNING/INFO 스타일 박스로 변환
 *   - Code: 코드 블록에 언어명 헤더를 추가
 *
 * 마크다운 플러그인 체인:
 *   remark-gfm (GFM 문법) → rehype-raw (HTML 허용) → rehype-slug (헤딩 ID)
 *   → rehype-highlight (코드 하이라이팅) → rehype-highlight-lines (라인 넘버)
 *
 * @exports PostDetailPage
 */

import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from 'rehype-highlight';
import rehypeHighlightLines from 'rehype-highlight-code-lines';

import {useEffect, useRef, useState, useCallback} from "react";
import {useParams, Link} from "react-router-dom";
import {useScrollSpy} from "../hooks/useScrollSpy.js";

import PostUtil from "../utils/post-util.js";
import DateUtil from "../utils/date-util.js";
import MarkdownUtil from "../utils/markdown-util.js";

import SeoHelper from "../components/SeoHelper.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import SeriesNav from "../components/SeriesNav.jsx";
import HrefUtil from "../utils/href-util.js";

import ImageLightbox from "../components/ImageLightbox.jsx";

import '../styles/pages/post-detail/post-detail-page.css';
import '../styles/components/hljs-theme.css';
import AdsenseAd from "../components/AdsenseAd.jsx";
import { useReadTracking } from "../hooks/ga4/useGoogleAnalytics.jsx";

/**
 * URI 컴포넌트를 안전하게 디코딩한다.
 * 한국어 경로가 이중 인코딩될 수 있으므로 디코딩 실패 시 원본을 반환한다.
 * @param {string} str - 디코딩할 문자열
 * @returns {string} 디코딩된 문자열
 */
const decodePathSafe = (str) => {
    try { return decodeURIComponent(str); } catch { return str; }
};

/**
 * PostDetailPage - 글 상세 페이지 메인 컴포넌트
 *
 * URL의 와일드카드 경로를 디코딩하여 해당 글을 찾고,
 * 존재하지 않으면 안내 메시지를, 존재하면 전체 글 상세 UI를 렌더링한다.
 */
const PostDetailPage = () => {
    // URL에서 /posts/ 이후의 전체 경로를 추출한다 (예: "개발/백엔드/글제목")
    const { "*": path } = useParams();
    const decoded = decodePathSafe(path);
    // 경로로 Post 객체를 조회한다
    const post = PostUtil.findByPath({path: decoded});
    // GA4: 글 읽기 시간 추적 (제목 기반)
    useReadTracking(post?.title);

    // 글 간 네비게이션 시 스크롤을 최상단으로 이동한다
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [decoded]);

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
                    <ErrorBoundary>
                        <PostDetailBody post={post} />
                    </ErrorBoundary>
                    <AdsenseAd slot="7492590861" />
                    <PostDetailRecommendList post={post} />
                    {/* 추천글과 댓글 사이 광고 */}
                    <AdsenseAd slot="1102442335" />
                    <PostDetailComment key={post.path} />
                </section>

                <aside className="post-detail__sidebar">
                    <PostDetailToc post={post} />
                    {/* 사이드바 하단 고정 광고 */}
                    <div className="post-detail__sidebar-ad">
                        <AdsenseAd slot="1102442335" />
                    </div>
                </aside>

            </article>
        </>
    )
}

/**
 * PostDetailMeta - 글 메타 정보 헤더
 * 제목, 태그 목록, 작성일, 읽기 시간을 표시한다.
 * 첫 번째 태그는 primary 스타일로 강조된다.
 */
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


/**
 * PostDetailBody - 마크다운 본문 렌더링 컴포넌트
 *
 * ReactMarkdown에 커스텀 컴포넌트를 주입하여 렌더링한다:
 *   - h1~h4: 커스텀 클래스를 적용하여 스크롤 스파이와 연동한다
 *   - blockquote: Callout 컴포넌트로 변환 (TIP/WARNING/INFO 감지)
 *   - pre: Code 컴포넌트로 감싸 언어명 헤더를 추가한다
 *   - img: 상대경로를 절대경로로 변환하고, 클릭 시 라이트박스를 연다
 *
 * @param {Object} props.post - Post 객체 (content, categories 등)
 */
const PostDetailBody = ({ post }) => {
    // 이미지 라이트박스 상태: { src, alt } 또는 null
    const [lightbox, setLightbox] = useState(null);
    const closeLightbox = useCallback(() => setLightbox(null), []);

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
                        return (
                            <img
                                src={imgSrc}
                                alt={alt}
                                loading="lazy"
                                decoding="async"
                                onClick={() => setLightbox({ src: imgSrc, alt })}
                                style={{ cursor: 'zoom-in' }}
                            />
                        );
                    }
                }}>
                {post.content}
            </ReactMarkdown>
            <ImageLightbox
                src={lightbox?.src}
                alt={lightbox?.alt}
                open={!!lightbox}
                onClose={closeLightbox}
            />
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

/**
 * Callout - blockquote를 스타일링된 콜아웃 박스로 변환하는 컴포넌트
 *
 * 첫 줄의 텍스트를 분석하여 콜아웃 유형을 결정한다.
 * 매칭되지 않으면 기본 blockquote로 렌더링한다.
 * 매칭되면 마커 텍스트를 제거하고 콜아웃 UI로 감싼다.
 */
const Callout = ({ children }) => {
    // 첫 번째 자식 요소에서 텍스트를 추출하여 콜아웃 유형을 판별한다
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

/**
 * Code - 코드 블록 래퍼 컴포넌트
 * AST 노드에서 language 클래스를 추출하여 상단에 언어명 헤더를 표시한다.
 * 언어가 지정되지 않으면 'PLAINTEXT'로 표시한다.
 */
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

/**
 * PostDetailRecommendList - 관련 글 추천 섹션
 * 동일 카테고리/서브카테고리의 다른 글을 최대 5개까지 표시한다.
 * 현재 글은 목록에서 제외된다. 추천할 글이 없으면 아무것도 렌더링하지 않는다.
 */
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

/**
 * PostDetailToc - 목차 (Table of Contents) 사이드바 컴포넌트
 * 마크다운의 헤딩(h1~h4)을 파싱하여 목차를 생성한다.
 * useScrollSpy 훅으로 현재 보고 있는 섹션을 하이라이트한다.
 * 들여쓰기는 최소 레벨 기준으로 상대적으로 계산된다.
 */
const PostDetailToc = ({ post }) => {
    // 마크다운에서 헤딩 목록을 추출한다
    const toc = MarkdownUtil.toc({post: post});
    // 현재 뷰포트에 보이는 헤딩의 ID를 추적한다
    const activeId = useScrollSpy();

    // 최소 레벨을 기준으로 들여쓰기 깊이를 계산하기 위한 값
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

/**
 * PostDetailComment - Giscus 댓글 시스템 컴포넌트
 *
 * Giscus(GitHub Discussions 기반 댓글)를 동적으로 로드한다.
 * - 스크립트를 DOM에 삽입하여 iframe을 생성한다
 * - MutationObserver로 iframe 로드 완료를 감지한다
 * - 10초 타임아웃 후 강제로 로딩 상태를 해제한다
 *
 * key={post.path}로 사용되어 글이 바뀌면 컴포넌트가 완전히 재마운트된다.
 */
const PostDetailComment = () => {
    const ref = useRef(null);
    // 댓글 iframe 로드 완료 여부
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // 이미 자식 요소가 있으면 중복 삽입을 방지한다
        if (!ref.current || ref.current.hasChildNodes()) return;

        // Giscus 스크립트를 동적으로 생성하여 삽입한다
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

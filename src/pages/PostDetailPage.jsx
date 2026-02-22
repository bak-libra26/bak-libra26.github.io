import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from 'rehype-highlight';
import rehypeHighlightLines from 'rehype-highlight-code-lines';

import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {useScrollSpy} from "../hooks/useScrollSpy.js";

import PostUtil from "../utils/post-util.js";
import DateUtil from "../utils/date-util.js";
import MarkdownUtil from "../utils/markdown-util.js";

import PostCard from "../components/PostCard.jsx";
import SeoHelper from "../components/SeoHelper.jsx";

import '../styles/pages/post-detail/post-detail-page.css';
import 'highlight.js/styles/github.min.css';
import ImageUtil from "../utils/image-util.js";
import AdsenseAd from "../components/AdsenseAd.jsx";


const PostDetailPage = () => {
    const { "*": path } = useParams();
    const post = PostUtil.findByPath({path: `${decodeURIComponent(path)}`});

    return (
        <>
            <SeoHelper title={`${post.title} - bak-libra26`}
                       description={post.summary}
                       path={`/posts/${post.path}`}
                       type="article"
                       publishedTime={post.createdDate}
                       modifiedTime={post.lastModifiedDate} />

            <article className={`post-detail`}>

                <section className={`post-detail__main`}>
                    <PostDetailMeta post={post} />
                    <PostDetailBody post={post} />
                    <AdsenseAd slot="7492590861" />
                    <PostDetailRecommendList post={post} />
                    <PostDetailComment />
                </section>

                <aside className={`post-detail__sidebar`}>
                    <PostDetailToc post={post} />
                </aside>


            </article>
        </>
    )
}

const PostDetailMeta = ({
    post
}) => {
    return (
        <header className={`post-meta`}>
            <h1 className={`post-meta__title`}>
                { post.title }
            </h1>

            <div className={`post-meta__info`}>
                <ol className={`post-meta__categories`}>
                    {
                        post.categories
                            .map((category, index) => {
                                const isLast = index === post.categories.length - 1;

                                return (
                                    <li  key={category}>
                                        { category }
                                        { !isLast && <span> · </span>}
                                    </li>
                                );
                            })
                    }
                </ol>

                <p className={`post-meta__date`}>
                    {DateUtil.formatDate(post.createdDate)}
                </p>
            </div>
        </header>
    )
}


const PostDetailBody = ({ post }) => {
    return (
        <main className={`post-detail__markdown`}>
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
                        return (<h1 id={props.id} className={`post-heading post-heading__h1`}>{children}</h1>);
                    },
                    h2({children, ...props}) {
                        return (<h2 id={props.id} className={`post-heading post-heading__h2`}>{children}</h2>);
                    },
                    h3({children, ...props}) {
                        return (<h3 id={props.id} className={`post-heading post-heading__h3`}>{children}</h3>);
                    },
                    h4({children, ...props}) {
                        return (<h4 id={props.id} className={`post-heading post-heading__h4`}>{children}</h4>);
                    },
                    pre({node, children }) {
                        return <Code node={node}>{children}</Code>
                    },
                    img({...props}) {
                        const categories = post.categories;
                        const name =  props.src;
                        const alt = props.alt;

                        const image = ImageUtil.findBy({categories: categories, name: name})
                        return (<img src={image.src} alt={alt} loading="lazy"/>);
                    }
                }}>
                {post.content}
            </ReactMarkdown>
        </main>
    );
}

const Code = ({ node, children }) => {
    const element = node?.children?.[0];
    const classes = element?.properties?.className || [];
    const match = /language-(\w+)/.exec(classes.join(' '));
    const language = match ? match[1] : 'plaintext';

    return (
        <figure className={`post-detail__code`}>
            <figcaption className={`post-detail__code-header`}>
                <span className="post-detail__code-language">
                    {language.toUpperCase()}
                </span>
            </figcaption>
            {/* rehype-highlight가 자동으로 <pre>와 de>에 하이라이트 클래스 추가 */}
            <pre className="post-detail__code-block hljs">
                {children}
            </pre>
        </figure>
    )
}

const PostDetailRecommendList= ({
    post
}) => {
    const [page, setPage] = useState(1);

    const size = 4;
    const start = (page - 1) * size; // page가 1부터 시작할 때

    const recommends = PostUtil.findBy({
                                    category: post.categories[0],
                                    subcategory: post.categories[1]
                                })
                                .filter((recommend) => post !== recommend)
                                .slice(start, start + size);
    const lastPage = recommends.length;



    return (
        <section className={`post-recommends`}>
            <header className={`post-recommends__header`}>
                <p>함께보면 좋은 글</p>
                <div>
                    <button
                        onClick={() => {
                            setPage((p) => Math.max(1, p - 1)); // 1 밑으로 안 내려가게
                        }}
                        disabled={page <= 1}
                    >
                        ←
                    </button>

                    <button
                        onClick={() => {
                            // 마지막 페이지가 lastPage라고 했을 때
                            setPage((p) => Math.min(lastPage, p + 1));
                        }}
                        disabled={page >= lastPage}
                    >
                        →
                    </button>
                </div>
            </header>
            <div className={`post-recommends__cards`}>
                {
                    recommends.map(p => (
                            <PostCard key={p.path} post={p} />
                        ))
                }
            </div>
        </section>
    )
}

const PostDetailToc = ({ post }) => {
    const toc = MarkdownUtil.toc({post: post});
    const activeId = useScrollSpy(); // 여기 한 줄만 추가

    return (
        <section className="post-detail__toc">
            <div className="post-detail__toc__title">이 글의 목차</div>
            <nav className="post-detail__toc__nav">
                <ol className="post-detail__toc__list">
                    {
                        toc.map((item, ) => {
                            const { level, text, slug } = item;

                            return (
                                <li key={slug} className={`post-detail__toc__item post-detail__toc__item--h${level}`}
                                data-active={`${slug === activeId ? "true" : "false"}`}>
                                    <a href={`#${slug}`} className="toc__link">
                                        {text}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ol>
            </nav>
        </section>
    );
};

const PostDetailComment = () => {
    const ref = useRef(null);

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
        script.setAttribute('data-theme', 'light');
        script.setAttribute('data-lang', 'ko');
        script.setAttribute('data-loading', 'lazy');

        ref.current.appendChild(script);
    }, []);

    return (
        <div style={{ width: '100%', marginTop: '4rem' }}>
            <section ref={ref} />
        </div>
    );
}


export default PostDetailPage;
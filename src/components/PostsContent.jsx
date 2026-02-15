import PostCard from "./PostCard.jsx";

import PostUtil from "../utils/post-util.js";

import '../styles/components/posts-contents.css';
import QueryUtil from "../utils/query-util.js";

const PostsContent = ({
    params,
}) => {
    const page = params.page;
    const category = params.category;
    const subcategory = params.subcategory;

    const size = 4;
    const start = (page - 1) * size;

    const posts = PostUtil.findBy(category, subcategory);
    const last = Math.ceil(posts.length / size);

    return (
        <section className={`posts__content`} >
            <div>
                {
                    posts.slice(start, start + size)
                        .map((post) => {
                            return <PostCard key={post.path} post={post}/>;
                        })
                }
            </div>

            <PostNavigation params={params} last={last}/>


        </section>
    )
}

const PostNavigation = ({
    params, last
}) => {
    const curr = params.page;

    const start = Math.max(2, curr - 2);
    const end = Math.min(last - 1, curr + 2);

    const pages = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
    );

    const category = params.category;
    const subcategory = params.subcategory;

    return (
        <nav className="posts-pagination__nav" aria-label="Posts pages">
            <ul className={`posts-pagination`}>
                <li className="posts-pagination__item">
                    <a className="posts-pagination__link" href={QueryUtil.getPostsHref({page: 1, category, subcategory})}
                       data-active={curr === 1 ? 'true' : 'false'}>
                        1
                    </a>
                </li>

                {/* ... */}
                {start > 2 && (
                    <li className="posts-pagination__item">
                        <span className="posts-pagination__ellipsis">…</span>
                    </li>
                )}

                {/* pages */}
                {
                    pages.map(page => {
                        return (
                            <li key={page} className={`posts-pagination__item`}>
                                <a className={`posts-pagination__link `} href={QueryUtil.getPostsHref({page: page, category, subcategory})}
                                   data-active={page === curr ? 'true' : 'false'}>
                                    { page }
                                </a>
                            </li>
                        );
                    })
                }


                {/* 뒤쪽 ... : max-2, max-1만 가릴 땐 생략 */}
                {end < last - 1 && (
                    <li className="posts-pagination__item">
                        <span className="posts-pagination__ellipsis">…</span>
                    </li>
                )}

                {/* max */}
                {last > 1 && (
                    <li className="posts-pagination__item">
                        <a className="posts-pagination__link" href={QueryUtil.getPostsHref({page: last, category, subcategory})}
                           data-active={curr === last ? 'true' : 'false'}>
                            {last}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default PostsContent;
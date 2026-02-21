import {Link, useSearchParams} from "react-router-dom";

import HrefUtil from "../utils/href-util.js";

import SeoHelper from "../components/SeoHelper.jsx";
import PostsSidebar from "../components/PostsSidebar.jsx";
import PostsContent from "../components/PostsContent.jsx";

import '../styles/pages/posts/posts-page.css'

const PostsPage = () => {
    const [searchParams] = useSearchParams();

    const category = searchParams.get('category') || '전체';
    const subcategory = searchParams.get('subcategory');
    const page = Math.max(Number(searchParams.get("page") || 1), 1);

    const params = {
        category: category,
        subcategory: subcategory,
        page: page
    }

    return (
        <>
            <SeoHelper title={`전체 글 목록 - bak-libra26`}
                       description='블로그의 전체 글 목록을 한 번에 모아봤습니다. 백엔드, 프론트엔드, 모바일, 아키텍처 글을 페이지별로 살펴보세요.'
                       type="website"/>

            <PostsHero />
            {/*<PostsSearch />*/}

            <section className={`posts-layout`}>
                <PostsSidebar params={params}/>
                <PostsContent params={params} />
            </section>
        </>
    )
}




const PostsHero = () => {
    return (
        <header className="posts-hero">
            <section className='posts-hero__header'>
                <p className="posts-hero__title">전체 글</p>
                <p className="posts-hero__caption">이것 저것, 요리 조리</p>
            </section>
        </header>
    )
}

const PostsSearch = () => {

    return (
        <section className='post-search'>
            <div className='search-bar'>
                <input type={'text'}
                       placeholder='검색어를 입력하세요...'
                       className='search-bar__input'/>
            </div>
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
                    <Link className="posts-pagination__link"
                          to={HrefUtil.getPostsHref({page: 1, category, subcategory})}
                          data-active={curr === 1 ? 'true' : 'false'}>
                        1
                    </Link>
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
                                <Link className={`posts-pagination__link `}
                                      to={HrefUtil.getPostsHref({page: page, category, subcategory})}
                                      data-active={page === curr ? 'true' : 'false'}>
                                    { page }
                                </Link>
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
                        <Link className="posts-pagination__link"
                              to={HrefUtil.getPostsHref({page: last, category, subcategory})}
                              data-active={curr === last ? 'true' : 'false'}>
                            {last}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
export default PostsPage;

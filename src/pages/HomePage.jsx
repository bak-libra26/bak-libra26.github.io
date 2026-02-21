import PostUtil from "../utils/post-util.js";
import HrefUtil from "../utils/href-util.js";

import PostCard from "../components/PostCard.jsx";

import '../styles/pages/home/home-hero.css'
import '../styles/pages/home/latest-posts.css';
import SeoHelper from "../components/SeoHelper.jsx";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <SeoHelper title={`개발블로그 - bak-libra26`}
                       description='백엔드/프론트엔드/모바일 개발 기록과 아키텍처 관련 글을 공유합니다.'
                       type="website"/>

            <HomeHero />
            <HomeLatestPosts />
        </>
    )
}

const HomeHero = () => {
    return (
        <section className="home-hero">
            <p className="home-hero__kicker">개발 블로그</p>
            <p className="home-hero__title">
                개발하는 고양이는
                <br/>
                <span className="home-hero__subtitle">줄여서 개고양</span>
            </p>

            <p className="home-hero__caption">개고냐옹냐옹</p>
        </section>
    )
}

const HomeLatestPosts = () => {
    return (
        <section className='latest-posts__section'>
            <div className='latest-posts__header'>
                <h2 className='latest-posts__title'>최신 글</h2>
                <Link className='latest-posts__viewall'
                   to={HrefUtil.getPostsHref({page: 1, category: '전체'})}>
                    전체 보기
                </Link>
            </div>
            <ol className='latest-posts__grid'>
                {
                    PostUtil.latestPosts
                        .map((post) => {
                            return (
                                <li key={ post.path }>
                                    <PostCard post={ post }/>
                                </li>
                            );
                        })
                }
            </ol>
        </section>
    );
}

export default HomePage;
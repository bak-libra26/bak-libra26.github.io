import PostUtil from "../utils/post-util.js";
import PostCard from "../components/PostCard.jsx";

import '../styles/components/home-hero.css'
import '../styles/components/latest-posts.css';

const HomePage = () => {
    return (
        <>
            <HomeHero />
            <LatestPosts />
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

const LatestPosts = () => {
    return (
        <section className='latest-posts__section'>
            <div className='latest-posts__header'>
                <h2 className='latest-posts__title'>최신 글</h2>
                <a className='latest-posts__viewall'
                   href='/posts?page=1'>
                    전체 보기
                </a>
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
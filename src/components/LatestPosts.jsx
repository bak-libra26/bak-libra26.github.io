import PostUtil from "../utils/post-util.js";

import PostCard from "./PostCard.jsx";

import '../styles/latest-posts.css';

const LatestPosts = () => {
    return (
        <section className='latest-posts__section'>
            <div className='latest-posts__header'>
                <h2 className='latest-posts__title'>최신 글</h2>
                <a className='latest-posts__viewall'
                    href='/posts'>
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

export default LatestPosts;
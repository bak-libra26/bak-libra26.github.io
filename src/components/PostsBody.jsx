import PostUtil from "../utils/post-util.js";
import PostCategorySidebar from "./PostCategorySidebar.jsx";

import '../styles/posts-body.css';

const PostsBody = () => {
    return (
        <section className={'posts-layout'}>
            <PostCategorySidebar />

            <section className="posts-layout__content">

            </section>
        </section>
    )
}

export default PostsBody;
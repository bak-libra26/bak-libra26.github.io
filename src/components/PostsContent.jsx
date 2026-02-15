import PostCard from "./PostCard.jsx";

import PostUtil from "../utils/post-util.js";

import '../styles/components/posts-contents.css';

const PostsContent = ({page, category, subcategory}) => {
    const pageSize = 6;
    const start = (page - 1) * pageSize;

    const posts = PostUtil.findBy(category, subcategory);

    return (
        <section className="posts-layout__content">
            {
                posts.slice(start, start + pageSize)
                    .map((post) => {
                        return <PostCard post={post}/>;
                    })
            }

        </section>
    )
}

export default PostsContent;
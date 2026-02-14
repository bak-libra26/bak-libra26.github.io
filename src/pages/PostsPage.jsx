import PostsHero from "../components/PostsHero.jsx";
import PostsSearch from "../components/PostsSearch.jsx";
import PostUtil from "../utils/post-util.js";
import PostsBody from "../components/PostsBody.jsx";


const PostsPage = () => {
    return (
        <>
            <PostsHero />
            <PostsSearch />
            <PostsBody />
        </>
    )
}

export default PostsPage;
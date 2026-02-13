import PostsHero from "../components/PostsHero.jsx";
import PostsSearch from "../components/PostsSearch.jsx";
import PostUtil from "../utils/post-util.js";

import {useSearchParams} from "react-router-dom";
import {useState} from "react";

import PostCard from "../components/PostCard.jsx";


import '../styles/posts-contents.css';
import PostCategorySidebar from "../components/PostCategorySidebar.jsx";
import PostsContent from "../components/PostsContent.jsx";


const PostsPage = () => {

    const [selected, setSelected] = useState({
        category: undefined,
        subcategory: undefined,
    });

    const [searchParams] = useSearchParams();
    const page = Math.max(Number(searchParams.get("page") || 1), 1);



    return (
        <>
            <PostsHero />
            <PostsSearch />

            <section className={`posts-layout`}>
                <PostCategorySidebar selected={selected} onSelected={setSelected}/>
                <PostsContent page={page} category={selected.category} subcategory={selected.subcategory}/>
            </section>
        </>
    )
}

export default PostsPage;

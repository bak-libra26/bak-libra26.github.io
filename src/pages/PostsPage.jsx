import {useSearchParams} from "react-router-dom";
import {useState} from "react";

import PostCategorySidebar from "../components/PostCategorySidebar.jsx";
import PostsContent from "../components/PostsContent.jsx";

import '../styles/components/posts-hero.css';
import '../styles/components/posts-contents.css';
import '../styles/components/posts-search.css'

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

export default PostsPage;

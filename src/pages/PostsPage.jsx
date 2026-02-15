import {useSearchParams} from "react-router-dom";

import PostsContent from "../components/PostsContent.jsx";
import PostCategorySidebar from "../components/PostCategorySidebar.jsx";

import '../styles/components/posts-hero.css';
import '../styles/components/posts-contents.css';
import '../styles/components/posts-search.css'

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
            <PostsHero />
            {/*<PostsSearch />*/}

            <section className={`posts-layout`}>
                <PostCategorySidebar params={params}/>
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

export default PostsPage;

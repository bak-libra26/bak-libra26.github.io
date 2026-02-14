import '../styles/posts-search.css'
import PostUtil from "../utils/post-util.js";

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

export default PostsSearch;
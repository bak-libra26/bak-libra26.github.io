import DateUtil from "../utils/date-util.js";

import '../styles/old-post-card.css';
import {Link} from "react-router-dom";


const PostCard = ({ post }) => {
    return (
        <Link to={`/posts/${post.path}`}>
            <article className="post-card">
                <ol className='post-card_categories'>
                    {
                        post.categories
                            .map((category, index) => {
                                const isLast = index === post.categories.length - 1;

                                return (
                                    <>
                                        <li key={category}>
                                            { category }
                                        </li>
                                        { !isLast && <span> &gt; </span>}
                                    </>

                                );
                            })
                    }
                </ol>

                <header className='post-card__main'>
                    <h2 className='post-card__title'>{ post.title }</h2>
                    <p className='post-card__summary'>{ post.summary }</p>
                </header>


                <footer className='post-card__meta'>
                    <p>{ DateUtil.formatDate(post.createdDate) }</p>
                    <p className='post-card__view-more'>더 읽기</p>
                </footer>
            </article>
        </Link>
    );
}

export default PostCard;
import DateUtil from "../utils/date-util.js";

import '../styles/components/post-card.css';
import HrefUtil from "../utils/href-util.js";
import {Link} from "react-router-dom";

const PostCard = ({ post }) => {
    return (
        <Link to={HrefUtil.getPostDetailHref({path: post.path})}>
            <article className="post-card">
                <ol className='post__categories'>
                    {
                        post.categories
                            .map((category, index) => {
                                const isLast = index === post.categories.length - 1;

                                return (
                                        <li  key={category}>
                                            { category }
                                            { !isLast && <span> · </span>}
                                        </li>
                                );
                            })
                    }
                </ol>

                <header className='post-card__main'>
                    <p className='post-card__title'>{ post.title }</p>
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
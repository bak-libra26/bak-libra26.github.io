import {Link} from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import PostUtil from "../utils/post-util.js";
import HrefUtil from "../utils/href-util.js";
import '../styles/pages/posts/posts-sidebar.css';
import PostService from "../services/post-service.js";

const PostsSidebar = ({
    params
}) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <aside className="post-sidebar">
            <nav className={'post-sidebar__nav'}>

                <ul className={'post-sidebar__menu'}>
                    <li className={`post-sidebar__category`}>
                        <Link className={`post-sidebar__category__link`} data-active={params.category === '전체'}
                              to={HrefUtil.getPostsHref({page: 1, category: '전체'})}>
                            <p>
                                <i className={`fa-solid ${PostUtil.icons({category: '전체'})} post-sidebar__icon`}></i>
                                {
                                    !isMobile && (
                                        <span className={`post-sidebar__category-label`}>
                                            전체 ({ PostUtil.posts.length })
                                        </span>
                                    )
                                }
                            </p>
                        </Link>
                    </li>

                    {
                        PostService.getCategories()
                            .map((category) => {
                                return (
                                    <li key={category} className={`post-sidebar__category`}>
                                        <Link className={`post-sidebar__category__link`} data-active={params.category === category && !params.subcategory }
                                              to={HrefUtil.getPostsHref({page: 1, category: category})}>
                                            <p>
                                                <i className={`fa-solid ${PostUtil.icons({category: category})} post-sidebar__icon`}></i>
                                                { !isMobile && (
                                                        <span className={`post-sidebar__category-label`}>
                                                            {category} ({ PostService.countByCategory({category}) })
                                                        </span>
                                                )}
                                            </p>

                                        </Link>

                                        { !isMobile && (
                                            <ul className={`post-sidebar__submenu`}>
                                                {
                                                    PostService.getSubcategories({category: category})
                                                        .map((subcategory) => {
                                                            return (
                                                                <li key={subcategory} className={`post-sidebar__subcategory`}>
                                                                    <Link  className={`post-sidebar__subcategory__link`} data-active={params.subcategory === subcategory}
                                                                           to={HrefUtil.getPostsHref({page: 1, category: category, subcategory: subcategory})}>
                                                                        { subcategory } ({ PostService.countByCategoryAndSubcategory({category, subcategory}) })
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })
                                                }
                                            </ul>
                                        )}
                                    </li>
                                );
                            })
                    }
                </ul>
            </nav>
        </aside>
    );
}

export default PostsSidebar;


import PostUtil from "../utils/post-util.js";

import '../styles/components/post-category-sidebar.css';
import {useState} from "react";
import QueryUtil from "../utils/query-util.js";


const PostCategorySidebar = ({
    params
}) => {
    const categories = PostUtil.categories;
    const total = Object.values(categories)
        .map((metadata) => metadata.total)
        .reduce((a,b) => (a + b), 0);

    return (
        <aside className="post-sidebar">
            <nav className={'post-sidebar__nav'}>
                <ul className={'post-sidebar__menu'}>
                    <li>
                        <a className={`post-sidebar__category`}
                           href={QueryUtil.getPostsHref({page: 1, category: params.category})}
                                data-active={params.category === '전체'}>
                                    <span>
                                        <i className="fa-solid fa-code post-sidebar__category-icon"></i>
                                        전체 ({total})
                                    </span>
                        </a>
                    </li>

                    {
                        Object.entries(categories)
                            .map(([category, metadata]) => {

                                return <PostCategorySidebarItem
                                            key={category}
                                            metadata={metadata}
                                            params={params}
                                />
                            })
                    }
                </ul>
            </nav>
        </aside>
    );
}

const PostCategorySidebarItem = ({
     params, metadata
 }) => {
    const total = metadata.total;
    const category = metadata.category
    const subcategories = metadata.subcategories;

    const [isOpen, setOpen] = useState(true);

    return <li key={category}>
        <a className={`post-sidebar__category`} href={QueryUtil.getPostsHref({page: 1, category: category, subcategory: undefined})}
                data-active={params.category === category && params.subcategory === null}>
                <span>
                    <i className="fa-solid fa-code post-sidebar__category-icon"></i>
                    { category } ({total})
                </span>
            <button className={'post-sidebar__category-toggle'}
                    onClick={() => {
                        setOpen((prev) => !prev)
                    }}>
                {
                    isOpen ? (<i className="fa-solid fa-plus"></i>)
                        : (<i className="fa-solid fa-minus"></i>)
                }
            </button>
        </a>

        <ul className={`post-sidebar__submenu ${isOpen ? "is-open" : "is-closed"}`}>
            {
                Object.entries(subcategories)
                    .map(([subcategory, subtotal]) => {
                        return (
                            <li key={subcategory}>
                                <a className={`post-sidebar__subcategory`} href={QueryUtil.getPostsHref({page: 1, category: category, subcategory: subcategory})}
                                        data-active={params.subcategory === subcategory}>
                                    { subcategory } ({ subtotal })
                                </a>
                            </li>
                        );
                    })
            }
        </ul>
    </li>
}

export default PostCategorySidebar;


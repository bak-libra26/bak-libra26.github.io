import PostUtil from "../utils/post-util.js";

import '../styles/post-category-sidebar.css';

const PostCategorySidebar = () => {
    return (
        <aside className="post-sidebar">
            <nav className={'post-sidebar__nav'}>
                <ul className={'post-sidebar__menu'}>
                    {
                        Object.entries(PostUtil.categories)
                        .map(([category, subcategory]) => {
                            return <li key={category}>
                                <button className={'post-sidebar__category'}>
                                    <span>
                                        <i className="fa-solid fa-code post-sidebar__category-icon"></i>
                                        { category }
                                    </span>
                                    <span className={'post-sidebar__category-toggle'}>
                                        <i className="fa-solid fa-plus"></i>
                                    </span>
                                </button>

                                <ul className="post-sidebar__submenu">
                                    {
                                        subcategory.map((subcate) => {
                                            return (
                                                <li key={subcate}>
                                                    <button className={'post-sidebar__subcategory'}>
                                                        { subcate }
                                                    </button>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </aside>
    );
}

export default PostCategorySidebar;


import PostUtil from "../utils/post-util.js";

import '../styles/post-category-sidebar.css';
import PostCategorySidebarItem from "./PostCategorySidebarItem.jsx";

const PostCategorySidebar = ({
    selected, onSelected
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
                        <button className={`post-sidebar__category`}
                                data-active={selected.category === undefined && selected.subcategory === undefined}
                                onClick={() => {
                                    onSelected({
                                        category: undefined,
                                        subcategory: undefined
                                    });
                                }}>
                                    <span>
                                        <i className="fa-solid fa-code post-sidebar__category-icon"></i>
                                        전체 ({total})
                                    </span>
                        </button>
                    </li>

                    {
                        Object.entries(categories)
                        .map(([category, metadata]) => {

                            return <PostCategorySidebarItem
                                        key={category}
                                        category={category}
                                        total={metadata.total}
                                        subcategories={metadata.children}
                                        selected={selected}
                                        onSelected={onSelected}
                            />
                        })
                    }
                </ul>
            </nav>
        </aside>
    );
}

export default PostCategorySidebar;


import PostUtil from "../utils/post-util.js";

import '../styles/components/post-category-sidebar.css';
import {useState} from "react";

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

const PostCategorySidebarItem = ({
     category, total, subcategories, selected, onSelected
 }) => {
    const [isOpen, setOpen] = useState(true);

    return <li key={category}>
        <button className={`post-sidebar__category`}
                data-active={selected.category === category && selected.subcategory === undefined}
                onClick={() => {
                    onSelected({
                        category: category,
                        subcategory: undefined
                    });
                }}>
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
        </button>

        <ul className={`post-sidebar__submenu ${isOpen ? "is-open" : "is-closed"}`}>
            {
                Object.entries(subcategories)
                    .map(([subcategory, subtotal]) => {
                        return (
                            <li key={subcategory}>
                                <button className={`post-sidebar__subcategory`}
                                        data-active={selected.category === category && selected.subcategory === subcategory}
                                        onClick={() => {
                                            onSelected({
                                                category: category,
                                                subcategory: subcategory
                                            });
                                        }}>
                                    { subcategory } ({ subtotal })
                                </button>
                            </li>
                        );
                    })
            }
        </ul>
    </li>
}

export default PostCategorySidebar;


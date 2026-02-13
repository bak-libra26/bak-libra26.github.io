import {useState} from "react";

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

export default PostCategorySidebarItem;
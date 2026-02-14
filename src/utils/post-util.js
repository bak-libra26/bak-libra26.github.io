import Post from "../models/post.js";
import MarkdownUtil from "./markdown-util.js";

const globs = import.meta.glob('/src/assets/posts/**/*.md', {
    eager: true,
    query: 'raw'
});

const _posts = Object.entries(globs)
    .map(([path, obj]) => {
        const raw = obj.default;

        const metadata = MarkdownUtil.metadata(raw);
        const content = MarkdownUtil.content(raw);

        return new Post({
            absolutePath: path,
            metadata: metadata,
            content: content
        });
    })
    .filter((post) => !post.isHidden)
    .sort((a, b) => a.createdDate - b.createdDate).reverse();

const _categories = _posts
    .map((post) => post.categories)
    .map((arr) => arr.slice(0, 3)) // [key, v1, v2]
    .reduce((acc, [category, child]) => {
        if (!category) return acc;

        // 상위 key 카운트
        if (!acc[category]) {
            acc[category] = {
                total: 0,
                category: category,
                subcategories: {},
            };
        }
        acc[category].total += 1;

        // 하위 value 카운트
        if (child) {
            if (!acc[category].subcategories[child]) {
                acc[category].subcategories[child] = 0;
            }
            acc[category].subcategories[child] += 1;
        }

        return acc;
    }, {});



const PostUtil = {

    get posts() {
        return _posts;
    },

    get latestPosts() {
        return _posts.slice(0, 6);
    },

    get categories() {
        return _categories;
    },

    findBy(category, subcategory) {
        if (category === '전체') {
            return this.posts;
        }

        if (subcategory === null) {
            return this.posts.filter((post) => post.category === category);
        } else {
            return this.posts.filter((post) => post.category === category && post.subcategory === subcategory);
        }
    }

}

export default PostUtil;
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
    .reduce((acc, [parent, child]) => {
        if (!parent) return acc;

        // 상위 key 카운트
        if (!acc[parent]) {
            acc[parent] = {
                total: 0,
                children: {},
            };
        }
        acc[parent].total += 1;

        // 하위 value 카운트
        if (child) {
            if (!acc[parent].children[child]) {
                acc[parent].children[child] = 0;
            }
            acc[parent].children[child] += 1;
        }

        return acc;
    }, {});



const PostUtil = {

    get posts() {
        return _posts;
    },

    get latestPosts() {
        return _posts.slice(0, 8);
    },

    get categories() {
        console.log(`_categories=${JSON.stringify(_categories)}`);
        return _categories;
    }

}

export default PostUtil;
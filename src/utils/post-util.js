import Post from "../models/post.js";
import MarkdownUtil from "./markdown-util.js";

const globs = import.meta.glob('../assets/posts/**/*.md', {
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



const PostUtil = {

    get posts() {
        return _posts;
    },

    get latestPosts() {
        return _posts.slice(0, 6);
    },

    icons({category}) {
        switch (category) {
            case '전체':
                return 'fa-border-all';

            case '개발':
                return 'fa-code';

            case '사이드 프로젝트':
                return 'fa-flask-vial';

            case '데브옵스':
                return 'fa-server';

            default:
                return 'fa-file-circle-question';
        }
    },

    findByCategory({category: category}) {
        return [...new Set(_posts.filter((post) => post.category === category)
                                 .map((post) => post.category))];
    },

    findBy({category: category, subcategory: subcategory}) {
        if (category === '전체') {
            return this.posts;
        }

        if (subcategory === null) {
            return this.posts.filter((post) => post.category === category);
        } else {
            return this.posts.filter((post) => post.category === category && post.subcategory === subcategory);
        }
    },

    findByPath({ path }) {
        return _posts.find((post) => post.path === path);
    },

    findByCategories({categories}) {
        return this.posts.filter((p) => p.categories === categories);
    },
}

export default PostUtil;
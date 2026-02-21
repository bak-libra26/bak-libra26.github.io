import PostUtil from "../utils/post-util.js";

const posts = PostUtil.posts;

const PostService = {

    getCategories() {
        return [...new Set(posts.map((post) => post.category))];
    },

    getSubcategories({category}) {
        return [
            ...new Set(
                this.findAllByCategory({category: category}).map((post) => post.subcategory)
            ),
        ];
    },

    // 단일 객체가 필요할 때만
    findByCategory(category) {
        return posts.find((post) => post.category === category);
    },

    // 배열 전체
    findAllByCategory({category}) {
        return posts.filter((post) => post.category === category);
    },

    // 배열 전체
    findAllByCategoryAndSubcategory({category, subcategory}) {
        return this.findAllByCategory({category})
                    .filter((post) => post.subcategory === subcategory);
    },

    countByCategory({category}) {
        return this.findAllByCategory({category}).length;
    },

    countByCategoryAndSubcategory({category, subcategory}) {
        return this.findAllByCategoryAndSubcategory({category, subcategory}).length;
    },
};

export default PostService;

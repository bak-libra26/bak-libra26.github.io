import PostUtil from '../utils/post-util.js';

const posts = PostUtil.posts;

const _categoryIndex = new Map();
const _subcategoryIndex = new Map();
const _categories = [];
const _subcategories = new Map();

for (const post of posts) {
  const { category, subcategory } = post;

  if (!_categoryIndex.has(category)) {
    _categoryIndex.set(category, []);
    _categories.push(category);
    _subcategories.set(category, []);
  }
  _categoryIndex.get(category).push(post);

  if (subcategory) {
    const key = `${category}/${subcategory}`;
    if (!_subcategoryIndex.has(key)) {
      _subcategoryIndex.set(key, []);
      _subcategories.get(category).push(subcategory);
    }
    _subcategoryIndex.get(key).push(post);
  }
}

const PostService = {
  getCategories() {
    return _categories;
  },

  getSubcategories({ category }) {
    return _subcategories.get(category) || [];
  },

  findAllByCategory({ category }) {
    return _categoryIndex.get(category) || [];
  },

  countByCategory({ category }) {
    return (_categoryIndex.get(category) || []).length;
  },

  countByCategoryAndSubcategory({ category, subcategory }) {
    return (_subcategoryIndex.get(`${category}/${subcategory}`) || []).length;
  },

  findSeriesPosts({ post }) {
    if (!post?.seriesKey) return [];
    return posts
      .filter((p) => p.seriesKey === post.seriesKey)
      .sort((a, b) => a.createdDate - b.createdDate);
  },
};

export default PostService;

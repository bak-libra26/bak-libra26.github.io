import Post from '../models/post.js';
import MarkdownUtil from './markdown-util.js';

const globs = import.meta.glob('../assets/posts/**/*.md', {
  eager: true,
  query: 'raw',
});

const _allPosts = Object.entries(globs)
  .map(([path, obj]) => {
    const raw = obj.default;
    const metadata = MarkdownUtil.metadata(raw);
    const content = MarkdownUtil.content(raw);
    return new Post({ absolutePath: path, metadata, content });
  })
  .sort((a, b) => b.createdDate - a.createdDate);

const _posts = _allPosts.filter((post) => !post.isHidden);

const _pathMap = new Map(_allPosts.map((post) => [post.path, post]));

const PostUtil = {
  get posts() {
    return _posts;
  },

  get allPosts() {
    return _allPosts;
  },

  get latestPosts() {
    return _posts.slice(0, 5);
  },

  findBy({ category, subcategory }) {
    if (category === '전체') return _posts;
    if (subcategory == null) return _posts.filter((p) => p.category === category);
    return _posts.filter((p) => p.category === category && p.subcategory === subcategory);
  },

  findByPath({ path }) {
    return _pathMap.get(path) || null;
  },
};

export default PostUtil;

/**
 * @file 게시글 서비스 모듈
 * @description 카테고리/서브카테고리별 게시글 인덱싱 및 조회 기능을 제공합니다.
 *              초기화 시 모든 게시글을 카테고리 기준으로 색인하여 빠른 조회를 지원합니다.
 */

import PostUtil from '../utils/post-util.js';

const posts = PostUtil.posts;

/** @type {Map<string, Post[]>} 카테고리명 -> 해당 카테고리의 게시글 배열 */
const _categoryIndex = new Map();
/** @type {Map<string, Post[]>} "카테고리/서브카테고리" -> 해당 서브카테고리의 게시글 배열 */
const _subcategoryIndex = new Map();
/** @type {string[]} 전체 카테고리 목록 (등록 순서 유지) */
const _categories = [];
/** @type {Map<string, string[]>} 카테고리명 -> 해당 카테고리의 서브카테고리 목록 */
const _subcategories = new Map();

// 모든 게시글을 순회하며 카테고리/서브카테고리 인덱스를 구축
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
  /**
   * 전체 카테고리 목록을 반환합니다.
   * @returns {string[]} 카테고리명 배열
   */
  getCategories() {
    return _categories;
  },

  /**
   * 특정 카테고리에 속한 서브카테고리 목록을 반환합니다.
   * @param {Object} params
   * @param {string} params.category - 카테고리명
   * @returns {string[]} 서브카테고리명 배열
   */
  getSubcategories({ category }) {
    return _subcategories.get(category) || [];
  },

  /**
   * 특정 카테고리에 속한 모든 게시글을 반환합니다.
   * @param {Object} params
   * @param {string} params.category - 카테고리명
   * @returns {Post[]} 게시글 배열
   */
  findAllByCategory({ category }) {
    return _categoryIndex.get(category) || [];
  },

  /**
   * 특정 카테고리에 속한 게시글 수를 반환합니다.
   * @param {Object} params
   * @param {string} params.category - 카테고리명
   * @returns {number} 게시글 수
   */
  countByCategory({ category }) {
    return (_categoryIndex.get(category) || []).length;
  },

  /**
   * 특정 카테고리와 서브카테고리에 속한 게시글 수를 반환합니다.
   * @param {Object} params
   * @param {string} params.category - 카테고리명
   * @param {string} params.subcategory - 서브카테고리명
   * @returns {number} 게시글 수
   */
  countByCategoryAndSubcategory({ category, subcategory }) {
    return (_subcategoryIndex.get(`${category}/${subcategory}`) || []).length;
  },

  /**
   * 동일한 시리즈에 속한 게시글 목록을 작성일 오름차순으로 반환합니다.
   * @param {Object} params
   * @param {Post} params.post - 기준 게시글 (seriesKey를 사용하여 시리즈 판별)
   * @returns {Post[]} 시리즈 게시글 배열 (작성일 오름차순)
   */
  findSeriesPosts({ post }) {
    if (!post?.seriesKey) return [];
    return posts
      .filter((p) => p.seriesKey === post.seriesKey)
      .sort((a, b) => a.createdDate - b.createdDate);
  },
};

export default PostService;

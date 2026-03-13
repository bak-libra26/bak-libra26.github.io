/**
 * @file 게시글 유틸리티 모듈
 * @description 마크다운 파일을 로드하여 Post 객체로 변환하고,
 *              카테고리/경로 기반 조회 기능을 제공합니다.
 *              Vite의 import.meta.glob을 사용하여 빌드 시점에 모든 마크다운 파일을 수집합니다.
 */

import Post from '../models/post.js';
import MarkdownUtil from './markdown-util.js';

// Vite glob import를 사용하여 assets/posts 하위의 모든 마크다운 파일을 즉시(eager) 로드
const globs = import.meta.glob('../assets/posts/**/*.md', {
  eager: true,
  query: 'raw',
});

/**
 * @type {Post[]}
 * 모든 게시글을 작성일 내림차순(최신순)으로 정렬한 배열
 */
const _allPosts = Object.entries(globs)
  .map(([path, obj]) => {
    const raw = obj.default;
    const metadata = MarkdownUtil.metadata(raw);
    const content = MarkdownUtil.content(raw);
    return new Post({ absolutePath: path, metadata, content });
  })
  .sort((a, b) => b.createdDate - a.createdDate);

/** @type {Post[]} 숨김 처리되지 않은 공개 게시글만 필터링한 배열 */
const _posts = _allPosts.filter((post) => !post.isHidden);

/** @type {Map<string, Post>} 경로(path) -> Post 객체 매핑 (빠른 경로 조회용) */
const _pathMap = new Map(_allPosts.map((post) => [post.path, post]));

const PostUtil = {
  /**
   * 공개 게시글 목록을 반환합니다 (숨김 게시글 제외).
   * @returns {Post[]} 공개 게시글 배열 (최신순)
   */
  get posts() {
    return _posts;
  },

  /**
   * 숨김 게시글을 포함한 전체 게시글 목록을 반환합니다.
   * @returns {Post[]} 전체 게시글 배열 (최신순)
   */
  get allPosts() {
    return _allPosts;
  },

  /**
   * 최근 게시글 5개를 반환합니다.
   * @returns {Post[]} 최근 게시글 배열 (최대 5개)
   */
  get latestPosts() {
    return _posts.slice(0, 5);
  },

  /**
   * 카테고리와 서브카테고리 조건에 맞는 게시글을 필터링하여 반환합니다.
   * @param {Object} params
   * @param {string} params.category - 카테고리명 ('전체'일 경우 전체 게시글 반환)
   * @param {string} [params.subcategory] - 서브카테고리명 (생략 시 카테고리 전체 반환)
   * @returns {Post[]} 필터링된 게시글 배열
   */
  findBy({ category, subcategory }) {
    if (category === '전체') return _posts;
    if (subcategory == null) return _posts.filter((p) => p.category === category);
    return _posts.filter((p) => p.category === category && p.subcategory === subcategory);
  },

  /**
   * 경로(path)로 게시글을 조회합니다.
   * @param {Object} params
   * @param {string} params.path - 게시글 경로
   * @returns {Post|null} 일치하는 게시글 또는 null
   */
  findByPath({ path }) {
    return _pathMap.get(path) || null;
  },
};

export default PostUtil;

/**
 * @file 마크다운 유틸리티 모듈
 * @description 마크다운 원본 텍스트에서 프론트매터(YAML 메타데이터) 파싱,
 *              본문 추출, 목차(TOC) 생성 기능을 제공합니다.
 */

import yaml from 'js-yaml';
import { slug } from 'github-slugger';

/** @constant {RegExp} YAML 프론트매터(--- ... ---)를 매칭하는 정규식 */
const FRONTMATTER_RE = /^---[\s\S]*?---\s*/;

/** @type {WeakMap<Post, Array>} 게시글별 TOC 캐시 (메모리 누수 방지를 위해 WeakMap 사용) */
const tocCache = new WeakMap();

const MarkdownUtil = {
  /**
   * 마크다운 원본에서 YAML 프론트매터를 파싱하여 메타데이터 객체로 반환합니다.
   * @param {string} raw - 마크다운 원본 텍스트
   * @returns {Object} 파싱된 메타데이터 객체 (프론트매터가 없으면 빈 객체)
   */
  metadata(raw) {
    const match = raw.match(FRONTMATTER_RE);
    if (!match) return {};

    const text = match[0].replace(/^---\s*/, '').replace(/---\s*$/, '');
    return yaml.load(text) || {};
  },

  /**
   * 마크다운 원본에서 프론트매터를 제거하고 본문 콘텐츠만 반환합니다.
   * @param {string} raw - 마크다운 원본 텍스트
   * @returns {string} 프론트매터가 제거된 본문 텍스트
   */
  content(raw) {
    return raw.replace(FRONTMATTER_RE, '');
  },

  /**
   * 게시글 본문에서 h2~h5 헤딩을 추출하여 목차(Table of Contents)를 생성합니다.
   * 결과는 WeakMap에 캐싱되어 동일 게시글에 대한 중복 파싱을 방지합니다.
   * @param {Object} params
   * @param {Post} params.post - 목차를 생성할 게시글 객체
   * @returns {Array<{level: number, text: string, slug: string}>} 목차 항목 배열
   */
  toc({ post }) {
    const cached = tocCache.get(post);
    if (cached) return cached;

    const content = post.content;
    const toc = [];
    const matches = content.matchAll(/^(#{2,5})\s+(.*)$/gm);

    for (const match of matches) {
      const level = match[1].length;
      const fullText = match[2];

      // 마크다운 링크 문법([title](#anchor))이 포함된 헤딩 처리
      const linkMatch = fullText.match(/^\[(.*?)]\(.*?\)$/);
      const text = linkMatch ? linkMatch[1] : fullText.trim();

      toc.push({ level, text, slug: slug(text) });
    }

    tocCache.set(post, toc);
    return toc;
  },
};

export default MarkdownUtil;

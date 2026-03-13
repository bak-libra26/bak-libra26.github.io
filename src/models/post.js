/**
 * @file 게시글(Post) 모델 클래스
 * @description 마크다운 파일의 메타데이터와 본문을 기반으로 게시글 객체를 생성합니다.
 *              파일 경로에서 카테고리/서브카테고리/제목을 자동으로 추출하며,
 *              읽기 시간은 지연 계산(lazy evaluation) 방식으로 처리됩니다.
 */

import ReadingTimeUtil from '../utils/reading-time-util.js';

/**
 * 다양한 형식의 날짜 값을 Date 객체로 파싱합니다.
 * 날짜만 있는 문자열(YYYY-MM-DD)은 한국 표준시(KST, +09:00)로 처리합니다.
 * @param {string|Date|undefined} val - 파싱할 날짜 값
 * @returns {Date} 파싱된 Date 객체 (값이 없으면 epoch)
 */
function parseDate(val) {
  if (!val) return new Date(0);
  const str = String(val);
  // 날짜만 있는 문자열(YYYY-MM-DD)은 KST로 처리
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    return new Date(str + 'T00:00:00+09:00');
  }
  return new Date(str);
}

/**
 * 블로그 게시글을 나타내는 모델 클래스
 * @class
 * @property {string} path - 게시글 경로 (예: "개발/백엔드/스프링/제목")
 * @property {string} title - 게시글 제목 (경로의 마지막 세그먼트)
 * @property {string} content - 프론트매터가 제거된 마크다운 본문
 * @property {string[]} tags - 태그 배열
 * @property {string} summary - 게시글 요약
 * @property {string[]} categories - 카테고리 경로 배열 (예: ["개발", "백엔드"])
 * @property {string} category - 최상위 카테고리
 * @property {string} subcategory - 서브카테고리
 * @property {string} visibility - 게시글 공개 상태 ('hidden' 등)
 * @property {boolean} isHidden - 숨김 여부
 * @property {Date} createdDate - 작성일
 * @property {Date} lastModifiedDate - 최종 수정일
 * @property {number} readingTime - 예상 읽기 시간 (분, 지연 계산)
 * @property {string} seriesKey - 시리즈 식별 키 (카테고리 경로를 '/'로 결합)
 */
class Post {
  /**
   * Post 인스턴스를 생성합니다.
   * @param {Object} params
   * @param {string} params.absolutePath - 마크다운 파일의 절대 경로 (Vite glob 기준)
   * @param {Object} params.metadata - 프론트매터에서 파싱된 메타데이터
   * @param {string} params.content - 프론트매터가 제거된 마크다운 본문
   */
  constructor({ absolutePath, metadata, content }) {
    const path = absolutePath.replace('../assets/posts', '').replace(/\.md$/, '').slice(1);
    const lastSlash = path.lastIndexOf('/');

    this._path = path;
    this._title = path.slice(lastSlash + 1);
    this._content = content;
    this._summary = metadata.summary || '';
    this._visibility = metadata.visibility;
    this._categories = path.slice(0, lastSlash).split('/');
    this._readingTime = null; // 지연 계산(lazy) - 최초 접근 시 계산

    this._createdDate = parseDate(metadata.created_date);
    this._lastModifiedDate = metadata.last_modified_date ? parseDate(metadata.last_modified_date) : this._createdDate;

    // 개발 모드에서 필수 메타데이터 누락 경고
    if (import.meta.env.DEV) {
      if (!metadata.created_date) {
        console.warn(`[Post] missing created_date: ${path}`);
      }
      if (!this._title) {
        console.warn(`[Post] missing title: ${path}`);
      }
    }

    // 태그를 배열, 쉼표 구분 문자열, 또는 빈 배열로 정규화
    const rawTags = metadata.tags;
    this._tags = Array.isArray(rawTags)
      ? rawTags
      : typeof rawTags === 'string'
        ? rawTags.split(',').map((t) => t.trim()).filter(Boolean)
        : [];
  }

  /** @returns {string} 게시글 경로 */
  get path() { return this._path; }
  /** @returns {string} 게시글 제목 */
  get title() { return this._title; }
  /** @returns {string} 마크다운 본문 */
  get content() { return this._content; }
  /** @returns {string[]} 태그 배열 */
  get tags() { return this._tags; }
  /** @returns {string} 게시글 요약 */
  get summary() { return this._summary; }
  /** @returns {string[]} 카테고리 경로 배열 */
  get categories() { return this._categories; }
  /** @returns {string} 최상위 카테고리 */
  get category() { return this._categories[0]; }
  /** @returns {string} 서브카테고리 */
  get subcategory() { return this._categories[1]; }
  /** @returns {string} 공개 상태 */
  get visibility() { return this._visibility; }
  /** @returns {boolean} 숨김 여부 */
  get isHidden() { return this._visibility === 'hidden'; }
  /** @returns {Date} 작성일 */
  get createdDate() { return this._createdDate; }
  /** @returns {Date} 최종 수정일 */
  get lastModifiedDate() { return this._lastModifiedDate; }
  /** @returns {number} 예상 읽기 시간 (분) - 최초 접근 시 계산 */
  get readingTime() {
    if (this._readingTime === null) {
      this._readingTime = ReadingTimeUtil.estimate(this._content);
    }
    return this._readingTime;
  }
  /** @returns {string} 시리즈 식별 키 */
  get seriesKey() { return this._categories.join('/'); }
}

export default Post;

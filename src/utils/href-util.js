/**
 * @file URL 경로(href) 생성 유틸리티 모듈
 * @description 게시글 목록 페이지와 게시글 상세 페이지의 URL을 생성합니다.
 *              카테고리, 서브카테고리, 페이지 번호 등을 조합하여 올바른 경로를 만듭니다.
 */

const HrefUtil = {
  /**
   * 게시글 목록 페이지의 href를 생성합니다.
   * 카테고리가 '전체'이거나 없을 경우 기본 경로(/posts)를 반환하며,
   * 2페이지 이상일 경우 쿼리 파라미터(?page=N)를 추가합니다.
   * @param {Object} params
   * @param {number} params.page - 페이지 번호 (1 이하이면 쿼리 파라미터 생략)
   * @param {string} [params.category] - 카테고리명
   * @param {string} [params.subcategory] - 서브카테고리명
   * @returns {string} URL 경로 문자열
   */
  getPostsHref({ page, category, subcategory }) {
    let href = '/posts';
    if (category && category !== '전체') {
      href += '/' + encodeURIComponent(category);
      if (subcategory) href += '/' + encodeURIComponent(subcategory);
    }
    return page > 1 ? `${href}?page=${page}` : href;
  },

  /**
   * 게시글 상세 페이지의 href를 생성합니다.
   * 경로의 각 세그먼트를 URI 인코딩하여 한글 등 특수문자를 안전하게 처리합니다.
   * @param {Object} params
   * @param {string} params.path - 게시글 경로 (슬래시로 구분된 카테고리/제목)
   * @returns {string} URL 경로 문자열
   */
  getPostDetailHref({ path }) {
    return '/posts/' + path.split('/').map(encodeURIComponent).join('/');
  },
};

export default HrefUtil;

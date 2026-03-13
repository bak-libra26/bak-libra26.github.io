/**
 * @file 읽기 시간 추정 유틸리티 모듈
 * @description 게시글 본문의 한국어 글자 수와 영문 단어 수를 기반으로
 *              예상 읽기 시간(분)을 계산합니다.
 */

/** @constant {number} 한국어 분당 읽기 글자 수 */
const KOREAN_CHARS_PER_MIN = 500;
/** @constant {number} 영어 분당 읽기 단어 수 */
const ENGLISH_WORDS_PER_MIN = 200;

/** @constant {RegExp} 한국어 문자(완성형, 자모, 호환 자모) 매칭 정규식 */
const KOREAN_REGEX = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g;

const ReadingTimeUtil = {
  /**
   * 콘텐츠의 예상 읽기 시간을 분 단위로 계산합니다.
   * 한국어와 영어를 분리하여 각각의 읽기 속도를 적용한 뒤 합산합니다.
   * 최솟값은 1분입니다.
   * @param {string} content - 게시글 본문 텍스트
   * @returns {number} 예상 읽기 시간 (분, 최소 1)
   */
  estimate(content) {
    if (!content) return 1;

    const koreanChars = (content.match(KOREAN_REGEX) || []).length;
    const withoutKorean = content.replace(KOREAN_REGEX, '');
    const englishWords = withoutKorean.split(/\s+/).filter((w) => w.length > 0).length;

    const minutes = koreanChars / KOREAN_CHARS_PER_MIN + englishWords / ENGLISH_WORDS_PER_MIN;

    return Math.max(1, Math.round(minutes));
  },
};

export default ReadingTimeUtil;

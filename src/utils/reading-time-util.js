const KOREAN_CHARS_PER_MIN = 500;
const ENGLISH_WORDS_PER_MIN = 200;

const KOREAN_REGEX = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g;

const ReadingTimeUtil = {
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

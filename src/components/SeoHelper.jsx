/**
 * @file SeoHelper.jsx - SEO 메타태그 및 구조화된 데이터(JSON-LD) 관리 컴포넌트
 *
 * React의 <head> 관리를 통해 다음을 설정한다:
 *   - <title>, <meta description>, canonical URL
 *   - Open Graph (og:*) 메타태그 (소셜 미디어 미리보기용)
 *   - Twitter Card 메타태그
 *   - JSON-LD 구조화된 데이터:
 *     - WebSite + Person 스키마 (홈페이지에서만)
 *     - BlogPosting 스키마 (글 상세에서만)
 *     - BreadcrumbList 스키마 (모든 하위 페이지)
 *
 * @exports SeoHelper
 */

import useTheme from '../hooks/useTheme.js';

/** 사이트 기본 URL */
const SITE_URL = 'https://bak-libra26.co.kr';
/** OG 이미지 기본값 */
const OG_IMAGE = SITE_URL + '/images/og-default.png';
/** 테마별 브라우저 상단바 색상 */
const THEME_COLORS = { dark: '#0A0A0F', light: '#FFFFFF' };

// 글로벌 스키마: 홈페이지에서만 한 번 주입된다
// WebSite 스키마: 검색엔진이 사이트 구조를 이해하도록 돕는다
const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'sim.junghun',
  alternateName: 'sim.junghun 개발 블로그',
  url: SITE_URL,
  inLanguage: 'ko',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/posts?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// Person 스키마: 사이트 소유자 정보를 구조화한다
const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'sim.junghun',
  url: SITE_URL,
  jobTitle: '백엔드 엔지니어',
  sameAs: [
    'https://github.com/bak-libra26',
  ],
};

/** 날짜를 ISO 8601 형식으로 변환한다. 유효하지 않은 날짜는 undefined를 반환한다. */
const toISO = (date) => {
  if (!date) return undefined;
  const d = new Date(date);
  return isNaN(d.getTime()) ? undefined : d.toISOString();
};

/**
 * SeoHelper - SEO 메타태그 렌더링 컴포넌트
 * @param {string} title - 페이지 제목
 * @param {string} description - 페이지 설명
 * @param {string} type - OG 타입 ('website' 또는 'article')
 * @param {string} path - 현재 페이지 경로 (canonical URL 생성용)
 * @param {string} publishedTime - 글 발행일 (article 타입에서만 사용)
 * @param {string} modifiedTime - 글 수정일 (article 타입에서만 사용)
 * @param {string[]} tags - 글 태그 목록 (article 타입에서만 사용)
 */
const SeoHelper = ({
  title,
  description,
  type = 'website',
  path = '',
  publishedTime,
  modifiedTime,
  tags,
}) => {
  const { theme } = useTheme();
  const canonicalUrl = SITE_URL + path;
  const isHome = !path || path === '/';
  const publishedISO = toISO(publishedTime);
  const modifiedISO = toISO(modifiedTime);

  // article 타입일 때 BlogPosting JSON-LD를 생성한다
  const jsonLd = type === 'article'
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        url: canonicalUrl,
        image: OG_IMAGE,
        inLanguage: 'ko',
        keywords: tags?.join(', '),
        datePublished: publishedISO,
        dateModified: modifiedISO,
        author: {
          '@type': 'Person',
          name: 'sim.junghun',
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Person',
          name: 'sim.junghun',
          url: SITE_URL,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      }
    : null;

  // 경로가 있으면 BreadcrumbList JSON-LD를 생성한다 (검색엔진 빵부스러기 탐색 경로)
  const breadcrumbLd = path
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          ...(path.startsWith('/posts')
            ? [{ '@type': 'ListItem', position: 2, name: 'Posts', item: SITE_URL + '/posts' }]
            : []),
          { '@type': 'ListItem', position: path.startsWith('/posts') ? 3 : 2, name: title, item: canonicalUrl },
        ],
      }
    : null;

  // JSON-LD를 안전하게 직렬화한다. '<' 문자를 이스케이프하여 XSS를 방지한다.
  const toJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <>
      <title>{title}</title>
      <meta name="author" content="sim.junghun" />
      <meta name="description" content={description} />
      <meta name="theme-color" content={THEME_COLORS[theme] || THEME_COLORS.dark} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OG */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="sim.junghun" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="ko_KR" />
      {publishedISO && <meta property="article:published_time" content={publishedISO} />}
      {modifiedISO && <meta property="article:modified_time" content={modifiedISO} />}
      {tags?.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD: WebSite + Person — only on homepage */}
      {isHome && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJson(WEBSITE_SCHEMA) }} />
      )}
      {isHome && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJson(PERSON_SCHEMA) }} />
      )}

      {/* JSON-LD: BlogPosting */}
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJson(jsonLd) }} />
      )}

      {/* JSON-LD: Breadcrumb */}
      {breadcrumbLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJson(breadcrumbLd) }} />
      )}
    </>
  );
};

export default SeoHelper;

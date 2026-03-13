import useTheme from '../hooks/useTheme.js';

const SITE_URL = 'https://bak-libra26.co.kr';
const OG_IMAGE = SITE_URL + '/images/og-default.png';
const THEME_COLORS = { dark: '#0A0A0F', light: '#FFFFFF' };

// Global schemas — only injected once on the root page
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

const toISO = (date) => {
  if (!date) return undefined;
  const d = new Date(date);
  return isNaN(d.getTime()) ? undefined : d.toISOString();
};

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

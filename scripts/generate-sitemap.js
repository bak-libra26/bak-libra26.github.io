/**
 * @file generate-sitemap.js
 * @description 빌드 시 sitemap.xml을 자동 생성하는 스크립트.
 *
 * src/assets/posts 디렉토리의 마크다운 파일들을 재귀적으로 탐색하여
 * 각 게시글의 frontmatter 메타데이터(created_date, last_modified_date, visibility)를
 * 파싱한 후, 정적 페이지 + 카테고리 페이지 + 게시글 페이지를 포함하는
 * sitemap.xml을 dist/ 디렉토리에 생성한다.
 * visibility가 'hidden'인 게시글은 사이트맵에서 제외된다.
 */
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/** @constant {string} 사이트 기본 URL */
const SITE_URL = 'https://bak-libra26.co.kr';
/** @constant {string} 마크다운 게시글이 위치하는 디렉토리 */
const POSTS_DIR = path.resolve('src/assets/posts');
/** @constant {string} 생성될 sitemap.xml의 출력 경로 */
const OUTPUT = path.resolve('dist/sitemap.xml');

/**
 * 지정된 디렉토리에서 모든 마크다운(.md) 파일을 재귀적으로 수집한다.
 * 숨김 디렉토리(. 으로 시작하는)는 건너뛴다.
 * @param {string} dir - 탐색할 디렉토리 경로
 * @returns {string[]} 마크다운 파일의 절대 경로 배열
 */
function collectMarkdownFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.')) continue;
      results.push(...collectMarkdownFiles(full));
    } else if (entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

/**
 * 마크다운 파일에서 YAML frontmatter 메타데이터를 파싱한다.
 * --- 구분자 사이의 YAML을 추출하여 JavaScript 객체로 변환한다.
 * @param {string} filePath - 마크다운 파일 경로
 * @returns {Object|null} 파싱된 메타데이터 객체 또는 null (파싱 실패 시)
 */
function parseMetadata(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const match = raw.match(/^---[\s\S]*?---\s*/);
  if (!match) return null;
  const text = match[0].replace(/^---\s*/, '').replace(/---\s*$/, '');
  try {
    return yaml.load(text);
  } catch {
    return null;
  }
}

/**
 * 사이트맵 생성 메인 함수.
 * 정적 페이지, 카테고리/서브카테고리 페이지, 게시글 페이지를 모두 수집하여
 * sitemap.xml 형식으로 조합한 뒤 파일로 저장한다.
 */
function run() {
  const files = collectMarkdownFiles(POSTS_DIR);
  const categories = new Set();
  const subcategories = new Set();
  let skipped = 0;

  // Static pages
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/posts', priority: '0.9', changefreq: 'daily' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
  ];

  // Post pages
  const postEntries = files
    .map((f) => {
      const meta = parseMetadata(f);
      if (!meta) {
        skipped++;
        console.warn(`[sitemap] SKIP (no metadata): ${f}`);
        return null;
      }
      if (meta.visibility === 'hidden') return null;
      const relative = f.replace(POSTS_DIR + '/', '').replace(/\.md$/, '');
      const parts = relative.split('/');
      const lastmod = meta.last_modified_date
        ? new Date(meta.last_modified_date).toISOString().slice(0, 10)
        : meta.created_date
          ? new Date(meta.created_date).toISOString().slice(0, 10)
          : new Date().toISOString().slice(0, 10);

      // Track categories
      if (parts.length >= 2) categories.add(parts[0]);
      if (parts.length >= 3) subcategories.add(`${parts[0]}/${parts[1]}`);

      return {
        url: `/posts/${parts.map(encodeURIComponent).join('/')}`,
        lastmod,
        priority: '0.7',
        changefreq: 'weekly',
      };
    })
    .filter(Boolean);

  // Category pages (e.g. /posts/개발)
  const categoryPages = [...categories].map((cat) => ({
    url: `/posts/${encodeURIComponent(cat)}`,
    priority: '0.6',
    changefreq: 'weekly',
  }));

  // Subcategory pages (e.g. /posts/개발/백엔드)
  const subcategoryPages = [...subcategories].map((sub) => ({
    url: `/posts/${sub.split('/').map(encodeURIComponent).join('/')}`,
    priority: '0.6',
    changefreq: 'weekly',
  }));

  const urls = [...staticPages, ...categoryPages, ...subcategoryPages, ...postEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.url}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, xml, 'utf-8');
  console.log(`[sitemap] ${urls.length} URLs → ${OUTPUT}${skipped > 0 ? ` (${skipped} skipped)` : ''}`);
}

run();

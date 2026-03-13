import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const SITE_URL = 'https://bak-libra26.co.kr';
const POSTS_DIR = path.resolve('src/assets/posts');
const OUTPUT = path.resolve('dist/sitemap.xml');

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

  const urls = [...staticPages, ...categoryPages, ...postEntries];

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

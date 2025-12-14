import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://bak-libra26.github.io';
const SITE_TITLE = 'Dev | baklibra26';
const SITE_DESCRIPTION = '2년차 백엔드 개발자로서, 공부한 것을 정리한 블로그입니다.';
const POSTS_DIR = path.join(__dirname, '../posts');
const PUBLIC_DIR = path.join(__dirname, '../public');

// Helper to parse frontmatter (same as sitemap logic)
function parseFrontmatter(text) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = text.match(frontmatterRegex);
    if (!match) return { metadata: {}, content: text };

    const frontmatterBlock = match[1];
    const content = match[2].trim();
    const metadata = {};

    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            metadata[key.trim()] = valueParts.join(':').trim();
        }
    });

    return { metadata, content };
}

// Helper to recursively get files
function getFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getFiles(filePath, fileList);
        } else {
            if (file.endsWith('.md')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

function generateFeed() {
    console.log('Generating RSS feed...');

    const items = getFiles(POSTS_DIR).map(file => {
        const rawContent = fs.readFileSync(file, 'utf-8');
        const { metadata, content } = parseFrontmatter(rawContent);

        const relativePath = path.relative(POSTS_DIR, file);
        const id = relativePath.replace(/\.md$/, '');
        const url = `${BASE_URL}/posts/${id}`;

        const title = metadata.title || id.split('/').pop().replace(/_/g, ' ');
        const dateStr = metadata.date || metadata['created-date'] || new Date().toISOString();
        const pubDate = new Date(dateStr).toUTCString();
        const summary = metadata.summary || content.slice(0, 150) + '...';

        return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${summary}]]></description>
    </item>`;
    });

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${BASE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>ko</language>
    ${items.join('')}
  </channel>
</rss>`;

    fs.writeFileSync(path.join(PUBLIC_DIR, 'feed.xml'), rss);
    console.log(`RSS Feed generated at ${path.join(PUBLIC_DIR, 'feed.xml')} with ${items.length} items.`);
}

generateFeed();

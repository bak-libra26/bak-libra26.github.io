import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://bak-libra26.github.io';
const POSTS_DIR = path.join(__dirname, '../posts');
const PUBLIC_DIR = path.join(__dirname, '../public');

// Helper to recursively get files
function getFiles(dir, fileList = []) {
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

function generateSitemap() {
    console.log('Generating sitemap...');

    if (!fs.existsSync(POSTS_DIR)) {
        console.error(`Posts directory not found at ${POSTS_DIR}`);
        return;
    }

    const files = getFiles(POSTS_DIR);

    const urls = files.map(file => {
        // Convert absolute path to relative path from POSTS_DIR
        const relativePath = path.relative(POSTS_DIR, file);
        // Remove .md extension
        const id = relativePath.replace(/\.md$/, '');
        // Construct URL: /posts/category/id
        const url = `${BASE_URL}/posts/${id}`;

        // Get last modified time
        const stats = fs.statSync(file);
        const lastMod = stats.mtime.toISOString().split('T')[0];

        return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    // Add static pages
    const staticPages = [
        { url: `${BASE_URL}/`, priority: '1.0' },
        { url: `${BASE_URL}/posts`, priority: '0.9' },
    ];

    const staticUrls = staticPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <changefreq>daily</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${urls.join('')}
</urlset>`;

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
    console.log(`Sitemap generated at ${path.join(PUBLIC_DIR, 'sitemap.xml')} with ${urls.length + staticPages.length} URLs.`);
}

generateSitemap();

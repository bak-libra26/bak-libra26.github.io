import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '../posts');

// Helper to parse frontmatter
function parseFrontmatter(text) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = text.match(frontmatterRegex);
    if (!match) return { metadata: {}, content: text };

    const frontmatterBlock = match[1];
    const metadata = {};

    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            metadata[key.trim()] = valueParts.join(':').trim();
        }
    });

    return { metadata };
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

function generateList() {
    const files = getFiles(POSTS_DIR);
    const posts = files.map(file => {
        const rawContent = fs.readFileSync(file, 'utf-8');
        const { metadata } = parseFrontmatter(rawContent);

        const relativePath = path.relative(POSTS_DIR, file);
        // Clean up title logic similar to other scripts
        const id = relativePath.replace(/\.md$/, '');
        // Use title from metadata, or filename derived title
        const title = metadata.title || id.split('/').pop().replace(/_/g, ' ');
        const dateStr = metadata.date || metadata['created_date'] || metadata['created-date'];

        return {
            title,
            date: dateStr ? new Date(dateStr) : null,
            originalDate: dateStr || 'N/A',
            path: relativePath
        };
    });

    // Sort by date descending
    posts.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return b.date - a.date;
    });

    console.log('# 블로그 포스트 목록\n');
    console.log('| 날짜 | 제목 |');
    console.log('|---|---|');
    posts.forEach(post => {
        const dateStr = post.date ? post.date.toISOString().split('T')[0] : post.originalDate;
        console.log(`| ${dateStr} | ${post.title} |`);
    });
}

generateList();

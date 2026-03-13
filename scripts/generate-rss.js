import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Feed } from 'feed';

const SITE_URL = 'https://bak-libra26.co.kr';
const POSTS_DIR = path.resolve('src/assets/posts');
const DIST = path.resolve('dist');

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

function parsePost(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const match = raw.match(/^---[\s\S]*?---\s*/);
  if (!match) return null;
  const text = match[0].replace(/^---\s*/, '').replace(/---\s*$/, '');
  try {
    const meta = yaml.load(text);
    if (!meta || meta.visibility === 'hidden') return null;
    const relative = filePath.replace(POSTS_DIR + '/', '').replace(/\.md$/, '');
    const title = relative.split('/').pop();
    const tags = Array.isArray(meta.tags)
      ? meta.tags
      : typeof meta.tags === 'string'
        ? meta.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : [];
    return {
      title,
      url: `${SITE_URL}/posts/${relative.split('/').map(encodeURIComponent).join('/')}`,
      date: new Date(meta.created_date || Date.now()),
      description: meta.summary || title,
      category: relative.split('/').slice(0, -1).join(' > '),
      tags,
    };
  } catch {
    return null;
  }
}

function run() {
  const author = {
    name: 'sim.junghun',
    email: 'bak-libra26@gmail.com',
    link: SITE_URL,
  };

  const feed = new Feed({
    title: 'sim.junghun — 개발 블로그',
    description: '백엔드 엔지니어의 기술 블로그 — Spring, Java, 인프라, 사이드 프로젝트',
    id: SITE_URL,
    link: SITE_URL,
    language: 'ko',
    image: `${SITE_URL}/images/og-default.png`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} sim.junghun`,
    feedLinks: {
      rss2: `${SITE_URL}/feed.xml`,
      atom: `${SITE_URL}/atom.xml`,
    },
    author,
  });

  const files = collectMarkdownFiles(POSTS_DIR);
  const parsed = files.map((f) => {
    const post = parsePost(f);
    if (!post) console.warn(`[rss] SKIP: ${f}`);
    return post;
  });
  const posts = parsed.filter(Boolean);
  const skipped = files.length - posts.length;
  posts.sort((a, b) => b.date - a.date);

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      date: post.date,
      category: post.tags.map((t) => ({ name: t })),
      author: [author],
    });
  }

  fs.mkdirSync(DIST, { recursive: true });
  fs.writeFileSync(path.join(DIST, 'feed.xml'), feed.rss2(), 'utf-8');
  fs.writeFileSync(path.join(DIST, 'atom.xml'), feed.atom1(), 'utf-8');
  console.log(`[rss] ${posts.length} items → feed.xml + atom.xml${skipped > 0 ? ` (${skipped} skipped)` : ''}`);
}

run();

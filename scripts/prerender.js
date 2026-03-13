/**
 * @file prerender.js
 * @description 빌드 타임에 SPA 페이지를 정적 HTML로 사전 렌더링하는 스크립트.
 *
 * dist/ 디렉토리에 로컬 서버를 띄우고 Puppeteer로 각 라우트를 방문하여
 * React가 렌더링한 완전한 HTML을 다시 dist/에 저장한다.
 * 이를 통해 검색 엔진 크롤러가 실제 콘텐츠를 볼 수 있게 된다.
 * Google Ads, Analytics 등 외부 리소스는 렌더링 속도를 위해 차단한다.
 */
import fs from 'fs';
import path from 'path';
import { createServer } from 'http';
import yaml from 'js-yaml';

/** @constant {string} 빌드 결과물이 위치하는 디렉토리 */
const DIST = path.resolve('dist');
/** @constant {string} 마크다운 게시글이 위치하는 디렉토리 */
const POSTS_DIR = path.resolve('src/assets/posts');
/** @constant {number} 로컬 서버 포트 번호 */
const PORT = 45678;

// ── 사전 렌더링할 라우트 수집 ──

/**
 * 디렉토리에서 마크다운 파일을 재귀적으로 수집한다.
 * @param {string} dir - 탐색 시작 디렉토리
 * @returns {string[]} 마크다운 파일 절대 경로 배열
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
 * 마크다운 파일의 frontmatter에서 visibility 속성만 추출한다.
 * @param {string} filePath - 마크다운 파일 경로
 * @returns {string|null} visibility 값 ('hidden' 등) 또는 null
 */
function parseVisibility(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const match = raw.match(/^---[\s\S]*?---\s*/);
  if (!match) return null;
  const text = match[0].replace(/^---\s*/, '').replace(/---\s*$/, '');
  try {
    return yaml.load(text)?.visibility;
  } catch {
    return null;
  }
}

/**
 * 사전 렌더링할 모든 라우트 목록을 생성한다.
 * 정적 페이지(/, /posts, /about)와 각 게시글의 라우트를 포함한다.
 * visibility가 'hidden'인 게시글은 제외된다.
 * @returns {string[]} 라우트 경로 배열 (예: ['/', '/posts', '/posts/개발/...'])
 */
function getRoutes() {
  const routes = ['/', '/posts', '/about'];

  const files = collectMarkdownFiles(POSTS_DIR);
  for (const f of files) {
    if (parseVisibility(f) === 'hidden') continue;
    const relative = f.replace(POSTS_DIR + '/', '').replace(/\.md$/, '');
    const encoded = relative.split('/').map(encodeURIComponent).join('/');
    routes.push(`/posts/${encoded}`);
  }

  return routes;
}

// ── dist/ 정적 파일 서버 ──

/**
 * dist/ 디렉토리를 서빙하는 간단한 HTTP 서버를 시작한다.
 * 파일이 존재하지 않으면 SPA 폴백으로 index.html을 반환한다.
 * @returns {Promise<import('http').Server>} 시작된 HTTP 서버 인스턴스
 */
function serveDist() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = path.join(DIST, decodeURIComponent(req.url));

      // SPA fallback: if not a file, serve index.html
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(DIST, 'index.html');
      }

      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
        '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff',
        '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json',
      };

      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(PORT, () => resolve(server));
  });
}

// ── 각 라우트 사전 렌더링 ──

/** @type {import('http').Server|undefined} 실행 중인 로컬 서버 참조 (에러 시 정리용) */
let _server;

/**
 * 사전 렌더링 메인 함수.
 * 로컬 서버를 띄우고, Puppeteer 브라우저를 실행하여 각 라우트를 순회하며
 * 렌더링된 HTML을 파일로 저장한다. 각 페이지에 prerender-status 메타 태그를 주입한다.
 */
async function run() {
  _server = await serveDist();
  const routes = getRoutes();
  console.log(`[prerender] ${routes.length} routes to render`);

  const { default: puppeteer } = await import('puppeteer');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let rendered = 0;
  let errors = 0;

  for (const route of routes) {
    const page = await browser.newPage();

    // Block external resources that slow down rendering
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      if (
        url.includes('googlesyndication') ||
        url.includes('googletagmanager') ||
        url.includes('google-analytics') ||
        url.includes('fonts.googleapis') ||
        url.includes('fonts.gstatic') ||
        url.includes('font-awesome')
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 15000,
      });

      // Wait for React to render content
      await page.waitForSelector('#root > *', { timeout: 10000 });
      // Small extra wait for lazy components
      await new Promise((r) => setTimeout(r, 500));

      let html = await page.content();

      // Inject a marker so we know this page was prerendered
      html = html.replace(
        '</head>',
        '<meta name="prerender-status" content="200" />\n</head>'
      );

      // Determine output path
      const decoded = decodeURIComponent(route);
      const outDir = path.join(DIST, decoded === '/' ? '' : decoded);
      const outFile = path.join(outDir, 'index.html');
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, html, 'utf-8');

      rendered++;
      if (rendered % 10 === 0 || rendered === routes.length) {
        console.log(`[prerender] ${rendered}/${routes.length}`);
      }
    } catch (err) {
      errors++;
      console.warn(`[prerender] SKIP ${route} → ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  _server.close();
  console.log(`[prerender] Done — ${rendered}/${routes.length} pages rendered${errors > 0 ? `, ${errors} errors` : ''}`);
}

run().catch((err) => {
  console.error('[prerender] Fatal:', err);
  _server?.close();
  process.exit(1);
});

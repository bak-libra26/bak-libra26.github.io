/**
 * prerender.js — Build-time static HTML generation for SPA pages.
 *
 * Spins up a local server on dist/, visits each route with Puppeteer,
 * and writes the fully-rendered HTML back to dist/ so crawlers see real content.
 */
import fs from 'fs';
import path from 'path';
import { createServer } from 'http';
import yaml from 'js-yaml';

const DIST = path.resolve('dist');
const POSTS_DIR = path.resolve('src/assets/posts');
const PORT = 45678;

// ── Collect all routes to prerender ──

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

// ── Simple static file server for dist/ ──

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

// ── Prerender each route ──

async function run() {
  const routes = getRoutes();
  console.log(`[prerender] ${routes.length} routes to render`);

  const server = await serveDist();

  // Dynamic import puppeteer (devDependency)
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
  server.close();
  console.log(`[prerender] Done — ${rendered}/${routes.length} pages rendered${errors > 0 ? `, ${errors} errors` : ''}`);
}

run().catch((err) => {
  console.error('[prerender] Fatal:', err);
  process.exit(1);
});

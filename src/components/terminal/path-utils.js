import { ROOT, POSTS_ROOT, ABOUT, ROUTE_MAP } from './data/constants.js';

export function resolve(cwd, input) {
  let path = input.replace(/\\ /g, ' ');
  if (path === '~' || path === '') return ROOT;
  if (path.startsWith('~/')) path = '/' + path.slice(2);
  else if (!path.startsWith('/')) path = cwd + '/' + path;
  const parts = path.split('/').filter(Boolean);
  const result = [];
  for (const p of parts) {
    if (p === '..') { if (result.length > 0) result.pop(); }
    else if (p !== '.') result.push(p);
  }
  return '/' + result.join('/');
}

export function splitCommand(text) {
  const parts = [];
  let current = '';
  let escaped = false;
  let inQuote = false;
  let quoteChar = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (escaped) { current += ch; escaped = false; continue; }
    if (ch === '\\') { escaped = true; current += ch; continue; }
    if (!inQuote && (ch === '"' || ch === "'")) { inQuote = true; quoteChar = ch; continue; }
    if (inQuote && ch === quoteChar) { inQuote = false; continue; }
    if (!inQuote && ch === ' ') {
      if (current) parts.push(current);
      current = '';
      continue;
    }
    current += ch;
  }
  if (current) parts.push(current);
  return parts.map((p) => p.replace(/\\ /g, ' '));
}

export function parseArgs(args, { boolFlags = [], valueFlags = [] } = {}) {
  const bools = new Set(boolFlags);
  const values = new Set(valueFlags);
  const flags = {};
  const rest = [];
  for (let i = 0; i < args.length; i++) {
    if (values.has(args[i]) && i + 1 < args.length) {
      flags[args[i]] = args[i + 1]; i++;
    } else if (bools.has(args[i])) {
      flags[args[i]] = true;
    } else if (args[i].startsWith('-')) {
      return { flags, path: rest.join(' '), error: args[i] };
    } else {
      rest.push(args[i]);
    }
  }
  return { flags, path: rest.join(' '), error: null };
}

export function resolveFileArg(cwd, arg, vfs) {
  const target = resolve(cwd, arg);
  if (vfs.isFile(target)) return target;

  const cwdNode = vfs.getNode(cwd);
  if (cwdNode && typeof cwdNode === 'object') {
    const match = Object.keys(cwdNode).find((k) =>
      k === arg || k.startsWith(arg) || k.toLowerCase().includes(arg.toLowerCase())
    );
    if (match && (cwdNode[match] === null || typeof cwdNode[match] === 'string')) return cwd + '/' + match;
  }
  return null;
}

export function displayPath(absPath) {
  if (absPath === '/') return '/';
  return absPath;
}

export function getSyncRoute(absPath) {
  if (ROUTE_MAP[absPath]) return ROUTE_MAP[absPath];
  if (absPath.startsWith(POSTS_ROOT + '/')) return absPath;
  return null;
}

export function cwdFromPathname(pathname, vfs) {
  if (!pathname) return ROOT;

  if (pathname.startsWith('/posts/')) {
    const rel = decodeURIComponent(pathname.slice('/posts/'.length));
    const asFile = POSTS_ROOT + '/' + rel + '.md';
    const asFileNode = vfs.getNode(asFile);
    if (asFileNode === null || typeof asFileNode === 'string') {
      const lastSlash = rel.lastIndexOf('/');
      const dir = lastSlash >= 0 ? POSTS_ROOT + '/' + rel.slice(0, lastSlash) : POSTS_ROOT;
      return vfs.isDir(dir) ? dir : POSTS_ROOT;
    }
    const asDir = POSTS_ROOT + '/' + rel;
    if (vfs.isDir(asDir)) return asDir;
  }

  if (pathname === '/posts') return POSTS_ROOT;
  if (pathname === '/about') return ABOUT;

  return ROOT;
}

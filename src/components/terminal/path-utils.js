/**
 * @file path-utils.js - 터미널 경로 유틸리티 함수 모음
 *
 * 가상 파일 시스템에서 사용하는 경로 관련 함수들을 제공한다:
 *   - resolve: 상대/절대 경로를 절대 경로로 변환 (~, .., . 처리)
 *   - splitCommand: 명령어 문자열을 토큰으로 분리 (인용부호, 이스케이프 처리)
 *   - parseArgs: 인자 배열에서 플래그와 경로를 분리
 *   - resolveFileArg: 파일 인자를 절대 경로로 해석 (퍼지 매칭 지원)
 *   - displayPath: 표시용 경로 문자열 생성
 *   - getSyncRoute: 가상 경로를 실제 라우트 URL로 변환
 *   - cwdFromPathname: 브라우저 pathname에서 초기 cwd를 결정
 */

import { ROOT, POSTS_ROOT, ABOUT, ROUTE_MAP } from './data/constants.js';

/**
 * 상대/절대 경로를 절대 경로로 변환한다.
 * ~는 루트(/), ..는 상위 디렉토리, .은 현재 디렉토리로 처리한다.
 * @param {string} cwd - 현재 작업 디렉토리
 * @param {string} input - 사용자 입력 경로
 * @returns {string} 정규화된 절대 경로
 */
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

/**
 * 명령어 문자열을 토큰 배열로 분리한다.
 * 따옴표(", ') 안의 공백은 분리하지 않으며, 백슬래시 이스케이프를 처리한다.
 * @param {string} text - 명령어 문자열
 * @returns {string[]} 토큰 배열
 */
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

/**
 * 인자 배열에서 플래그와 경로(나머지 인자)를 분리한다.
 * 인식되지 않는 플래그(-로 시작)를 만나면 error를 반환한다.
 * @param {string[]} args - 인자 배열
 * @param {Object} options - { boolFlags: 불리언 플래그 목록, valueFlags: 값을 받는 플래그 목록 }
 * @returns {{ flags: Object, path: string, error: string|null }}
 */
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

/**
 * 파일 인자를 절대 경로로 해석한다.
 * 정확한 경로가 없으면 현재 디렉토리에서 퍼지 매칭(접두사, 부분 일치)을 시도한다.
 * @param {string} cwd - 현재 작업 디렉토리
 * @param {string} arg - 파일 인자
 * @param {VirtualFS} vfs - 가상 파일 시스템 인스턴스
 * @returns {string|null} 절대 경로 또는 null
 */
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

/** 절대 경로를 터미널 표시용 문자열로 변환한다 */
export function displayPath(absPath) {
  if (absPath === '/') return '/';
  return absPath;
}

/** 가상 경로를 실제 React Router 경로로 변환한다. 매핑이 없으면 null. */
export function getSyncRoute(absPath) {
  if (ROUTE_MAP[absPath]) return ROUTE_MAP[absPath];
  if (absPath.startsWith(POSTS_ROOT + '/')) return absPath;
  return null;
}

/**
 * 브라우저 URL pathname을 기반으로 터미널의 초기 작업 디렉토리(cwd)를 결정한다.
 * /posts/카테고리/글제목 → 해당 글이 있는 디렉토리로 설정
 * /posts → POSTS_ROOT, /about → ABOUT, 나머지 → ROOT
 */
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

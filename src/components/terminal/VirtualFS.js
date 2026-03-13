/**
 * @file VirtualFS.js - 가상 파일 시스템 (Virtual File System)
 *
 * 블로그의 게시글 구조를 파일 시스템 트리로 변환하여
 * 터미널에서 ls, cd, cat 등의 명령어를 사용할 수 있게 한다.
 *
 * 트리 구조:
 *   / (루트)
 *   ├── .bashrc, .secret, todo.txt, stack.yml, links.txt
 *   ├── posts/
 *   │   ├── 카테고리/
 *   │   │   └── 글제목.md (null=일반파일, 'image'=이미지, 'hidden'=비공개글)
 *   ├── about/
 *   └── games/   (실행 가능한 스크립트들)
 *
 * 노드 값 규칙:
 *   - object: 디렉토리
 *   - null: 일반 파일
 *   - 'image': 이미지 파일
 *   - 'script': 실행 가능한 스크립트
 *   - 'hidden': 비공개(draft) 글
 *
 * 싱글톤으로 export되어 앱 전체에서 하나의 인스턴스를 공유한다.
 *
 * @exports VirtualFS (싱글톤 인스턴스)
 */

import PostUtil from '../../utils/post-util.js';
import { POSTS_ROOT } from './data/constants.js';

// 모듈 레벨 싱글톤: PostUtil.allPosts는 빌드 타임에 정적으로 결정되므로 한 번만 생성한다
const _fs = (() => {
  const posts = {};
  for (const post of PostUtil.allPosts) {
    const parts = post.path.split('/');
    let node = posts;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i === parts.length - 1) {
        const fileName = post.isHidden ? '.' + part + '.md' : part + '.md';
        node[fileName] = post.isHidden ? 'hidden' : null;
      } else {
        if (!node[part]) node[part] = {};
        node = node[part];
      }
    }
    // Add image files referenced in this post's content
    const imgRegex = /!\[.*?\]\(([^)]+\.(png|jpe?g|gif|svg|webp))\)/gi;
    let match;
    while ((match = imgRegex.exec(post.content)) !== null) {
      const imgName = match[1];
      const basename = imgName.split('/').pop();
      node[basename] = 'image';
    }
  }
  return {
    '.bashrc': null,
    '.secret': null,
    'todo.txt': null,
    'stack.yml': null,
    'links.txt': null,
    posts,
    about: {
      'README.md': null,
      '.easter-egg': null,
      'synopsis.txt': null,
      'core.yml': null,
      'experience.yml': null,
      'stack.yml': null,
      'education.yml': null,
      'links.txt': null,
    },
    games: {
      'snake.sh': 'script',
      'cmatrix.sh': 'script',
      '2048.sh': 'script',
      'blocks.sh': 'script',
      'pipes.sh': 'script',
      'README.md': null,
    },
  };
})();

// 절대 경로 → Post 객체 매핑 (cat/open 명령에서 사용)
const _postMap = (() => {
  const map = {};
  for (const post of PostUtil.allPosts) {
    const parts = post.path.split('/');
    const dir = parts.slice(0, -1).join('/');
    const file = post.isHidden ? '.' + parts[parts.length - 1] + '.md' : parts[parts.length - 1] + '.md';
    map[POSTS_ROOT + '/' + (dir ? dir + '/' : '') + file] = post;
  }
  return map;
})();

/**
 * VirtualFS - 가상 파일 시스템 클래스
 * 트리 구조를 탐색하고 노드 유형을 판별하는 메서드를 제공한다.
 */
class VirtualFS {
  constructor() {
    this.tree = _fs;
    this.postMap = _postMap;
  }

  /** 절대 경로에 해당하는 노드를 반환한다. 존재하지 않으면 undefined. */
  getNode(absPath) {
    if (absPath === '/' || absPath === '') return this.tree;
    const parts = absPath.split('/').filter(Boolean);
    let node = this.tree;
    for (const p of parts) {
      if (node === null || typeof node !== 'object' || !(p in node)) return undefined;
      node = node[p];
    }
    return node;
  }

  /** 디렉토리인지 확인한다 (object 타입) */
  isDir(absPath) { const n = this.getNode(absPath); return n !== null && n !== undefined && typeof n === 'object'; }
  /** 파일인지 확인한다 (null, 'image', 'script', 'hidden') */
  isFile(absPath) { const n = this.getNode(absPath); return n === null || n === 'image' || n === 'script' || n === 'hidden'; }
  /** 이미지 파일인지 확인한다 */
  isImage(absPath) { return this.getNode(absPath) === 'image'; }
  /** 실행 가능한 스크립트인지 확인한다 */
  isScript(absPath) { return this.getNode(absPath) === 'script'; }
  /** 비공개(draft) 글인지 확인한다 */
  isHidden(absPath) { return this.getNode(absPath) === 'hidden'; }

  /** 절대 경로에 대응하는 Post 객체를 반환한다 */
  getPost(absPath) {
    return this.postMap[absPath] || null;
  }

  /** 디렉토리 하위의 모든 파일 경로를 재귀적으로 수집한다 */
  collectFiles(node, path) {
    const results = [];
    if (typeof node !== 'object' || node === null) return results;
    for (const [name, child] of Object.entries(node)) {
      const fullPath = path + '/' + name;
      if (child === null || typeof child === 'string') results.push(fullPath);
      else if (typeof child === 'object') results.push(...this.collectFiles(child, fullPath));
    }
    return results;
  }

  /** 디렉토리 하위의 파일 개수를 재귀적으로 카운트한다 */
  countFiles(node) {
    if (typeof node !== 'object' || node === null) return 0;
    let count = 0;
    for (const child of Object.values(node)) {
      if (child === null || typeof child === 'string') count++;
      else if (typeof child === 'object') count += this.countFiles(child);
    }
    return count;
  }
}

export default new VirtualFS();

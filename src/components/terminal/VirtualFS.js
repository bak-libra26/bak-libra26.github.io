import PostUtil from '../../utils/post-util.js';
import { POSTS_ROOT } from './data/constants.js';

// Module-level singletons — PostUtil.allPosts is static (build-time), no need to rebuild per instance
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

class VirtualFS {
  constructor() {
    this.tree = _fs;
    this.postMap = _postMap;
  }

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

  isDir(absPath) { const n = this.getNode(absPath); return n !== null && n !== undefined && typeof n === 'object'; }
  isFile(absPath) { const n = this.getNode(absPath); return n === null || n === 'image' || n === 'script' || n === 'hidden'; }
  isImage(absPath) { return this.getNode(absPath) === 'image'; }
  isScript(absPath) { return this.getNode(absPath) === 'script'; }
  isHidden(absPath) { return this.getNode(absPath) === 'hidden'; }

  getPost(absPath) {
    return this.postMap[absPath] || null;
  }

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

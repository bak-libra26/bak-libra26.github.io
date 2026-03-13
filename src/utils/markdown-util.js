import yaml from 'js-yaml';
import { slug } from 'github-slugger';

const FRONTMATTER_RE = /^---[\s\S]*?---\s*/;

const MarkdownUtil = {
  metadata(raw) {
    const match = raw.match(FRONTMATTER_RE);
    if (!match) return {};

    const text = match[0].replace(/^---\s*/, '').replace(/---\s*$/, '');
    return yaml.load(text) || {};
  },

  content(raw) {
    return raw.replace(FRONTMATTER_RE, '');
  },

  toc({ post }) {
    const content = post.content;
    const toc = [];
    const matches = content.matchAll(/^(#{2,5})\s+(.*)$/gm);

    for (const match of matches) {
      const level = match[1].length;
      const fullText = match[2];

      // Handle markdown link syntax: [title](#anchor)
      const linkMatch = fullText.match(/^\[(.*?)]\(.*?\)$/);
      const text = linkMatch ? linkMatch[1] : fullText.trim();

      toc.push({ level, text, slug: slug(text) });
    }

    return toc;
  },
};

export default MarkdownUtil;

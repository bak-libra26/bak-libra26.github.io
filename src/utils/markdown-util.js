import yaml from 'js-yaml';
import * as slugger from "github-slugger";

const MarkdownUtil = {
    metadata(raw) {
        const text = raw.match(/^---[\s\S]*?---\s*/)[0]
                        .replace(/^---\s*/, '')
                        .replace(/---\s*$/, '');

        const metadata = yaml.load(text);

        return metadata || {};
    },

    content(raw) {
        return raw.replace(/^---[\s\S]*?---\s*/, '');
    },

    toc({post}) {
        const content = post.content;

        const toc = [];
        const matches = content.matchAll(/^(#{2,5})\s+(.*)$/gm);

        for (const match of matches) {
            const hashes = match[1];      // "###"
            const level = hashes.length;
            const fullText = match[2];    // "[제목](#anchor)" 또는 "제목"

            const linkMatch = fullText.match(/^\[(.*?)\]\(.*?\)$/);
            const text = linkMatch ? linkMatch[1] : fullText.trim();

            const slug = slugger.slug(text);

            toc.push({ level, text, slug });
        }

        return toc;
    }
}

export default MarkdownUtil;
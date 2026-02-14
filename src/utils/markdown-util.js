import yaml from 'js-yaml';

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
}

export default MarkdownUtil;

// Utility to load markdown posts directly from the filesystem

export function getPosts() {
    // 1. Glob all markdown files in the /posts directory
    // eager: true -> loads them synchronously so we can use them immediately
    // query: '?raw' -> loads the content as a raw string
    const modules = import.meta.glob('/posts/**/*.md', { query: '?raw', eager: true });

    const posts = [];

    for (const path in modules) {
        const rawContent = modules[path].default;

        // 2. Parse ID (slug) and Category from path
        // path example: /posts/devops/nexus/Some_File.md
        // We want ID: devops/nexus/Some_File
        // We want Category: devops/nexus

        // Find the relative path part after '/posts/'
        const relativePath = path.slice(path.indexOf('/posts/') + 7);

        // Remove extension for ID
        const id = relativePath.replace(/\.md$/, '').normalize('NFC');

        // Category is the directory path
        const lastSlashIndex = id.lastIndexOf('/');
        const category = lastSlashIndex !== -1 ? id.substring(0, lastSlashIndex) : 'General';

        // 3. Parse Frontmatter
        const { metadata, content } = parseFrontmatter(rawContent);

        // 4. Construct Post Object
        const post = {
            id,
            title: metadata.title || id.split('/').pop().replace(/_/g, ' '), // Fallback to filename: replace _ with space
            date: metadata.date || metadata['created-date'] || metadata['created_date'] || metadata['last-modified-date'] || metadata['last_modified_date'] || 'No Date',
            summary: metadata.summary || content.slice(0, 150) + '...', // Fallback summary
            category: category, // Keep the raw directory structure as category
            content,
            ...metadata // Spread other metadata
        };

        posts.push(post);
    }

    // 5. Sort by date (descending)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Helper to parse simple YAML-like frontmatter
function parseFrontmatter(text) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = text.match(frontmatterRegex);

    if (!match) {
        return { metadata: {}, content: text };
    }

    const frontmatterBlock = match[1];
    const content = match[2].trim();
    const metadata = {};

    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            metadata[key.trim()] = valueParts.join(':').trim();
        }
    });

    return { metadata, content };
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Export a pre-calculated array for easy consumption
export const posts = getPosts();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, '../posts');
const destDir = path.resolve(__dirname, '../dist/posts');

function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

try {
    if (fs.existsSync(sourceDir)) {
        console.log(`Copying posts from ${sourceDir} to ${destDir}...`);
        copyDir(sourceDir, destDir);
        console.log('Posts copied successfully!');
    } else {
        console.warn(`Source directory ${sourceDir} does not exist. Skipping copy.`);
    }
} catch (err) {
    console.error('Error copying posts:', err);
    process.exit(1);
}

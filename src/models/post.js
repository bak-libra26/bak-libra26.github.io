import ReadingTimeUtil from '../utils/reading-time-util.js';

function parseDate(val) {
  if (!val) return new Date(0);
  const str = String(val);
  // Date-only strings (YYYY-MM-DD) — treat as KST
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    return new Date(str + 'T00:00:00+09:00');
  }
  return new Date(str);
}

class Post {
  constructor({ absolutePath, metadata, content }) {
    const path = absolutePath.replace('../assets/posts', '').replace(/\.md$/, '').slice(1);
    const lastSlash = path.lastIndexOf('/');

    this._path = path;
    this._title = path.slice(lastSlash + 1);
    this._content = content;
    this._summary = metadata.summary || '';
    this._visibility = metadata.visibility;
    this._categories = path.slice(0, lastSlash).split('/');
    this._readingTime = null; // lazy

    this._createdDate = parseDate(metadata.created_date);
    this._lastModifiedDate = metadata.last_modified_date ? parseDate(metadata.last_modified_date) : this._createdDate;

    if (import.meta.env.DEV) {
      if (!metadata.created_date) {
        console.warn(`[Post] missing created_date: ${path}`);
      }
      if (!this._title) {
        console.warn(`[Post] missing title: ${path}`);
      }
    }

    const rawTags = metadata.tags;
    this._tags = Array.isArray(rawTags)
      ? rawTags
      : typeof rawTags === 'string'
        ? rawTags.split(',').map((t) => t.trim()).filter(Boolean)
        : [];
  }

  get path() { return this._path; }
  get title() { return this._title; }
  get content() { return this._content; }
  get tags() { return this._tags; }
  get summary() { return this._summary; }
  get categories() { return this._categories; }
  get category() { return this._categories[0]; }
  get subcategory() { return this._categories[1]; }
  get visibility() { return this._visibility; }
  get isHidden() { return this._visibility === 'hidden'; }
  get createdDate() { return this._createdDate; }
  get lastModifiedDate() { return this._lastModifiedDate; }
  get readingTime() {
    if (this._readingTime === null) {
      this._readingTime = ReadingTimeUtil.estimate(this._content);
    }
    return this._readingTime;
  }
  get seriesKey() { return this._categories.join('/'); }
}

export default Post;

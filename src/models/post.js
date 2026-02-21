
class Post {
    constructor({
                    absolutePath, metadata, content
    }) {
        this._path = absolutePath.replace('../assets/posts', '').replace(/\.md$/, '').slice(1);

        this._title = this._path.split('/').pop();
        this._metadata = metadata;
        this._content = content;
        this._tags = metadata['tags'];
        this._summary = metadata['summary'];

        this._visibility = metadata['visibility'];
        this._createdDate = new Date(metadata['created_date']);
        this._lastModifiedDate = new Date(metadata['last_modified_date']);

        this._categories = this._path.slice(0, this._path.lastIndexOf('/')).split('/');
    }

    get path() {
        return this._path;
    }

    get title() {
        return this._title;
    }

    get content() {
        return this._content;
    }

    get metadata() {
        return this._metadata;
    }

    get tags() {
        return this._tags;
    }

    get summary() {
        return this._summary;
    }

    get categories() {
        return this._categories;
    }

    get category() {
        return this._categories[0];
    }

    get subcategory() {
        return this.categories[1];
    }

    get visibility() {
        return this._visibility;
    }

    get isHidden() {
        return this._visibility === 'hidden';
    }

    get createdDate() {
        return this._createdDate;
    }

    get lastModifiedDate() {
        return this._lastModifiedDate;
    }


}

export default Post;
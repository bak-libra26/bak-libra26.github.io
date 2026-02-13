class Post {
    constructor({
                    absolutePath, metadata, content
    }) {
        this._path = absolutePath.replace('/src/assets/posts/', '');

        this._title = this._path.split('/').pop().replace('.md', '');
        this._metadata = metadata;
        this._content = content;
        this._summary = metadata['summary'];

        this._visibility = metadata['visibility'];
        this._createdDate = new Date(metadata['created_date']);

        // TODO: 카테고리 사용 전략.
        this._categories = this._path.slice(0, this._path.lastIndexOf('/')).split('/');
    }


    get absolutePath() {
        return this._absolutePath;
    }

    get path() {
        return this._path;
    }

    get title() {
        return this._title;
    }

    get metadata() {
        return this._metadata;
    }

    get content() {
        return this._content;
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

}

export default Post;
export default class Image {
    constructor({ path, obj }) {
        // path: '../assets/posts/사이드 프로젝트/블로그/github_pages_deploy_404_routing.png'
        this._path = path;
        this._url = obj.default;

        const logical = path.replace('../assets/posts', '');
        this._path = logical.slice(0, logical.lastIndexOf('/'));  // '/사이드 프로젝트/블로그'
        this._name = logical.slice(logical.lastIndexOf('/') + 1); // 'github_pages_deploy_404_routing.png'
    }

    get path()  { return this._path; }   // '/사이드 프로젝트/블로그'
    get name()  { return this._name; }   // 'github_pages_deploy_404_routing.png'
    get src()   { return this._url; }    // <img src={...} /> 에 쓸 진짜 URL
    get path()   { return this._path; }

    get categories() {
        return this._path.split('/').slice(1);
    }
}
const HrefUtil = {
    get({baseUrl, searchParams}) {
        const query = searchParams && searchParams.toString();
        return query ? `${baseUrl}?${query}` : baseUrl;
    },

    getPostsHref({
        page, category, subcategory
    }) {
        const baseUrl = '/posts';
        const searchParams = new URLSearchParams();

        if (page) searchParams.set('page', String(page));
        if (category) searchParams.set('category', category);
        if (subcategory) searchParams.set('subcategory', subcategory);

        return HrefUtil.get({baseUrl: baseUrl, searchParams: searchParams});
    },

    getPostDetailHref({path}) {
        const baseUrl = '/posts/' + path;

        return HrefUtil.get({baseUrl: baseUrl});
    }
};

export default HrefUtil;
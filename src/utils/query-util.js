const QueryUtil = {
    get({baseUrl, searchParams}) {
        const query = searchParams.toString();
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

        return QueryUtil.get({baseUrl: baseUrl, searchParams: searchParams});
    }
};

export default QueryUtil;
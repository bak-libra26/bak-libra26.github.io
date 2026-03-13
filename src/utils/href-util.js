const HrefUtil = {
  getPostsHref({ page, category, subcategory }) {
    let href = '/posts';
    if (category && category !== '전체') {
      href += '/' + encodeURIComponent(category);
      if (subcategory) href += '/' + encodeURIComponent(subcategory);
    }
    return page > 1 ? `${href}?page=${page}` : href;
  },

  getPostDetailHref({ path }) {
    return '/posts/' + path.split('/').map(encodeURIComponent).join('/');
  },
};

export default HrefUtil;

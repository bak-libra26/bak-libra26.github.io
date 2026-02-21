import Image from "../models/image.js";

const globs = import.meta.glob('../assets/posts/**/*.png', {
    eager: true,
});

const _images = Object.entries(globs).map(([path, obj]) => {
    return new Image({ path, obj });
});

const ImageUtil = {

    findBy({ categories, name }) {
        return _images.find((img) => {
            return img.name === name & img.categories.join('/') === categories.join('/');
        });
    },

    // 필요하면 전체 리스트 반환 같은 것도 추가 가능
};

export default ImageUtil;

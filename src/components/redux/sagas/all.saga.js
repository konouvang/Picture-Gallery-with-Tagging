import getImages from './getImages.axios.saga';
import getTags from './getTags.axios.saga';
import getImagesTags from './getImagesTags.axios.saga';
import postImagesTags from './postImagesTags.axios.saga';

const allSagas = {
    'GET_IMAGES' : getImages,
    'GET_TAGS' : getTags,
    'GET_IMAGE_TAGS' : getImagesTags,
    'ADD_IMAGE_TAG' : postImagesTags,
}

export default allSagas;
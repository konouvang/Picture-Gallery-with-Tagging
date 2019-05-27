import { put } from 'redux-saga/effects';
import axios from 'axios';

function * postImagesTags(action) {
    try {
        const imageTagsResponse = yield axios.post('/images/tags/add', action.payload);
        yield put({
            type: 'SET_IMAGE_TAGS',
            payload: imageTagsResponse.data
        });
    }catch (err) {
        console.log('error postImageTags HELP', err);
    }
}

export default postImagesTags;
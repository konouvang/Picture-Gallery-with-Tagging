// Used to store the Joins table for images_tags
const imagesTagsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES_TAGS':
            return action.payload;
        default:
            return state;
    }
}

export default imagesTagsReducer;
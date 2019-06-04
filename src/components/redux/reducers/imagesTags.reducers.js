const imageTagsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGE_TAGS':
            return action.payload;
        default:
            return state;
    }
}

export default imageTagsReducer;
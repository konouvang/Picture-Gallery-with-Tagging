const currentImageReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_IMAGES_TAGS':
            return action.payload;
        default:
            return state;
    }
}

export default currentImageReducer;
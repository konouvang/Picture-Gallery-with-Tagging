// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tagsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

export default tagsReducer;

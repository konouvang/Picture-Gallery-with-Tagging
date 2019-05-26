import axios from 'axios';


const getImages = () => {
    return axios({
        method: 'GET',
        url: '/images'
        })
    }

const postImages = (imageObject) => {
    return axios.post('/images', imageObject);
}

const getTags = () => {
    return axios({
        method: 'GET',
        url: '/tags'
        })
}

const getImagesTagsJoins = () => {
    return axios({
        method: 'GET',
        url: '/images/tags/all'
    })
}


const postImagesTagsJoins = (joinsObject) => {
    return axios.post('/images/tags/add', joinsObject);
}

export {
    getImages,
    postImages,
    getTags,
    getImagesTagsJoins,
    postImagesTagsJoins
}
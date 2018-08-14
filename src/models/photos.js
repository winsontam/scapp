export const LOAD_PHOTOS = Symbol('LOAD_PHOTOS');
export const LOAD_PHOTOS_SUCCESS = Symbol('LOAD_PHOTOS_SUCCESS');
export const LOAD_PHOTOS_FAIL = Symbol('LOAD_PHOTOS_FAIL');


const initialState = {
    loading: false,
    data: [],
    error: null,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PHOTOS:
            return {
                loading: true,
                data: [],
                error: null,
            };
        case LOAD_PHOTOS_SUCCESS:
            return {
                loading: false,
                data: action.payload.data,
                error: null,
            };
        case LOAD_PHOTOS_FAIL:
            return {
                loading: false,
                data: [],
                error: 'Error while fetching photos.',
            };
        default:
            return state;
    }
};


export function loadPhotos() {
    return {
        types: [LOAD_PHOTOS, LOAD_PHOTOS_SUCCESS, LOAD_PHOTOS_FAIL],
        payload: {
            request: {
                url: '/photos',
            },
        },
    }
}

export const LOAD_ALBUMS = Symbol('LOAD_ALBUMS');
export const LOAD_ALBUMS_SUCCESS = Symbol('LOAD_ALBUMS_SUCCESS');
export const LOAD_ALBUMS_FAIL = Symbol('LOAD_ALBUMS_FAIL');


const initialState = {
    loading: false,
    data: [],
    error: null,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            return {
                loading: true,
                data: [],
                error: null,
            };
        case LOAD_ALBUMS_SUCCESS:
            return {
                loading: false,
                data: action.payload.data,
                error: null,
            };
        case LOAD_ALBUMS_FAIL:
            return {
                loading: false,
                data: [],
                error: 'Error while fetching albums.',
            };
        default:
            return state;
    }
};


export function loadAlbums() {
    return {
        types: [LOAD_ALBUMS, LOAD_ALBUMS_SUCCESS, LOAD_ALBUMS_FAIL],
        payload: {
            request: {
                url: '/albums',
            },
        },
    }
}

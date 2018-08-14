export const LOAD_POSTS = Symbol('LOAD_POSTS');
export const LOAD_POSTS_SUCCESS = Symbol('LOAD_POSTS_SUCCESS');
export const LOAD_POSTS_FAIL = Symbol('LOAD_POSTS_FAIL');


const initialState = {
    loading: false,
    data: [],
    error: null,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                loading: true,
                data: [],
                error: null,
            };
        case LOAD_POSTS_SUCCESS:
            return {
                loading: false,
                data: action.payload.data,
                error: null,
            };
        case LOAD_POSTS_FAIL:
            return {
                loading: false,
                data: [],
                error: 'Error while fetching posts.',
            };
        default:
            return state;
    }
};


export function loadPosts() {
    return {
        types: [LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAIL],
        payload: {
            request: {
                url: '/posts',
            },
        },
    }
}

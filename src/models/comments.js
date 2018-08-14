export const LOAD_COMMENTS = Symbol('LOAD_COMMENTS');
export const LOAD_COMMENTS_SUCCESS = Symbol('LOAD_COMMENTS_SUCCESS');
export const LOAD_COMMENTS_FAIL = Symbol('LOAD_COMMENTS_FAIL');


const initialState = {
    loading: false,
    data: [],
    error: null,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                loading: true,
                data: [],
                error: null,
            };
        case LOAD_COMMENTS_SUCCESS:
            return {
                loading: false,
                data: action.payload.data,
                error: null,
            };
        case LOAD_COMMENTS_FAIL:
            return {
                loading: false,
                data: [],
                error: 'Error while fetching comments.',
            };
        default:
            return state;
    }
};


export function loadComments() {
    return {
        types: [LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAIL],
        payload: {
            request: {
                url: '/comments',
            },
        },
    }
}

export const LOAD_USERS = Symbol('LOAD_USERS');
export const LOAD_USERS_SUCCESS = Symbol('LOAD_USERS_SUCCESS');
export const LOAD_USERS_FAIL = Symbol('LOAD_USERS_FAIL');


const initialState = {
    loading: false,
    data: [],
    error: null,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                loading: true,
                data: [],
                error: null,
            };
        case LOAD_USERS_SUCCESS:
            return {
                loading: false,
                data: action.payload.data,
                error: null,
            };
        case LOAD_USERS_FAIL:
            return {
                loading: false,
                data: [],
                error: 'Error while fetching users.',
            };
        default:
            return state;
    }
};


export function loadUsers() {
    return {
        types: [LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAIL],
        payload: {
            request: {
                url: '/users',
            },
        },
    }
}

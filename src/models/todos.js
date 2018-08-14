export const LOAD_TODOS = Symbol('LOAD_TODOS');
export const LOAD_TODOS_SUCCESS = Symbol('LOAD_TODOS_SUCCESS');
export const LOAD_TODOS_FAIL = Symbol('LOAD_TODOS_FAIL');


const initialState = {
    loading: false,
    data: [],
    error: null,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TODOS:
            return {
                loading: true,
                data: [],
                error: null,
            };
        case LOAD_TODOS_SUCCESS:
            return {
                loading: false,
                data: action.payload.data,
                error: null,
            };
        case LOAD_TODOS_FAIL:
            return {
                loading: false,
                data: [],
                error: 'Error while fetching todos.',
            };
        default:
            return state;
    }
};


export function loadTodos() {
    return {
        types: [LOAD_TODOS, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAIL],
        payload: {
            request: {
                url: '/todos',
            },
        },
    }
}


const initialState = {
    books: [],
    loading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_BOOKS_FETCH':
            return {
                ...state,
                loading: true,
                books: [],
                error: ''
            };
        case 'LIST_BOOKS_SUCCESS':
            return {
                ...state,
                loading: false,
                books: action.payload
            };
        case 'LIST_BOOKS_ERROR':
            return {
                ...state,
                loading: false,
                books: [],
                error: 'Error loading books'
            };

        default:
            return state;
    }
}
const initialState = {
    books: [],
    loading: false,
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_BOOKS_FETCH':
            return {
                ...state,
                loading: true,
                books: [],
                error: '',
                snackBarSMessage: '',
            };
        case 'LIST_BOOKS_SUCCESS':
            return {
                ...state,
                loading: false,
                books: action.payload,
            };
        case 'LIST_BOOKS_ERROR':
            return {
                ...state,
                loading: false,
                books: [],
                error: 'Error loading books',
            };
        case 'DELETING_BOOK':
            return {
                ...state,
                loading: true,
                snackBarMessage: '',
            };
        case 'DELETE_BOOK_SUCCESS': {
            return {
                ...state,
                loading: false,
            };
        }
        case 'DELETE_BOOK_ERROR': {
            return {
                ...state,
                loading: false,
                snackBarMessage: 'Error deleting the book, try again later',
            };
        }
        default:
            return state;
    }
};

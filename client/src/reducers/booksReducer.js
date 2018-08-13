

const initialState = {
    books: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_BOOKS_FETCH':
            return {
                ...state,
                loading: true
            };
        case 'LIST_BOOKS_SUCCESS':
            return {
                ...state,
                loading: false,
                books: action.payload
            };

        default:
            return state;
    }
}
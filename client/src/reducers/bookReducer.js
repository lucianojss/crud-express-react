
const initialState = {
    book: {},
    loading: false,
    error: '',
    editMode: false,
    saved: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'BOOK_SAVE':
            return {
                ...state,
                loading: true,
                error: ''
            };
        case 'BOOK_SAVE_SUCCESS':
            return {
                ...state,
                loading: false,
                saved: true
            };
        case 'BOOK_SAVE_ERROR':
            return {
                ...state,
                loading: false,
                error: 'Error saving book, try again later'
            };
        default:
            return state;
    }
}
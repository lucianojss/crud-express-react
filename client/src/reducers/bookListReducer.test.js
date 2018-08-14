import booksListReducer from '../../src/reducers/booksListReducer';

describe('booksListReducer', () => {
    it('should return the initial state', () => {
        expect(booksListReducer(undefined, {})).toEqual({
            books: [],
            loading: false,
            error: '',
            snackBarMessage: '',
        });
    });

    it('should handle LIST_BOOKS_FETCH', () => {
        expect(
            booksListReducer(undefined, {
                type: 'LIST_BOOKS_FETCH',
            })
        ).toEqual({
            books: [],
            loading: true,
            error: '',
            snackBarMessage: '',
        });
    });

    it('should handle LIST_BOOKS_FETCH', () => {
        expect(
            booksListReducer(undefined, {
                type: 'LIST_BOOKS_SUCCESS',
                payload: 'dummyPayload',
            })
        ).toEqual({
            books: 'dummyPayload',
            loading: false,
            error: '',
            snackBarMessage: '',
        });
    });

    it('should handle LIST_BOOKS_ERROR', () => {
        expect(
            booksListReducer(undefined, {
                type: 'LIST_BOOKS_ERROR',
            })
        ).toEqual({
            books: [],
            loading: false,
            error: 'Error loading books',
            snackBarMessage: '',
        });
    });

    it('should handle DELETING_BOOK', () => {
        expect(
            booksListReducer(undefined, {
                type: 'DELETING_BOOK',
            })
        ).toEqual({
            books: [],
            loading: true,
            error: '',
            snackBarMessage: '',
        });
    });

    it('should handle DELETE_BOOK_SUCCESS', () => {
        expect(
            booksListReducer(undefined, {
                type: 'DELETE_BOOK_SUCCESS',
            })
        ).toEqual({
            books: [],
            loading: false,
            error: '',
            snackBarMessage: '',
        });
    });

    it('should handle DELETE_BOOK_ERROR', () => {
        expect(
            booksListReducer(undefined, {
                type: 'DELETE_BOOK_ERROR',
            })
        ).toEqual({
            books: [],
            loading: false,
            error: '',
            snackBarMessage: 'Error deleting the book, try again later',
        });
    });

    it('should handle unknown state', () => {
        expect(
            booksListReducer(undefined, {
                type: 'NO_STATE',
            })
        ).toEqual({
            books: [],
            loading: false,
            error: '',
            snackBarMessage: '',
        });
    });
});

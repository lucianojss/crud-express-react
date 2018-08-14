import bookReducer from '../../src/reducers/bookReducer';

describe('bookReducer', () => {
    it('should return the initial state', () => {
        expect(bookReducer(undefined, {})).toEqual({
            book: {},
            loading: false,
            error: '',
            editMode: false,
            saved: false,
        });
    });

    it('should handle BOOK_LOADING', () => {
        expect(
            bookReducer(undefined, {
                type: 'BOOK_LOADING',
            })
        ).toEqual({
            book: {},
            loading: true,
            error: '',
            editMode: false,
            saved: false,
        });
    });

    it('should handle BOOK_SAVE_SUCCESS', () => {
        expect(
            bookReducer(undefined, {
                type: 'BOOK_SAVE_SUCCESS',
            })
        ).toEqual({
            book: {},
            loading: false,
            error: '',
            editMode: false,
            saved: true,
        });
    });

    it('should handle BOOK_SAVE_ERROR', () => {
        expect(
            bookReducer(undefined, {
                type: 'BOOK_SAVE_ERROR',
            })
        ).toEqual({
            book: {},
            loading: false,
            error: 'Error saving book, try again later',
            editMode: false,
            saved: false,
        });
    });

    it('should handle NEW_BOOK', () => {
        expect(
            bookReducer(undefined, {
                type: 'NEW_BOOK',
            })
        ).toEqual({
            book: {},
            loading: false,
            error: '',
            editMode: false,
            saved: false,
        });
    });

    it('should handle BOOK_GET_SUCCESS', () => {
        expect(
            bookReducer(undefined, {
                type: 'BOOK_GET_SUCCESS',
                payload: 'dummy',
            })
        ).toEqual({
            book: 'dummy',
            loading: false,
            error: '',
            editMode: false,
            saved: false,
        });
    });

    it('should handle BOOK_GET_ERROR', () => {
        expect(
            bookReducer(undefined, {
                type: 'BOOK_GET_ERROR',
            })
        ).toEqual({
            book: {},
            loading: false,
            error: 'Error getting this book, try again later',
            editMode: false,
            saved: false,
        });
    });
});

import fetchTimeout from '../utils/fetch';
import { apiUrl } from '../config';

/**
 * Save a new book
 *
 * @param {Object} book - book to be created
 */
export const saveBookAction = book => async dispatch => {
    dispatch({
        type: 'BOOK_LOADING',
    });

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(book),
    };

    try {
        const response = await fetchTimeout(`${apiUrl}/books/`, options);
        const savedBook = await response.json();

        dispatch({
            type: 'BOOK_SAVE_SUCCESS',
            payload: savedBook,
        });
    } catch (error) {
        dispatch({
            type: 'BOOK_SAVE_ERROR',
            payload: error,
        });
    }
};

/**
 * Update Book action
 * @param {Object} book - Book to update
 */
export const updateBookAction = book => async dispatch => {
    dispatch({
        type: 'BOOK_LOADING',
    });

    const bookToUpdate = {
        title: book.title,
        author: book.author,
        description: book.description,
    };

    const options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(bookToUpdate),
    };

    try {
        const response = await fetchTimeout(`${apiUrl}/books/${book._id}`, options);
        const savedBook = await response.json();

        return dispatch({
            type: 'BOOK_SAVE_SUCCESS',
            payload: savedBook,
        });
    } catch (error) {
        return dispatch({
            type: 'BOOK_SAVE_ERROR',
            payload: error,
        });
    }
};

export const newBookAction = () => dispatch => {
    return dispatch({
        type: 'NEW_BOOK',
    });
};

/**
 * Get book by Id
 * @param {String} id - Book id to be fetched
 */
export const getBookById = id => async dispatch => {
    dispatch({
        type: 'BOOK_LOADING',
    });

    try {
        const response = await fetchTimeout(`${apiUrl}/books/${id}`);
        const book = await response.json();

        return dispatch({
            type: 'BOOK_GET_SUCCESS',
            payload: book,
        });
    } catch (error) {
        return dispatch({
            type: 'BOOK_GET_ERROR',
            payload: error,
        });
    }
};

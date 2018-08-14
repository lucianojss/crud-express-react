import fetchTimeout from '../utils/fetch';
import { apiUrl } from '../config';

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

export const updateBookAction = book => async dispatch => {
    dispatch({
        type: 'BOOK_LOADING',
    });

    const bookToUpdate = {
        title: book.title,
        author: book.author,
        description: book.description,
    };

    console.log(bookToUpdate);

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

export const newBookAction = () => dispatch => {
    dispatch({
        type: 'NEW_BOOK',
    });
};

export const getBookById = id => async dispatch => {
    dispatch({
        type: 'BOOK_LOADING',
    });

    try {
        const response = await fetchTimeout(`${apiUrl}/books/${id}`);
        const book = await response.json();

        dispatch({
            type: 'BOOK_GET_SUCCESS',
            payload: book,
        });
    } catch (error) {
        dispatch({
            type: 'BOOK_GET_ERROR',
            payload: error,
        });
    }
};

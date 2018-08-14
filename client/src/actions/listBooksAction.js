import { apiUrl } from '../config';
import fetchTimeout from '../utils/fetch';

export const listBooksAction = query => async dispatch => {
    dispatch({
        type: 'LIST_BOOKS_FETCH',
    });
    const request = query ? `${apiUrl}/books?title=${query}` : `${apiUrl}/books`;

    try {
        const response = await fetchTimeout(request);
        const books = await response.json();

        return dispatch({
            type: 'LIST_BOOKS_SUCCESS',
            payload: books,
        });
    } catch (error) {
        return dispatch({
            type: 'LIST_BOOKS_ERROR',
        });
    }
};

export const deleteBookAction = id => async dispatch => {
    const options = {
        method: 'delete',
    };

    dispatch({
        type: 'DELETING_BOOK',
    });

    try {
        const response = await fetchTimeout(`${apiUrl}/books/${id}`, options);
        await response.json();

        dispatch({
            type: 'DELETE_BOOK_SUCCESS',
        });

        return dispatch(listBooksAction());
    } catch (error) {
        return dispatch({
            type: 'DELETE_BOOK_ERROR',
        });
    }
};

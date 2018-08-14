import { apiUrl } from '../config';

export const listBooksAction = () => async dispatch => {
    dispatch({
     type: 'LIST_BOOKS_FETCH'
    });

    try {
        const response = await fetch(`${apiUrl}/books`);
        const books = await response.json();

        dispatch({
            type: 'LIST_BOOKS_SUCCESS',
            payload: books
        });

    } catch(error) {
        dispatch({
            type: 'LIST_BOOKS_ERROR'
        });
    }
}
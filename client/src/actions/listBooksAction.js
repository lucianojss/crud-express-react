import { apiUrl } from '../config';

export const listBooksAction = (query) => async dispatch => {
    dispatch({
     type: 'LIST_BOOKS_FETCH'
    });
    console.log(query,'query');
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

export const deleteBookAction = (id) => async dispatch => {
    const options = {
        method: 'delete'
    }

    dispatch({
        type: 'DELETING_BOOK'
    });

    try {
        const response = await fetch(`${apiUrl}/books/${id}`, options);
        const deletedBook = await response.json();

        dispatch({
            type: 'DELETE_BOOK_SUCCESS'
        });

    } catch(error) {
        dispatch({
            type: 'DELETE_BOOK_ERROR'
        });
    }
};

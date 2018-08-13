export const listBooksAction = () => async dispatch => {
    dispatch({
     type: 'LIST_BOOKS_FETCH'
    });

    const response = await fetch('http://192.168.1.84:5000/books');
    const books = await response.json();

    dispatch({
        type: 'LIST_BOOKS_SUCCESS',
        payload: books
    });
}
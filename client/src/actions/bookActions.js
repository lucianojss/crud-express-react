export const saveBookAction = (book) => async dispatch => {
    dispatch({
     type: 'BOOK_SAVE'
    });

    const options = {
        method: 'POST',
        body: book
    };

    try {
        const response = await fetch('http://192.168.1.84:5000/books/', options);
        const book = await response.json();

        dispatch({
            type: 'BOOK_SAVE_SUCCESS',
            payload: book
        });

    } catch (error) {
        dispatch({
            type: 'BOOK_SAVE_ERROR',
            payload: error
        });
    }
}
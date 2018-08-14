export const saveBookAction = (book) => async dispatch => {
    dispatch({
     type: 'BOOK_LOADING'
    });

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(book)
    };

    try {
        const response = await fetch('http://192.168.1.84:5000/books/', options);
        const savedBook = await response.json();

        dispatch({
            type: 'BOOK_SAVE_SUCCESS',
            payload: savedBook
        });

    } catch (error) {
        dispatch({
            type: 'BOOK_SAVE_ERROR',
            payload: error
        });
    }
}

export const newBookAction = () => dispatch => {
    dispatch({
        type: 'NEW_BOOK'
    });
}

export const getBookById = (id) => async dispatch => {
    dispatch({
     type: 'BOOK_LOADING'
    });

    try {
        const response = await fetch(`http://192.168.1.84:5000/books/${id}`);
        const book = await response.json();

        dispatch({
            type: 'BOOK_GET_SUCCESS',
            payload: book
        });

    } catch (error) {
        dispatch({
            type: 'BOOK_GET_ERROR',
            payload: error
        });
    }
}
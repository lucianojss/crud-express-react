import { combineReducers } from 'redux';
import booksListReducer from './booksListReducer';
import bookReducer from './bookReducer';

export default combineReducers({
    books: booksListReducer,
    book: bookReducer
});
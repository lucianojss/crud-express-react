import { combineReducers } from 'redux';
import booksListReducer from './booksListReducer';

export default combineReducers({
    books: booksListReducer
});
const booksRouter = require('./books/router');

module.exports = (app) => {
    app.use('/books', booksRouter);
};
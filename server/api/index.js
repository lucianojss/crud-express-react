const booksRouter = require('./books/router');
const router404 = require('./404/controller');

module.exports = (app) => {
    app.use('/books', booksRouter);
    app.use((err, req, res, next) => {

        if (req.app.get('env') !== 'development') {
            delete err.stack;
        }
        res.status(err.statusCode || 500).json(err);
    });
    app.use('*', router404.controller);
};
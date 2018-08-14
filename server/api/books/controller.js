const Book = require('./model');

exports.create = async (req, res, next) => {
    try {
        const { title, description, author } = req.body;

        const bookToSave = new Book({
            title,
            description,
            author
        });

        data = await bookToSave.save();

        res.send(data);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        );
        res.send(updatedBook);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const removedBook = await Book.findByIdAndRemove(req.params.id);
        res.send(removedBook);
    } catch (error) {
        next(error);
    }
};

exports.getBooks = async (req, res, next) => {
    const filter = {};

    if (req.query && req.query.title) {
        filter.title = { $regex: req.query.title, $options: 'i' };
    }

    try {
        const booksFound = await Book.find(filter);
        res.send(booksFound);
    } catch (error) {
        next(error);
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const booksFound = await Book.findById(req.params.id);
        res.send(booksFound);
    } catch (error) {
        next(error);
    }
};

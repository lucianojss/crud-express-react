const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Book', BookSchema);
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
}, {
    timestamp: true //createdAt, updatedAt
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
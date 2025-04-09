import Book from "../models/Books.js";

// Get all books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a book
export const getBook = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }

    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a book
export const createBook = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Content can not be empty" });
    }
    if (!req.body.title || !req.body.author || !req.body.ISBN) {
        return res.status(400).json({ message: "Title, author and ISBN are required" });
    }

    try {
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            ISBN: req.body.ISBN
        });
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Edit a book
export const updateBook = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }
    if (!req.body) {
        return res.status(400).json({ message: "Content can not be empty" });
    }
    if (!req.body.title || !req.body.author || !req.body.ISBN) {
        return res.status(400).json({ message: "Title, author and ISBN are required" });
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book was updated successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a book
export const deleteBook = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }

    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book was deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
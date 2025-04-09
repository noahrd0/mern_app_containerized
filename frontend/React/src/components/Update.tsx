import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateBook() {
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [ISBN, setISBN] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get(`http://localhost:5050/api/books/${id}`);
                const book = res.data;
                setTitle(book.title);
                setAuthor(book.author);
                setISBN(book.ISBN);
            } catch (error) {
                setError('Failed to fetch book details. Please try again.');
            }
        };
        fetchBook();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedBook = {
            title: title,
            author: author,
            ISBN: ISBN
        };
        try {
            const res = await axios.put(`http://localhost:5050/api/books/${id}`, updatedBook);
            setMessage('Book updated successfully!');
            setError(null);
        } catch (error) {
            setMessage(null);
            if (axios.isAxiosError(error) && error.response) {
                setError('Failed to update book : ' + error.response.data.message);
            } else {
                setError('Failed to update book due to an unknown error.');
            }
        }
    }

    return (
        <div className="container mt-5">
            {message && <div className="alert alert-success" role="alert">{message}</div>}
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">ISBN</label>
                    <input type="text" className="form-control" value={ISBN} onChange={(e) => setISBN(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Update Book</button>
            </form>
        </div>
    );
}

export default UpdateBook;
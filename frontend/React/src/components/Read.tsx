import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReadBook() {
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [ISBN, setISBN] = useState<string>('');
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

    return (
        <div className="container mt-5">
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={title} readOnly />
            </div>
            <div className="mb-3">
                <label className="form-label">Author</label>
                <input type="text" className="form-control" value={author} readOnly />
            </div>
            <div className="mb-3">
                <label className="form-label">ISBN</label>
                <input type="text" className="form-control" value={ISBN} readOnly />
            </div>
        </div>
    );
}

export default ReadBook;
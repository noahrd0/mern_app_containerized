import axios from "axios";
import { useState } from "react";

function CreateBook() {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [ISBN, setISBN] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newBook = {
            title: title,
            author: author,
            ISBN: ISBN
        };
        try {
            const res = await axios.post('http://localhost:5050/api/books', newBook);
            setMessage('Book created successfully!');
            setError(null);
        } catch (error) {
            setMessage(null);
            if (axios.isAxiosError(error) && error.response) {
                setError('Failed to create book : ' + error.response.data.message);
            } else {
                setError('Failed to create book due to an unknown error.');
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
                <button type="submit" className="btn btn-primary">Create Book</button>
            </form>
        </div>
    );
}

export default CreateBook;
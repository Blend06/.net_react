import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookForm from './BookForm';
import BookList from './BookList';
import { getAllBooks, createBook, updateBook, deleteBook } from '../../services/bookService';

function BookDashboard() {
    const [books, setBooks] = useState([]);
    const [bookToEdit, setBookToEdit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            setLoading(true);
            const data = await getAllBooks();
            setBooks(data);
            setError(null);
        } catch (err) {
            setError('Failed to load books');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (book) => {
        try {
            if (book.id) {
                await updateBook(book.id, book);
            } else {
                await createBook(book);
            }
            setBookToEdit(null);
            loadBooks();
        } catch (err) {
            setError('Failed to save book');
            console.error(err);
        }
    };

    const handleEdit = (book) => {
        setBookToEdit(book);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            try {
                await deleteBook(id);
                loadBooks();
            } catch (err) {
                setError('Failed to delete book');
                console.error(err);
            }
        }
    };

    const handleCancel = () => {
        setBookToEdit(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Book Management</h1>
                    <Link
                        to="/"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        Back to Dashboard
                    </Link>
                </div>

                {error && (
                    <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                <BookForm
                    bookToEdit={bookToEdit}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />

                {loading ? (
                    <div className="text-center py-8">
                        <p className="text-gray-600 text-lg">Loading...</p>
                    </div>
                ) : (
                    <BookList
                        books={books}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </div>
    );
}

export default BookDashboard;

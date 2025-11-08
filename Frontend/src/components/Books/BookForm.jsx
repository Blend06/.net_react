import { useState, useEffect } from 'react';

function BookForm({ bookToEdit, onSubmit, onCancel }) {
  const [book, setBook] = useState({
    id: 0,
    title: '',
    author: '',
    year: new Date().getFullYear()
  });

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
    setBook({ id: 0, title: '', author: '', year: new Date().getFullYear() });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {bookToEdit ? 'Edit Book' : 'Add New Book'}
      </h2>
      
      <input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        required
        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        required
        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input
        type="number"
        placeholder="Year"
        value={book.year}
        onChange={(e) => setBook({ ...book, year: parseInt(e.target.value) })}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <div className="flex gap-2">
        <button 
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          {bookToEdit ? 'Update' : 'Add'}
        </button>
        {bookToEdit && (
          <button 
            type="button" 
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default BookForm;

function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-2xl font-bold p-6 bg-gray-50 border-b">Books</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Author</th>
              <th className="px-6 py-3 text-left">Year</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                  No books found. Add your first book!
                </td>
              </tr>
            ) : (
              books.map((book) => (
                <tr key={book.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{book.id}</td>
                  <td className="px-6 py-4 font-medium">{book.title}</td>
                  <td className="px-6 py-4">{book.author}</td>
                  <td className="px-6 py-4">{book.year}</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => onEdit(book)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mr-2 transition-colors"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => onDelete(book.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList;

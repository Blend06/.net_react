function DataTable({ title, data, columns, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-2xl font-bold p-6 bg-gray-50 border-b">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-3 text-left">
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No items found. Add your first item!
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`px-6 py-4 ${
                        column.key === columns[1].key ? 'font-medium' : ''
                      }`}
                    >
                      {item[column.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onEdit(item)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mr-2 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
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

export default DataTable;

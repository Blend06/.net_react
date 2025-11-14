import { useCrud } from '../../hooks/useCrud';
import bookService from '../../services/bookService';
import DashboardLayout from '../Common/DashboardLayout';
import GenericForm from '../Common/GenericForm';
import DataTable from '../Common/DataTable';

function BookDashboard() {
  const {
    items: books,
    itemToEdit,
    loading,
    error,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancel,
  } = useCrud(bookService);

  const bookFields = [
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'author', label: 'Author', type: 'text', required: true },
    { name: 'year', label: 'Year', type: 'number', required: true, defaultValue: new Date().getFullYear() },
  ];

  const bookColumns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'year', label: 'Year' },
  ];

  return (
    <DashboardLayout title="Book Management" error={error}>
      <GenericForm
        title="Book"
        fields={bookFields}
        itemToEdit={itemToEdit}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      ) : (
        <DataTable
          title="Books"
          data={books}
          columns={bookColumns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </DashboardLayout>
  );
}

export default BookDashboard;

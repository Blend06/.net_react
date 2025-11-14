import { useCrud } from '../../hooks/useCrud';
import authorService from '../../services/authorService';
import DashboardLayout from '../Common/DashboardLayout';
import GenericForm from '../Common/GenericForm';
import DataTable from '../Common/DataTable';

function AuthorDashboard() {
  const {
    items: authors,
    itemToEdit,
    loading,
    error,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancel,
  } = useCrud(authorService);

  const authorFields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'country', label: 'Country', type: 'text', required: true },
    { name: 'birthYear', label: 'Birth Year', type: 'number', required: true, defaultValue: new Date().getFullYear() },
  ];

  const authorColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'country', label: 'Country' },
    { key: 'birthYear', label: 'Birth Year' },
  ];

  return (
    <DashboardLayout title="Author Management" error={error}>
      <GenericForm
        title="Author"
        fields={authorFields}
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
          title="Authors"
          data={authors}
          columns={authorColumns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </DashboardLayout>
  );
}

export default AuthorDashboard;

import { useState, useEffect } from 'react';
import FormInput from './FormInput';

function GenericForm({ title, fields, itemToEdit, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(() => {
    const initialData = { id: 0 };
    fields.forEach((field) => {
      initialData[field.name] = field.defaultValue || '';
    });
    return initialData;
  });

  useEffect(() => {
    if (itemToEdit) {
      setFormData(itemToEdit);
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    const resetData = { id: 0 };
    fields.forEach((field) => {
      resetData[field.name] = field.defaultValue || '';
    });
    setFormData(resetData);
  };

  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {itemToEdit ? `Edit ${title}` : `Add New ${title}`}
      </h2>

      {fields.map((field) => (
        <FormInput
          key={field.name}
          label={field.label}
          type={field.type}
          value={formData[field.name]}
          onChange={(e) =>
            handleChange(
              field.name,
              field.type === 'number' ? parseInt(e.target.value) : e.target.value
            )
          }
          required={field.required}
        />
      ))}

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          {itemToEdit ? 'Update' : 'Add'}
        </button>
        {itemToEdit && (
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

export default GenericForm;

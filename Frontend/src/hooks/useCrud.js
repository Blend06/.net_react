import { useState, useEffect } from 'react';

export const useCrud = (service) => {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setLoading(true);
      const data = await service.getAll();
      setItems(data);
      setError(null);
    } catch (err) {
      setError('Failed to load items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (item) => {
    try {
      if (item.id) {
        await service.update(item.id, item);
      } else {
        await service.create(item);
      }
      setItemToEdit(null);
      loadItems();
    } catch (err) {
      setError('Failed to save item');
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setItemToEdit(item);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await service.delete(id);
        loadItems();
      } catch (err) {
        setError('Failed to delete item');
        console.error(err);
      }
    }
  };

  const handleCancel = () => {
    setItemToEdit(null);
  };

  return {
    items,
    itemToEdit,
    loading,
    error,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancel,
  };
};

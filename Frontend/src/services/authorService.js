import api from './api';

const authorService = {
  getAll: async () => {
    const response = await api.get('/authors');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/authors/${id}`);
    return response.data;
  },

  create: async (author) => {
    const response = await api.post('/authors', author);
    return response.data;
  },

  update: async (id, author) => {
    const response = await api.put(`/authors/${id}`, author);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/authors/${id}`);
    return response.data;
  },
};

export default authorService;

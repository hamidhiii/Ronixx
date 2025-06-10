import axios from 'axios';

const api = axios.create({
  baseURL: 'http://139.59.62.159',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCategories = () => api.get('/categories');

export default api;

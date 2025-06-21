import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ronixtools.duckdns.org',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCategories = () => api.get('/categories');

export default api;

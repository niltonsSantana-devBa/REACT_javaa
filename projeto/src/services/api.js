import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000, // Tempo limite de 5 segundos
});

export default api;
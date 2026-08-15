import axios from 'axios';

// Use production backend URL if set in env (Vercel), otherwise fallback to '/api' for local proxy
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
});

// Interceptor to attach Bearer token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

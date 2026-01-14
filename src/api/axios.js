import axios from 'axios'

const api = axios.create({
  baseURL: '',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // logout / redirect / refresh token
      console.warn('Unauthorized')
    }

    return Promise.reject(error.response?.data || error)
  },
);

export default api;

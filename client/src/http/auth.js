import axios from 'axios';

export const API_URL = `http://localhost:8080/auth`;

export const authApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

authApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

authApi.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const res = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', res.data.accessToken);
        return authApi.request(originalRequest);
      } catch (err) {
        console.log(err.message);
      }
    }

    throw error;
  },
);

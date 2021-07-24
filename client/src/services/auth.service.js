import axios from 'axios';
import { authApi } from '../http';
import { API_URL } from '../http';

export class AuthService {
  static async login(email, password) {
    const res = await authApi.post('/login', { email, password });

    localStorage.setItem('token', res.data.accessToken);

    return res.data.user;
  }

  static async registration(username, email, password) {
    const res = await authApi.post('/registration', {
      username,
      email,
      password,
    });

    localStorage.setItem('token', res.data.accessToken);

    return res.data.user;
  }

  static async logout() {
    const res = await authApi.post('/logout');

    localStorage.removeItem('token');

    return res.data;
  }

  static async checkAuth() {
    const res = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    });

    localStorage.setItem('token', res.data.accessToken);

    return res.data.user;
  }
}

import axios from "axios";
import api from "../http";
import { API_URL } from "../http";

export default class AuthService {
  static async login(email, password) {
    const res = await api.post("/login", { email, password });

    localStorage.setItem("token", res.data.accessToken);

    return res.data.user;
  }

  static async registration(email, password) {
    const res = await api.post("/registration", { email, password });

    localStorage.setItem("token", res.data.accessToken);

    return res.data.user;
  }

  static async logout() {
    const res = await api.post("/logout");

    localStorage.removeItem("token");

    return res.data;
  }

  static async checkAuth() {
    const res = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    });

    localStorage.setItem("token", res.data.accessToken);

    return res.data.user;
  }
}

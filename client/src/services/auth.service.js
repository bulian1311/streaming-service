import api from "../http";

export default class AuthService {
  static async login(email, password) {
    return await api.post("/login", { email, password });
  }

  static async registration(email, password) {
    return await api.post("/registration", { email, password });
  }

  static async logout() {
    return await api.post("/logout");
  }
}

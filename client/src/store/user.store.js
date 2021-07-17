import { makeObservable, observable, action } from "mobx";

import AuthService from "../services/auth.service";
import axios from "axios";
import { API_URL } from "../http";

export default class UserStore {
  rootStore;
  user = null;
  isAuth = false;
  isFormVisible = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      user: observable,
      isAuth: observable,
      isFormVisible: observable,
      setUser: action,
      setAuth: action,
      setIsFormVisible: action,
    });
  }

  setAuth(isAuth) {
    this.isAuth = isAuth;
  }

  setUser(user) {
    this.user = user;
  }

  setIsFormVisible(isVisible) {
    this.isFormVisible = isVisible;
  }

  async login(email, password) {
    try {
      const res = await AuthService.login(email, password);

      console.log(res);

      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  }

  async registration(email, password) {
    try {
      const res = await AuthService.registration(email, password);

      console.log(res);

      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser(null);
    } catch (err) {
      console.log(err);
    }
  }

  async checkAuth() {
    try {
      const res = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      console.log(res);

      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  }
}

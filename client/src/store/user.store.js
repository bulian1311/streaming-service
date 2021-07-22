import { makeObservable, observable, action } from "mobx";

import AuthService from "../services/auth.service";

class UserStore {
  rootStore;
  user = null;
  isAuth = false;
  isLoading = false;
  isFormVisible = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      user: observable,
      isAuth: observable,
      isLoading: observable,
      isFormVisible: observable,
      setUser: action,
      setIsLoading: action,
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

  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }

  setIsFormVisible(isVisible) {
    this.isFormVisible = isVisible;
  }

  async login(email, password) {
    try {
      this.setIsLoading(true);

      const user = await AuthService.login(email, password);

      console.log(user);

      this.setAuth(true);
      this.setUser(user);
    } catch (err) {
      console.log(err);
    } finally {
      this.setIsLoading(false);
    }
  }

  async registration(email, password) {
    try {
      this.setIsLoading(true);
      const user = await AuthService.registration(email, password);

      console.log(user);

      this.setAuth(true);
      this.setUser(user);
    } catch (err) {
      console.log(err);
    } finally {
      this.setIsLoading(false);
    }
  }

  async logout() {
    try {
      this.setIsLoading(true);

      await AuthService.logout();

      this.setAuth(false);
      this.setUser(null);
    } catch (err) {
      console.log(err);
    } finally {
      this.setIsLoading(false);
    }
  }

  async checkAuth() {
    try {
      this.setIsLoading(true);

      const user = await AuthService.checkAuth();

      console.log(user);

      this.setAuth(true);
      this.setUser(user);
    } catch (err) {
      console.log(err);
    } finally {
      this.setIsLoading(false);
    }
  }
}

export default UserStore;
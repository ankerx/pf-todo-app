import { makeAutoObservable } from "mobx";

export class AuthStore {
  token = "";
  constructor(rootStore) {
    makeAutoObservable(this);
    getToken();
  }
  getToken() {
    this.token = window.localStorage.getItem("token");
  }
  setToken() {
    window.localStorage.setItem("token", JSON.stringify(token));
    this.token = token;
  }
  logout() {
    window.localStorage.removeItem("token");
    this.token = null;
  }
}

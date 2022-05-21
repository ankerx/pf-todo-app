import { data } from "autoprefixer";
import axios from "axios";
import configData from "../../configData.json";

const token = sessionStorage.getItem("token");

console.log(token);

const AuthAxios = axios.create({
  baseURL: configData.SERVER_URL,
  headers: { Authorization: `Bearer ${token}` },
});
export default AuthAxios;

const instance = axios.create({
  baseURL: configData.SERVER_URL,
});
export const request = async (url) => {
  let req = {
    url: url,
  };
  if (!req.headers) {
    req.headers = {};
  }
  req.headers["Authorization"] = `Bearer ${window.sessionStorage.getItem(
    "token"
  )}`;

  return instance
    .request(req)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

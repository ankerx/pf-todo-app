import { data } from "autoprefixer";
import axios from "axios";
import configData from "../../configData.json";
import { config } from "./config";
const token = sessionStorage.getItem("token");

console.log(token);

const AuthAxios = axios.create({
  baseURL: configData.SERVER_URL,
  headers: { Authorization: `Bearer ${token}` },
});
export default AuthAxios;

const instance = axios.create({
  baseURL: configData.SERVER_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const logger = (data, url) => {
  console.log(url, `\n\t status: ${data.status}`, `\n\t payload: `, data.data);
  return data.data;
};
export const request = async (_url, _config) => {
  let req = {
    url: _url,
    ..._config,
  };
  if (!req.headers) {
    req.headers = {};
  }
  req.headers["Authorization"] = `Bearer ${window.sessionStorage.getItem(
    "token"
  )}`;

  return instance
    .request(req)
    .then((data) => logger(data, _url))
    .catch((err) => console.log(err));
};

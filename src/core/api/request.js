import axios from "axios";
import configData from "../../configData.json";
const token = window.localStorage.getItem("user");
console.log(token);
const AuthAxios = axios.create({
  baseURL: configData.SERVER_URL,
  headers: {
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("user"))}`,
  },
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
  req.headers["Authorization"] = `Bearer ${JSON.parse(
    window.localStorage.getItem("user")
  )}`;

  return instance
    .request(req)
    .then((data) => logger(data, _url))
    .catch((err) => console.log(err));
};

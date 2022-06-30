import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { config } from "./config";

const instance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem("user") as string
    )}`,
  },
});
const logger = (data: AxiosResponse, url: string) => {
  console.log(url, `\n\t status: ${data.status}`, `\n\t payload: `, data.data);
  return data.data;
};

export const request = async <T>(
  _url: string,
  _config?: AxiosRequestConfig
) => {
  const returnedUser = JSON.parse(localStorage.getItem("user") as string);
  let req: any = {
    url: _url,
    ..._config,
  };
  if (!req.headers) {
    req.headers = {};
  }
  req.headers["Authorization"] = `Bearer ${returnedUser}`;

  return instance
    .request<T>(req)
    .then((data) => logger(data, _url))
    .catch((err) => console.log(err));
};

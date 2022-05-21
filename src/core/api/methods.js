import { request } from "./request";

export const api = {
  get: async function (url) {
    return request(url)
      .then((data) => data)
      .catch((err) => err);
  },

  post: async function (url, payload) {
    return request(url, {
      method: "POST",
      data: payload,
    })
      .then((data) => data)
      .catch((err) => err);
  },
  put: async function (url, payload) {
    return request(url, {
      method: "PUT",
      data: payload,
    })
      .then((data) => data)
      .catch((err) => err);
  },
  delete: async function (url) {
    return request(url, { method: "DELETE" })
      .then((data) => data)
      .catch((err) => err);
  },
};

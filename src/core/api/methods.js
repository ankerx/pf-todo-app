import { request } from "./request";

export const api = {
  get: async function (url) {
    return request(url)
      .then((data) => data)
      .catch((err) => err);
  },
};

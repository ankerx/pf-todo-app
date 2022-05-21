import { api } from "../../../core/api/methods";

export const taskApi = {
  getTasks: function () {
    return api.get("/task");
  },
};

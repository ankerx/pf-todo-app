import { api } from "../../../core/api/methods";

export const taskApi = {
  getAllTasks: function () {
    return api.get("/task");
  },
  get: function (id: string) {
    return api.get(`/task/${id}`);
  },
  create: function (name: string) {
    return api.post(`/task`, { name });
  },
  update: function (id: number, name: string) {
    return api.put(`/task/${id}`, { name });
  },

  delete: function (id: string) {
    return api.delete(`/task/${id}`);
  },
};

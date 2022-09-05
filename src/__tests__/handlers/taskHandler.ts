import { rest } from "msw";

export const taskHandler = [
  rest.get("http://localhost:8080/task", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "do smth", __v: 0, _id: "1234" },
        { name: "wash car", __v: 0, _id: "4321" },
      ])
    );
  }),
  rest.get("http://localhost:8080/task/:1234", (req, res, ctx) => {
    return res(ctx.json({ name: "do smth", __v: 0, _id: "1234" }));
  }),
  rest.post("http://localhost:8080/task", (req, res, ctx) => {
    return res(
      ctx.json({
        task: {
          _id: "62bd970917338379195b3f90",
          name: "trololo",
          __v: 0,
        },
        success: true,
      })
    );
  }),

  rest.put("http://localhost:8080/task/:1234", (req, res, ctx) => {
    return res(
      ctx.json({
        task: {
          _id: "62bd970917338379195b3f90",
          name: "hehehe",
          __v: 0,
        },
        success: true,
      })
    );
  }),

  rest.delete("http://localhost:8080/task/:1234", (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        message: "Task deleted",
      })
    );
  }),
];

import { rest } from "msw";

export const taskHandler = [
  rest.get("/task", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "do smth", __v: 0, id: "1234" },
        { name: "wash car", __v: 0, id: "123" },
      ])
    );
  }),
  rest.get("/task/:1234", (req, res, ctx) => {
    return res(ctx.json({ name: "do smth", __v: 0, id: "1234" }));
  }),
  rest.post("/task/", (req, res, ctx) => {
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
  rest.put("/task/:1234", (req, res, ctx) => {
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
  rest.delete("/task/:1234", (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        message: "Task deleted",
      })
    );
  }),
];

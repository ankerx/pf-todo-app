import { rest } from "msw";

export const taskHandler = [
  rest.get("/task", (req, res, ctx) => {
    return res(ctx.json({ name: "do smth", __v: 0, id: "1234" }));
  }),
];

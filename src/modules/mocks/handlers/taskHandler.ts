import { rest } from "msw";

export const taskHandler = [
  rest.get("/task", (req, res, ctx) => {
    // ????
    return res(ctx.status(200));
  }),
];

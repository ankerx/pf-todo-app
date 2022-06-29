import { rest } from "msw";

export const handlers = [
  rest.post("/user/sign-up", (req, res, ctx) => {
    localStorage.setItem("token", "123");

    return res(ctx.status(200));
  }),
];

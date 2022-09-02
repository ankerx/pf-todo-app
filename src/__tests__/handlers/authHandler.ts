import { rest } from "msw";

export const authHandler = [
  rest.post("http://localhost:8080/user/sign-up", (req, res, ctx) => {
    return res(
      ctx.json({
        user: {
          tasks: [],
          _id: "62bd831e17338379195b3f8e",
          email: "inso@o2.pl",
          password:
            "$2b$10$/2SR4FKmNZYEzFLPu36uou0hoo.XsdJuy5Eao8wWyaRfXAjavdnai",
          createdAt: "2022-06-30T11:03:58.988Z",
          updatedAt: "2022-06-30T11:03:58.988Z",
          __v: 0,
        },
        success: true,
        accessToken:
          "$2b$10$CMddJKnAUkWXR8971tDTgesLN9xDCMebhjrkbwKF8nLkOqJPP0fUi",
        refreshToken:
          "$2b$10$Z71QuZ0swi6ggiP2tV7e6eYW73KX/xjEo3F8mqKHTP5he.HaOKwk6",
      })
    );
  }),
  rest.post("http://localhost:8080/user/log-in", (req, res, ctx) => {
    console.log(req);
    return res(
      ctx.json({
        user: {
          tasks: [],
          _id: "62bd831e17338379195b3f8e",
          email: "inso@o2.pl",
          password:
            "$2b$10$/2SR4FKmNZYEzFLPu36uou0hoo.XsdJuy5Eao8wWyaRfXAjavdnai",
          createdAt: "2022-06-30T11:03:58.988Z",
          updatedAt: "2022-06-30T11:03:58.988Z",
          __v: 0,
        },
        accessToken:
          "$2b$10$CMddJKnAUkWXR8971tDTgesLN9xDCMebhjrkbwKF8nLkOqJPP0fUi",
        refreshToken:
          "$2b$10$Z71QuZ0swi6ggiP2tV7e6eYW73KX/xjEo3F8mqKHTP5he.HaOKwk6",
      })
    );
  }),
];

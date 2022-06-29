// import "@testing-library/jest-dom";

// import { rest } from "msw";
// import { setupServer } from "msw/node";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import CreateTask from "../CreateTask";
// const server = setupServer(
//   rest.post("/task", (req, res, ctx) => {
//     // Respond with a mocked user token that gets persisted
//     // in the `sessionStorage` by the `Login` component.
//     return res(ctx.json({ token: "mocked_user_token" }));
//   })
// );
// beforeAll(() => server.listen());

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// // Disable API mocking after the tests are done.
// afterAll(() => server.close());

// test("allows the user to log in", async () => {
//   render(<CreateTask />);
//   userEvent.type(
//     screen.getByRole("textbox", { name: /username/i }),
//     "john.maverick"
//   );
//   userEvent.type(
//     screen.getByRole("textbox", { name: /password/i }),
//     "super-secret"
//   );
//   userEvent.click(screen.getByText(/submit/i));
//   const alert = await screen.findByRole("alert");

//   // Assert successful login state
//   expect(window.sessionStorage.getItem("token")).toEqual(
//     fakeUserResponse.token
//   );
// });
// test("allows the user to log in", async () => {
//   render(<Login />);
//   userEvent.type(
//     screen.getByRole("textbox", { name: /username/i }),
//     "john.maverick"
//   );
//   userEvent.type(
//     screen.getByRole("textbox", { name: /password/i }),
//     "super-secret"
//   );
//   userEvent.click(screen.getByText(/submit/i));
//   const alert = await screen.findByRole("alert");

//   // Assert successful login state
//   expect(alert).toHaveTextContent(/welcome/i);
//   expect(window.sessionStorage.getItem("token")).toEqual(
//     fakeUserResponse.token
//   );
// });

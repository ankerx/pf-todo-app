import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "../../../App";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { store } from "../../../redux/store";
import { Provider } from "react-redux";
import RegisterForm from "../pages/RegisterForm";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.post("/user/sign-up", (req, res, ctx) => {
    return res(ctx.json({ token: "user_token" }));
  })
);
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("register user", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    </Provider>
  );
  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText("Password");
  const confirmPasswordInput = screen.getByPlaceholderText(/confirm password/i);
  const button = screen.getByText("Register");
  userEvent.type(emailInput, "johny bravo");
  userEvent.type(passwordInput, "12345678");
  userEvent.type(confirmPasswordInput, "12345678");
  const header = screen.getByText("hello world");
  expect(header).toBeInTheDocument();
  userEvent.click(button);
  expect(window.localStorage.getItem("token")).toEqual("user_token");
});

// test("register user", async () => {
//   render(<RegisterForm />);
//   const emailInput = screen.getAllByLabelText(/email/i);
//   const passwordInput = screen.getAllByLabelText("Password");
//   const confirmPasswordInput = screen.getAllByLabelText(/confirm password/i);
//   const button = screen.getAllByRole("button");
//   userEvent.type(emailInput, "johny bravo");
//   userEvent.type(passwordInput, "12345678");
//   userEvent.type(confirmPasswordInput, "12345678");

//   userEvent.click(button);

//   expect(window.sessionStorage.getItem("token")).toEqual("user_token");
// });

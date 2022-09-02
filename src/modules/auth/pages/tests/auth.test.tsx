import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../core/utils/test-utils";

import App from "../../../../App";
test("login functionality", async () => {
  renderWithProviders(<App />, { route: "/log-in" });

  const buttonElement = await screen.findByDisplayValue("Login");
  const emailInputElement = await screen.findByPlaceholderText("Email");
  const passwordInputElement = await screen.findByPlaceholderText("Password");

  fireEvent.change(emailInputElement, { target: { value: "test@o2.pl" } });
  fireEvent.change(passwordInputElement, { target: { value: "123456" } });

  expect(emailInputElement.value).toBe("test@o2.pl");
  expect(passwordInputElement.value).toBe("123456");

  fireEvent.click(buttonElement);

  // navigating to home page
  const header = await screen.findByText("Tasks");
  expect(header).toBeInTheDocument();
});

test("register error handling", async () => {
  renderWithProviders(<App />, { route: "/register" });
  const buttonElement = await screen.findByDisplayValue("Register");
  const emailInputElement = await screen.findByPlaceholderText("Email");
  const passwordInputElement = await screen.findByPlaceholderText("Password");
  const confirmPasswordInputElement = await screen.findByPlaceholderText(
    "Confirm password"
  );
  // error handling
  fireEvent.change(emailInputElement, { target: { value: "test@o2.pl" } });
  fireEvent.change(passwordInputElement, { target: { value: "123456" } });
  fireEvent.change(confirmPasswordInputElement, { target: { value: "123" } });

  fireEvent.click(buttonElement);

  const errorText = await screen.findByText("Passwords not match!");
  expect(errorText).toBeInTheDocument();
});

test("register success", async () => {
  renderWithProviders(<App />, { route: "/register" });
  const buttonElement = await screen.findByDisplayValue("Register");
  const emailInputElement = await screen.findByPlaceholderText("Email");
  const passwordInputElement = await screen.findByPlaceholderText("Password");
  const confirmPasswordInputElement = await screen.findByPlaceholderText(
    "Confirm password"
  );
  fireEvent.change(emailInputElement, { target: { value: "test@o2.pl" } });
  fireEvent.change(passwordInputElement, { target: { value: "Siemanko" } });
  fireEvent.change(confirmPasswordInputElement, {
    target: { value: "Siemanko" },
  });

  fireEvent.click(buttonElement);

  // navigating to login page
  const header = await screen.findByRole("heading");
  expect(header).toBeInTheDocument();
});

import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../core/utils/test-utils";

import App from "../../../App";
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
});

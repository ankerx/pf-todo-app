import { fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { renderWithProviders } from "../../../__tests__/test-utils";
import LoginForm from "./LoginForm";
import { setupStore } from "../../../redux/store";
import { Route, Routes } from "react-router";
// import RedirectRoute from "../../../core/components/RedirectRoute";
import { BrowserRouter } from "react-router-dom";
test("fetches & receives a user after clicking the fetch user button", async () => {
  renderWithProviders(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
  // screen.debug();
  const test = await screen.findByText(/hello/i);
  expect(test).toBeInTheDocument();
  const inputElement = await screen.findByPlaceholderText("Email");
  fireEvent.change(inputElement, { target: { value: "test@o2.pl" } });
  expect(inputElement.value).toBe("test@o2.pl");
});

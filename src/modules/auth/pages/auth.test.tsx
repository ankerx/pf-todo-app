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
    <Provider store={setupStore()}>
      <BrowserRouter>
        <Routes>
          <Route path="log-in" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText("Login");
  expect(inputElement).toBeInTheDocument();

  // it("should render input element", async () => {
  //   render(<Main values={{}} setValues={() => {}} />);
  //   const inputElement = screen.getByPlaceholderText(
  //     /Choose destination point/i
  //   );
  //   expect(inputElement).toBeInTheDocument();
  // });
  // it("should be able to type in input", async () => {
  //   render(<Main values={{}} setValues={() => {}} />);
  //   const inputElement = screen.getByPlaceholderText(/Choose starting point/i);
  //   fireEvent.change(inputElement, { target: { value: "Warsaw" } });
  //   expect(inputElement.value).toBe("Warsaw");
  // });
  // it("should be able to type in input", async () => {
  //   render(<Main values={{}} setValues={() => {}} />);
  //   const inputElement = screen.getByPlaceholderText(
  //     /Choose destination point/i
  //   );
  //   fireEvent.change(inputElement, { target: { value: "Warsaw" } });
  //   expect(inputElement.value).toBe("Warsaw");
  // });
  // // should show no user initially, and not be fetching a user
  // expect(screen.getByText(/no user/i)).toBeInTheDocument();
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();

  // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  // fireEvent.click(screen.getByRole("input", { name: /Login/i }));

  // after some time, the user should be received
  // expect(await screen.findByText(/John Smith/i)).toBeInTheDocument();
  // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
});

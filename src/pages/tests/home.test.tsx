import { screen } from "@testing-library/react";

import App from "../../App";
import { renderWithProviders } from "../../core/utils/test-utils";

test("redirecting if user is not authenticated", async () => {
  renderWithProviders(<App />, { route: "/" });

  expect(screen.queryByText("Tasks")).not.toBeInTheDocument();
});

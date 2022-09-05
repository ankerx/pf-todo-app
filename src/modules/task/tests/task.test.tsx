import { findByText, fireEvent, screen } from "@testing-library/react";
import { notDeepEqual } from "assert";

import App from "../../../App";
import {
  renderWithProviders,
  renderWithProvidersAuthenticated,
} from "../../../core/utils/test-utils";

test("fetching tasks with auth", async () => {
  renderWithProvidersAuthenticated(<App />, { route: "/" });

  const mockedTaskName = await screen.findByText("do smth");

  expect(await screen.findByText("Tasks")).toBeInTheDocument();
  expect(mockedTaskName).toBeInTheDocument();
});

test("redirect from unauthorized path", async () => {
  renderWithProviders(<App />, { route: "/" });

  const buttonElement = await screen.findByDisplayValue("Login");

  expect(buttonElement).toBeInTheDocument();
});

test("deleting task", async () => {
  renderWithProvidersAuthenticated(<App />, { route: "/" });

  const deleteBtns = await screen.findAllByText("Delete");
  expect(deleteBtns[0]).toBeInTheDocument();
  const mockedTaskName = await screen.findByText("do smth");
  const mockedTaskName2 = await screen.findByText("wash car");

  expect(mockedTaskName2).toBeInTheDocument();
  expect(mockedTaskName).toBeInTheDocument();

  fireEvent.click(deleteBtns[0]);

  expect(mockedTaskName).not.toBeInTheDocument();
  expect(mockedTaskName2).toBeInTheDocument();
});

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { About } from "../../pages/About";
import { Header } from "../Header";

test("About page should contains English heading on load", () => {
  const { getByText } = render(
    <Provider store={store}>
      <About />
    </Provider>
  );

  expect(getByText(/fetcher/i)).toBeInTheDocument();
});

test("About page should contains Russian heading after switch", () => {
  render(
    <Provider store={store}>
      <Header />
      <About />
    </Provider>
  );
  fireEvent.click(screen.getByText("Русский"));

  expect(screen.getByText(/сборщик/i)).toBeInTheDocument();
});

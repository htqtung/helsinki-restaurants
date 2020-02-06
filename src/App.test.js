import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App page", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Wolt Summer/i);
  expect(linkElement).toBeInTheDocument();
});

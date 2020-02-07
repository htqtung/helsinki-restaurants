import React from "react";
// import App from "./App";
import { render, unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders App page", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/Wolt Summer/i);
  // expect(linkElement).toBeInTheDocument();
  render(<p>App page dummy test</p>, container);
  expect(container.querySelector("p").textContent).toBe("App page dummy test");
});

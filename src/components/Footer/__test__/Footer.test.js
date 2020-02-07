import React from "react";
import Footer from "../";
import { act } from "@testing-library/react";
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

it("renders normally", () => {
  act(() => {
    render(<Footer />, container);
  });
  expect(container.querySelector("p").textContent).toBe("Have a nice day! :)");
});

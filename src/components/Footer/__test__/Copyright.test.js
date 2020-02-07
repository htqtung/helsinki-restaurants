import React from "react";
import Copyright from "../Copyright";
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

it("renders with or without a name", () => {
  act(() => {
    render(<Copyright />, container);
  });
  expect(container.querySelector("a").textContent).toBe(
    "Copyright © A React Developer 2020."
  );

  act(() => {
    render(<Copyright name="Jenny" />, container);
  });
  expect(container.querySelector("a").textContent).toBe("Jenny");

  act(() => {
    render(<Copyright name="Margaret" />, container);
  });
  expect(container.querySelector("a").textContent).toBe("Margaret");
});

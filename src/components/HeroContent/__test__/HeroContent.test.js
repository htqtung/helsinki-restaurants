import React from "react";
import HeroContent from "../";
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
    render(<HeroContent />, container);
  });
  expect(container.querySelector("h1").textContent).toBe(
    "Helsinki Restaurants"
  );

  expect(container.querySelector("p").textContent).toBeDefined();
});

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
  const fakeObject = {
    title: "Helsinki Restaurants",
    subtitle:
      "Fifty restaurants in Helsinki area shown on a React web page with Material UI Design.",
    primaryButton: "Sort A-Z",
    secondaryButton: "Sort Z-A"
  };
  act(() => {
    render(<HeroContent title={fakeObject.title} />, container);
  });
  expect(container.querySelector("h1").textContent).toBe(fakeObject.title);

  expect(container.querySelector("p").textContent).toBeDefined();
});

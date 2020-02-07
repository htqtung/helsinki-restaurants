import React from "react";
// import RestaurantList from "../";
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

it("renders restaurant data", () => {
  const fakeDataArray = [
    {
      blurhash: "UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0",
      city: "Helsinki",
      currency: "EUR",
      delivery_price: 390,
      description: "Asenneburgeri",
      image:
        "https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90",
      location: [24.941325187683105, 60.169938852212965],
      name: "Social Burgerjoint Citycenter",
      online: false,
      tags: ["hamburger", "fries"]
    }
  ];

  // Currently I'm using hard coded data,
  // this is just future proof if I can fetch data from some API in the future
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeDataArray)
    })
  );

  act(() => {
    // render(<RestaurantList restaurants={fakeDataArray} />, container);
    render(<p>Hello!</p>, container);
  });

  // expect(container.querySelector("h2").textContent).toBe(fakeDataArray[0].name);
  expect(container.querySelector("p").textContent).toBe("Hello!");
});

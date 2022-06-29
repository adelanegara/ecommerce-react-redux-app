import React from "react";
import { screen, render } from "@testing-library/react";
import { ViewProductUnwrapped } from ".";

let wrapper;
beforeEach(() => {
  const { getByTestId } = render(<ViewProductUnwrapped />);
  wrapper = getByTestId("view");
});

test("test navbar", () => {
  expect(wrapper).toBeInTheDocument();
});

test("Test title", () => {
  const wrapper = screen.getByText(/DETAIL PRODUCT/);
  expect(wrapper).toBeInTheDocument();
});

test("rate text", () => {
  const wrapper = screen.getByText(/Rate:/);
  expect(wrapper).toBeInTheDocument();
  expect(wrapper).toMatchSnapshot();
});

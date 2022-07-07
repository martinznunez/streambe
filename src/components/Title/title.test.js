import React from "react";

import {  render, screen } from "@testing-library/react";

import Title from "./index";

const FAKE_TITLE = "title test";

test("when rendering the component", () => {
  render(<Title title={FAKE_TITLE} />);

  const name = screen.getByText(FAKE_TITLE);

  expect(name).toBeInTheDocument();


});

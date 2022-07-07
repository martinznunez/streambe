import React from "react";

import {  render, screen } from "@testing-library/react";

import UserName from "./UserName";

const FAKE_USER_NAME = "name test";

test("when rendering the component", () => {
  render(<UserName userName={FAKE_USER_NAME} />);

  const name = screen.getByText(/name test/i);

  expect(name).toBeInTheDocument();
  expect(screen.getByText(/hola/i)).toBeInTheDocument();

});

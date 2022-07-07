import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import Input from "./index";

const handleChange = jest.fn();

const FAKE_NAME = "name test";
const FAKE_VALUE = "value test";
const FAKE_PLACEHOLDER = "email";
const FAKE_TYPE = "email";

test("when rendering the component", () => {
  render(
    <Input
      type={FAKE_TYPE}
      handleChange={handleChange}
      name={FAKE_NAME}
      placeholder={FAKE_PLACEHOLDER}
      value={FAKE_VALUE}
    />
  );

  const input = screen.getByPlaceholderText(/email/i);
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: FAKE_VALUE } });

  expect(input.value).toBe(FAKE_VALUE);
});

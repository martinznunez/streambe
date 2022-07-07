import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

test("when rendering the component", () => {
  render(<App />);

  const title = screen.getByText(/Login/i);

  expect(title).toBeInTheDocument();
  const subTitle = screen.getByText(/Log in/i);

  expect(subTitle).toBeInTheDocument();
});

test("when rendering the component and complied inputs", () => {
  render(<App />);

  const inputEmail = screen.getByPlaceholderText(/email/i);
  expect(inputEmail).toBeInTheDocument();

  fireEvent.change(inputEmail, { target: { value: "test@hotmail.com" } });

  expect(inputEmail.value).toBe("test@hotmail.com");
  const inputPassword = screen.getByPlaceholderText(/password/i);
  expect(inputPassword).toBeInTheDocument();

  fireEvent.change(inputPassword, { target: { value: "12345" } });

  expect(inputPassword.value).toBe("12345");

  const button = screen.getByText(/ingresar/i);
  expect(button).toBeInTheDocument();

  fireEvent.submit(button);

  
});

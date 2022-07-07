import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "./index";

const handleSubmit = jest.fn();

test("when rendering the component", () => {
  render(
    <Router>
      <Login handleSubmit={handleSubmit} />
    </Router>
  );

  const inputEmail = screen.getByPlaceholderText(/email/i);
  expect(inputEmail).toBeInTheDocument();

  const inputPassword = screen.getByPlaceholderText(/password/i);
  expect(inputPassword).toBeInTheDocument();
  const button = screen.getByText(/ingresar/i);
  expect(button).toBeInTheDocument();
});

test("when rendering the component and complied inputs", async () => {
  render(
    <Router>
      <Login handleSubmit={handleSubmit} />
    </Router>
  );

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

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("when the fields are empty and submit is executed", () => {
  render(
    <Router>
      <Login handleSubmit={handleSubmit} />
    </Router>
  );

  const inputEmail = screen.getByPlaceholderText(/email/i);
  expect(inputEmail).toBeInTheDocument();

  fireEvent.change(inputEmail, { target: { value: "" } });

  expect(inputEmail.value).toBe("");
  const inputPassword = screen.getByPlaceholderText(/password/i);
  expect(inputPassword).toBeInTheDocument();

  fireEvent.change(inputPassword, { target: { value: "" } });

  expect(inputPassword.value).toBe("");

  const button = screen.getByText(/ingresar/i);
  expect(button).toBeInTheDocument();

  fireEvent.submit(button);
  expect(handleSubmit).not.toHaveBeenCalled();
});

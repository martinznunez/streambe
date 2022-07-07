import React from "react";

import { render, screen } from "@testing-library/react";

import Table from "./index";

const FAKE_DATA_LIST = [
  {
    birthDate: "1985-12-12",
    contactId: 2,
    name: "jose",
    photo: "photo",
  },
];

test("when rendering the component", () => {
  render(<Table dataList={FAKE_DATA_LIST} />);

  const nameTitle = screen.getByText(/Name/i);
  expect(nameTitle).toBeInTheDocument();
  const dateTitle = screen.getByText(/Birth Date/i);
  expect(dateTitle).toBeInTheDocument();
  const photoTitle = screen.getByText(/Photo/i);
  expect(photoTitle).toBeInTheDocument();

  const nameTd = screen.getByText(/jose/i);
  expect(nameTd).toBeInTheDocument();
  const dateTd = screen.getByText(/miércoles, 11 de diciembre de 1985/i);
  expect(dateTd).toBeInTheDocument();

  const img = screen.getByRole("img", { name: /icon/i });

  expect(img).toBeInTheDocument();
});

import React from "react";

import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./index";

const FAKE_USER = "name test";
jest.mock("axios");

describe("app render", () => {
  beforeEach(() => {
   
    axios.get.mockReturnValueOnce({
      data: {
        users: [
          {
            birthDate: "1985-12-12",
            contactId: 2,
            name: "jose",
            photo: "photo",
            surnames: "Serra",
          },
        ],
      },
    });

    axios.get.mockClear();
    
  });

  test("when rendering the component",async () => {
    render(
      <Router>
        <Dashboard user={FAKE_USER} />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/name test/i)).toBeInTheDocument();
      expect(screen.getByText(/Logout/i)).toBeInTheDocument();
      const img = screen.getByRole("img", { name: /icon/i });

      expect(img).toBeInTheDocument();
     
    });


  });
});

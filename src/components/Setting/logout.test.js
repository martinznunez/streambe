import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import Logout from "./Logout";

const handleClickLogout = jest.fn();

test("when rendering the component", () => {
    render(<Logout handleClickLogout={handleClickLogout} />);
    

    const img = screen.getByRole('img', { name: /icon/i })

    expect(img).toBeInTheDocument()

    const titleLogout =screen.getByText(/logout/i)
    expect(titleLogout).toBeInTheDocument()

    fireEvent.click(titleLogout)
    expect(handleClickLogout).toHaveBeenCalledTimes(1)
 
});

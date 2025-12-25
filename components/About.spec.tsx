import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React, { ReactElement } from "react";
import About from "@components/About";

// jest.mock("next/link", () => {
//   return ({ children, ...rest }: { children: ReactElement }) =>
//     React.cloneElement(children, { ...rest });
// });

describe("About Component", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("renders heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("About Us");
  });

  it("Link `View Events` has href to /events", () => {
    const viewEventsButton = screen.getByText(/View Events/);
    expect(viewEventsButton).toHaveAttribute("href", "/events");
  });

  it("Link `Join Us` has href to /register", () => {
    const joinUsButton = screen.getByText(/Join Us/);
    expect(joinUsButton).toHaveAttribute("href", "/register");
  });
});

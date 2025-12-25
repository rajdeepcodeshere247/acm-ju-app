import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "@components/Footer";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Link `Email` has href to acmjustudentchapter@gmail.com", () => {
    const emailElement = screen.getByTitle("Our email");
    expect(emailElement).toHaveAttribute(
      "href",
      "mailto:acmjustudentchapter@gmail.com"
    );
  });

  it("Link `Address` has href to https://maps.app.goo.gl/ekS9RmQ1RrNeXzrm9", () => {
    const addressElement = screen.getByTitle("Our address");
    expect(addressElement).toHaveAttribute(
      "href",
      "https://maps.app.goo.gl/ekS9RmQ1RrNeXzrm9"
    );
  });
});

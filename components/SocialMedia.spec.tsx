import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SocialMediaHandleButton, {
  SocialMedia,
  SocialMediaType,
} from "@/components/SocialMedia";

describe("SocialMedia Component", () => {
  it("renders the component with the correct link", () => {
    const mockUrl = "https://www.example.com";
    const socialMedia = new SocialMedia(SocialMediaType.LINKEDIN);
    const mockLength = 24;

    render(
      <SocialMediaHandleButton
        url={mockUrl}
        socialMedia={socialMedia}
        length={mockLength}
      />
    );

    // Ensure the anchor element is rendered with the correct URL
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", mockUrl);
  });
});

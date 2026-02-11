import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
  it("should load Contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load Contact component with correct text", () => {
    render(<Contact />);
    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
  });

  test("should load 2 paragraphs in Contact component", () => {
    render(<Contact />);
    const paragraphs = screen.getAllByRole("paragraph");
    expect(paragraphs.length).toBe(2);
  });
});

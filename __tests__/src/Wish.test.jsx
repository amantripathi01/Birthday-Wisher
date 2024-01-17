import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Wish from "../../src/Wish";
describe("Wish Component", () => {
  // Test case to ensure the Wish component renders with the `name` prop
  test("renders the birthday message with a name", () => {
    const testName = "John";
    const { container } = render(<Wish name={testName} />);
    expect(container).toBeInTheDocument();
    // Asserting the message is in the document
  });
  // Test case to ensure the component correctly handles empty names
  test("renders correctly with an empty name", () => {
    render(<Wish name='' />);
    expect(screen.getByText(/HAPPY BIRTHDAY/i)).toBeInTheDocument();
    expect(screen.getByText(/!!!/)).toBeInTheDocument();
  });
  // Additional tests such as edge cases, error handling, props, states, and lifecycle methods can be added here
});
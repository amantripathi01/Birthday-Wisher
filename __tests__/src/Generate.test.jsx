import React from "react";
import Generate from "../../src/Generate"; // Adjusted relative path from __tests__/src
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
// Test suite for the Generate component
describe("Generate Component", () => {
  test("should allow entering a name", () => {
    render(<Generate />);
    const nameInput = screen.getByPlaceholderText("Enter Name");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");
  });
  test("should allow selecting a day and month", () => {
    render(<Generate />);
    const dayInput = screen.getByPlaceholderText("Enter Day");
    const monthSelect = screen.getByText("Select Month");
    fireEvent.change(dayInput, { target: { value: "10" } });
    fireEvent.change(monthSelect, { target: { value: "5" } }); // Assuming '5' corresponds to May
    expect(dayInput.value).toBe("10");
    expect(monthSelect.value).toBe("5");
  });
  test("should generate the correct link upon form submission", () => {
    render(
      <MemoryRouter>
        <Generate />
      </MemoryRouter>
    );
    const nameInput = screen.getByPlaceholderText("Enter Name");
    const dayInput = screen.getByPlaceholderText("Enter Day");
    const monthSelect = screen.getByText("Select Month");
    const generateButton = screen.getByText("Generate Link"); // Assuming there is a button with this text
    fireEvent.change(nameInput, { target: { value: "JaneDoe" } });
    fireEvent.change(dayInput, { target: { value: "15" } });
    fireEvent.change(monthSelect, { target: { value: "1" } }); // Assuming '6' corresponds to June
    fireEvent.click(generateButton);
    const generatedLink = "Visit Link";
    expect(screen.getByText(generatedLink)).toBeInTheDocument();
  });
  // Add more test cases for error handling, edge cases, and so on.
});
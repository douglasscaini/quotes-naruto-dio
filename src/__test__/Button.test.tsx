import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";

test("renders button with text", () => {
  render(<Button>Test</Button>);

  const buttonElement = screen.getByText("Test");

  expect(buttonElement).toBeInTheDocument();
});

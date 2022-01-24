import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the app with a button, a quote and a image", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button");
  const textElement = screen.getByText("test quote");
  const imageElement = screen.getByRole("img");

  expect(buttonElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});

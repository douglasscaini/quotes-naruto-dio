import { render, screen, fireEvent } from "@testing-library/react";
import { Quotes } from "../components/Quotes";

const quote = "test quote";
const character = "test character";

test("renders received quote, speaker and a button", () => {
  render(<Quotes quote={quote} character={character} />);

  const quoteElement = screen.getByText(quote);
  const speakerElement = screen.getByText(`- ${character}`);
  const buttonElement = screen.getByRole("button");

  expect(quoteElement).toBeInTheDocument();
  expect(speakerElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("calls a callback when button is pressed", () => {
  const callback = jest.fn();

  render(<Quotes quote={quote} character={character} handleUpdateContent={callback} />);

  const buttonElement = screen.getByRole("button");

  fireEvent.click(buttonElement);

  expect(callback).toHaveBeenCalledTimes(1);
});

import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

import { rest } from "msw";
import { setupServer } from "msw/node";

const response = { quote: "test quote", character: "test character" };

const server = setupServer(
  rest.get("http://127.0.0.1:5000", (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("calls api on button click and update its text", async () => {
  render(<App />);

  const buttonElement = screen.getByRole("button");

  fireEvent.click(buttonElement);

  const quoteElement = await screen.findByText(response.quote);

  expect(quoteElement).toBeInTheDocument();
});

test("renders the app with a button, a quote and a image", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button");
  const textElement = screen.getByText("test quote");
  const imageElement = screen.getByRole("img");

  expect(buttonElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});

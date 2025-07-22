import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import MOCK_DATA from "../../components/mockdata/ResListMockData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should render the body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardBeforeSearch=screen.getAllByTestId('resCard')
  expect(cardBeforeSearch.length).toBe(8)
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("search");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const card=screen.getAllByTestId("resCard")
  expect(searchInput).toBeInTheDocument();
  expect(card.length).toBe(1)
});
it("should show the card after clicking the button Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardBeforeSearch.length).toBe(8);
  const searchBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  
  fireEvent.click(searchBtn);
  const card = screen.getAllByTestId("resCard");
  expect(card.length).toBe(6);
});
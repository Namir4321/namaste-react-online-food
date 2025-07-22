import ReasturentMenu from "../Pages/ReasturentMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA_NAME from "../mockdata/SingleRsData.json";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../Redux/Store";
// import "@testing-library/jest-dom";
import Cart from "../Pages/Cart";
import "@testing-library/jest-dom";

import Header from "../Header";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);
it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ReasturentMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Flash Sale Pizzas (2)");
  fireEvent.click(accordianHeader);
  // console.log(accordianHeader);
  expect(screen.getAllByTestId("food-Item").length).toBe(2);
  // expect(screen.getAllByTestId("food-Item").length).toBe(2);
  // expect(screen.getByText("Cart(0)").toBeInTheDocument());
  const cartHeader = screen.getByText("Cart(0)");
  // console.log(cartHeader)
  expect(cartHeader).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  // const cartCount = screen.getByText("Cart(1)");
  // console.log(cartCount);
  expect(screen.getByText("Cart(1)")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart(2)")).toBeInTheDocument();
  expect(screen.getAllByTestId("food-Item").length).toBe(2);
  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
  expect(screen.getAllByTestId("food-Item").length).toBe(2);
  expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
// expect(
//   screen.getByText("Cart is empty. Add Items to the cart!")
// ).toBeInTheDocument();
});

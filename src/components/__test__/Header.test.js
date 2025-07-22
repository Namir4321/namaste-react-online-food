// global.TextEncoder = require("util").TextEncoder;
// import { render, screen } from "@testing-library/react";
// import Header from "../Header";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { appStore } from "../../Redux/Store";
// it("should load the Header componet with the login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   const headerBtn = screen.getByRole("button", { name: "Login" });
//   console.log(headerBtn);
// });

import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../Redux/Store";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  // const loginButton=screen.getByText("Login")
  //const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});
it("Should render Cart Component with a Cart link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button", { name: "Login" });
  const cart = screen.getByText("Cart(0)");
  //const loginButton = screen.getByText("Login");

  expect(cart).toBeInTheDocument();
});
it("Should render Cart Component with a Cart heading", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button", { name: "Login" });
  const cart = screen.getByText("Cart(0)")
  //const loginButton = screen.getByText("Login");

  expect(cart).toBeInTheDocument();
});
it("Should change login button to logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button", { name: "Login" });
  const LoginButton = screen.getByRole("button", { name: "Login" });
  //const loginButton = screen.getByText("Login");
  fireEvent.click(LoginButton);
  const btnchange = screen.getByRole("button", { name: "Logout" });

  expect(btnchange).toBeInTheDocument();
});

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import ReasturentMenu from "./components/Pages/ReasturentMenu";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
// optmizing the app
// {we can do this by many ways like spliting the code in small chunks
// using the  reusable component and make the compnnent lighter
// and other is we can say it has many name
// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt
//    }
const About = lazy(() => import("./components/Pages/About"));
const Grocery = lazy(() => import("./components/Grocery"));
// so it loads this compoonet on demand if there is a need
// it loads the component otherwise not
// for eg if a file size is too huge and has different
// microssite for eg in makemytrip it has fligh booking
// hotel reservation and other
// so itwill is huge in term of size so it loads component
//  in same way on demand rather than all in one and it make
// site more faster
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "User",
    };
    setUserName(data.name);
  },[]);
  return (
    <div className="App">
      <UserContext.Provider value={{ loggedInUser: userName ,setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            {/* suspense is used like when we click the 
            link it needs some time to load the component
            as it follows lazy loading and react is fast so
            if we dont use it the react will render fast and it has 
            nothing to render so it will throw error in order to
            give something to render we use suspense and fallback
            and as soon as there is data it render that page so 
            it make the site optmize and faster and lighter */}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <ReasturentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

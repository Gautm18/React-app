import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";

const MainApp = () => {
  return (
    <>
      <HeaderComp />
      <Outlet/>
    </>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainApp/>,
      errorElement: <Error/>,
      children:[
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/about",
          element: <AboutUs/>
        },
        {
          path: "/contact-us",
          element: <ContactUs/>
        },
        {
          path: "/restaurants/:id",
          element: <ResMenu/>
        }
      ]

    }
    
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

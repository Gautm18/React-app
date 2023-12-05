import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/Header";
import Body from "./components/Body";

const MainApp = () => {
  return (
    <>
      <HeaderComp />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);

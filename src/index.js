import React from "react";
import ReactDOM from "react-dom/client";
import NavAndMenu from "./components/menu/responsive-02/NavAndMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Sidebar /> */}
    <NavAndMenu />
  </React.StrictMode>
);

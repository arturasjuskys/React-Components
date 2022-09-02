import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./components/form/Form";
import Sidebar from "./components/menu/responsive-menu/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Sidebar /> */}
    <Form />
  </React.StrictMode>
);

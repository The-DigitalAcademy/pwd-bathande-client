import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import ContextState from "../context/contextState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextState>
      <RouterProvider router={router} />
    </ContextState>
  </React.StrictMode>
);

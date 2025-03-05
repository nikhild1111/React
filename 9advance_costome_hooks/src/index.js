import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    // Remove <React.StrictMode> to prevent double rendering
    <App />
  // </React.StrictMode>
);

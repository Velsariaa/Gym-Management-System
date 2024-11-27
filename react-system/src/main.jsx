import React from "react";
import { createRoot } from "react-dom/client"; // Correct import for React 18
import { BrowserRouter } from "react-router-dom"; // Correct import
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";       // your top‐level component
import "./index.css";              // any global styles
import "bootstrap/dist/css/bootstrap.min.css";  // if you’re using Bootstrap
// (optional) import your teams.css here if you moved it into src:
// import "./assets/css/teams.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

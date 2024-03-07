import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import TokenContextProvider from "./components/Context/tokenContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <TokenContextProvider>
    <App />
  </TokenContextProvider>
);

// Home.. contact.. about .. register .. login

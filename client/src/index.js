import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import { GlobalProvider } from "./context/GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <GlobalProvider>
        <Router>
          <App />
        </Router>
      </GlobalProvider>
    </UserContextProvider>
  </React.StrictMode>
);

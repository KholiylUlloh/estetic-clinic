import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Router>
      <Root />
    </Router>
  </React.Fragment>
);

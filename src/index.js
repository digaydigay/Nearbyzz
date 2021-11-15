import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";

// auth provider

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("nearbyzz")
);

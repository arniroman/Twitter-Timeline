import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HomePage } from "./components/Home/home";
import store from "./store";
import Routes from "./routes/routes";

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);

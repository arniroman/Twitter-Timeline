import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HomePage } from "./components/Home/home";
import store from "./store";

render(
  <Provider store={store}>
      <HomePage />
  </Provider>,
  document.getElementById("app")
);

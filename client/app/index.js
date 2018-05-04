import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import HomePage from "components/home";
import store from "./store";

render(
  <Provider store={store}>
    <div>
      <HomePage />
    </div>
  </Provider>,
  document.getElementById("app")
);

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HomePage } from "./components/Home/home";
import store from "./store";

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

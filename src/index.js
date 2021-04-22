import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import configureStore from "./stores/configureStore";
import * as actions from "./actions";
import Stream from "./components/Stream";

const tracks = [{ title: "Some track" }, { title: "Some other track" }];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();

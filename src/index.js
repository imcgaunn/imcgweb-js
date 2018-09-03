import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";

const initialState = {};
const middleware = [];
const rootReducer = state => {
  return state;
};
const store = createStore(rootReducer, initialState);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();

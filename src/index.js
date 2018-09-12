import React from "react";
import ReactDOM from "react-dom";
import "./components/index.css";
import App from "./components/App";
import {Map} from "immutable";
import registerServiceWorker from "./registerServiceWorker";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {projectsReducer} from "./reducers/projects";

const initialState = Map();
const middleware = [thunk, createLogger()];
const rootReducer = combineReducers({projects: projectsReducer});
const store = createStore(rootReducer,
  initialState,
  applyMiddleware(...middleware));

ReactDOM.render(<App store={store}/>, document.getElementById("root"));
registerServiceWorker();

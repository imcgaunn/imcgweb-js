import {
  doFetchProjectsAsync
} from "../actions/projects";
import { projectsReducer } from "./reducers";
import { isRegExp } from "util";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

it("can update state with result of async request", () => {
  const testStore = createStore(
    projectsReducer,
    applyMiddleware(thunk)
  );
  testStore.dispatch(doFetchProjectsAsync("imcgaunn"));
});

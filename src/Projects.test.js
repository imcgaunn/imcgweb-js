import { fetchProjects } from "./Projects";
import { fromJS, Map } from "immutable";
import {
  createFetchSuccessAction,
  createFetchFailureAction,
  createFetchStartAction
} from "./actions";
import { projectsReducer } from "./reducers";
import { isRegExp } from "util";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

it("can update state with result of async request", () => {
  const testStore = createStore(
    projectsReducer,
    applyMiddleware(thunk)
  );

  const doFetchProjects = username => {
    return (dispatch, getState) => {
      createFetchStartAction();
      fetchProjects(username)
        .then(data => {
          const immutableData = fromJS(data);
          const interestingData = immutableData.map(proj => {
            return Map({
              url: proj.get("html_url"),
              pushed_at: proj.get("pushed_at")
            });
          });
          dispatch(createFetchSuccessAction(interestingData));
        })
        .catch(err => {
          dispatch(createFetchFailureAction(err));
        });
    }
  };
  testStore.dispatch(doFetchProjects("imcgaunn"));
});

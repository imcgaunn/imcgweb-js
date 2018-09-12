import {Map} from "immutable";
import {fetchProjects} from "../components/Projects";
import {fromJS} from "immutable/dist/immutable";

export const START_FETCH_PROJECTS = 'START_FETCH_PROJECTS';
export const FAILED_FETCH_PROJECTS = 'FAILED_FETCH_PROJECTS';
export const SUCCESS_FETCH_PROJECTS = 'SUCCESS_FETCH_PROJECTS';

export const createFetchSuccessAction = data => {
  return {
    type: SUCCESS_FETCH_PROJECTS,
    payload: data
  };
};

export const createFetchStartAction = username => {
  return {
    type: START_FETCH_PROJECTS,
    payload: Map({username: username})
  };
};

export const createFetchFailureAction = err => {
  return {
    type: FAILED_FETCH_PROJECTS,
    payload: Map({ error: err })
  };
};

export const doFetchProjectsAsync = username => {
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
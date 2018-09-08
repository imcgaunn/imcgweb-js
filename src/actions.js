import {Map} from "immutable/dist/immutable";

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
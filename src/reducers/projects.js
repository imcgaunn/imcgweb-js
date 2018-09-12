import { START_FETCH_PROJECTS, FAILED_FETCH_PROJECTS, SUCCESS_FETCH_PROJECTS } from '../actions/projects';
import { List } from 'immutable';

const INITIAL_STATE = List();

export const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCH_PROJECTS:
      break;
    case FAILED_FETCH_PROJECTS:
    // will this fall through? what are the switch semantics?
    // A: yup :)
    case SUCCESS_FETCH_PROJECTS:
      return action.payload;
    default:
      return state;
  }
  return state;
};

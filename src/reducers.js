import { START_FETCH_PROEJCTS, FAILED_FETCH_PROJECTS, SUCCESS_FETCH_PROJECTS } from './actions';
import { fetchProjects } from './Projects'
import { Map } from 'immutable';

const INITIAL_STATE = Map();

export const projectsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_FETCH_PROEJCTS:  break
        case FAILED_FETCH_PROJECTS:
            console.log(action.payload);
            // will this fall through? what are the switch semantics?
            // A: yup :)
        case SUCCESS_FETCH_PROJECTS:
            console.log(action.payload);
        default:
            return state;
    }
    return state;
}
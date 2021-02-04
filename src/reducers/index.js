import { combineReducers } from 'redux';
import projectTypeReducer from '../modules/project-type/reducers/project-type.reducers';
export const rootReducer = combineReducers({
  projectType: projectTypeReducer,
});

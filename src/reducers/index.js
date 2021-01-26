import { combineReducers } from 'redux';
import projectTypeReducer from './projectTypeReducer';
export const rootReducer = combineReducers({
  projectType: projectTypeReducer,
});

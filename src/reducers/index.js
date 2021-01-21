import { combineReducers } from 'redux';
import typeReducer from './typeReducer';
export const rootReducer = combineReducers({
  type: typeReducer,
});

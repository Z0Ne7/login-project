import { ACTION } from '../constants/action-type';

export const addProjectType = inputData => ({
  type: ACTION.ADD_PROJECT_TYPE,
  payload: inputData,
});

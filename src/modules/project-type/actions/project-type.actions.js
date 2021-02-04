import { ACTION } from '../constants/project-type.constants';

export const addProjectType = inputData => ({
  type: ACTION.ADD_PROJECT_TYPE,
  payload: inputData,
});

export const getDataProjectTypes = dataProjectType => ({
  type: ACTION.GET_DATA_PROJECT_TYPE,
  payload: dataProjectType,
});

import { ACTION } from '../constants/projects.constants';

export const addProjects = inputData => ({
  type: ACTION.ADD_PROJECT,
  payload: inputData,
});

export const getDataProjects = dataProjects => ({
  type: ACTION.GET_DATA_PROJECT,
  payload: dataProjects,
});

export const getDetailsProjects = id => ({
  type: ACTION.GET_DETAILS_PROJECT,
  payload: id,
});

export const updateProjects = inputData => ({
  type: ACTION.UPDATE_PROJECT,
  payload: inputData,
});

export const deleteProjects = id => ({
  type: ACTION.DELETE_PROJECT,
  payload: id,
});

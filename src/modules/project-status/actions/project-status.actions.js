import { ACTION } from '../constants/project-status.constants';
import { toast } from 'react-toastify';

export const addProjectStatus = inputData => {
  toast.success('Success');
  return {
    type: ACTION.ADD_PROJECT_STATUS,
    payload: inputData,
  };
};

export const getDataProjectStatuses = dataProjectStatus => ({
  type: ACTION.GET_DATA_PROJECT_STATUS,
  payload: dataProjectStatus,
});

export const getDetailsProjectStatus = id => ({
  type: ACTION.GET_DETAILS_PROJECT_STATUS,
  payload: id,
});

export const updateProjectStatus = inputData => {
  toast.success('Success');
  return {
    type: ACTION.UPDATE_PROJECT_STATUS,
    payload: inputData,
  };
};

export const deleteProjectStatus = id => ({
  type: ACTION.DELETE_PROJECT_STATUS,
  payload: id,
});

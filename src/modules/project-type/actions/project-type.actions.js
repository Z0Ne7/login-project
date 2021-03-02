import { ACTION } from '../constants/project-type.constants';
import { toast } from 'react-toastify';

export const addProjectType = inputData => {
  toast.success('Success');
  return {
    type: ACTION.ADD_PROJECT_TYPE,
    payload: inputData,
  };
};

export const getDataProjectTypes = dataProjectType => ({
  type: ACTION.GET_DATA_PROJECT_TYPE,
  payload: dataProjectType,
});

export const getDetailsProjectType = id => ({
  type: ACTION.GET_DETAILS_PROJECT_TYPE,
  payload: id,
});

export const updateProjectType = inputData => {
  toast.success('Success');
  return {
    type: ACTION.UPDATE_PROJECT_TYPE,
    payload: inputData,
  };
};

export const deleteProjectType = id => ({
  type: ACTION.DELETE_PROJECT_TYPE,
  payload: id,
});

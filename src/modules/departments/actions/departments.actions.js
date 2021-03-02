import { toast } from 'react-toastify';
import { ACTION } from '../constants/departments.constants';

export const addDepartments = inputData => {
  toast.success('Success');
  return {
    type: ACTION.ADD_DEPARTMENT,
    payload: inputData,
  };
};

export const getDataDepartments = dataDepartments => ({
  type: ACTION.GET_DATA_DEPARTMENT,
  payload: dataDepartments,
});

export const getDetailsDepartments = id => ({
  type: ACTION.GET_DETAILS_DEPARTMENT,
  payload: id,
});

export const updateDepartments = inputData => {
  toast.success('Success');
  return {
    type: ACTION.UPDATE_DEPARTMENT,
    payload: inputData,
  };
};

export const deleteDepartments = id => ({
  type: ACTION.DELETE_DEPARTMENT,
  payload: id,
});

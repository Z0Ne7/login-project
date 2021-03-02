import { toast } from 'react-toastify';
import { ACTION } from '../constants/staffs.constants';

export const addStaffs = inputData => {
  toast.success('Success');
  return {
    type: ACTION.ADD_STAFF,
    payload: inputData,
  };
};

export const getDataStaffs = dataStaffs => ({
  type: ACTION.GET_DATA_STAFF,
  payload: dataStaffs,
});

export const getDetailsStaffs = id => ({
  type: ACTION.GET_DETAILS_STAFF,
  payload: id,
});

export const updateStaffs = inputData => {
  toast.success('Success');
  return {
    type: ACTION.UPDATE_STAFF,
    payload: inputData,
  };
};

export const deleteStaffs = id => ({
  type: ACTION.DELETE_STAFF,
  payload: id,
});

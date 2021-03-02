import { toast } from 'react-toastify';
import { ACTION } from '../constants/tech-stack.constants';

export const addTechStack = inputData => {
  toast.success('Success');
  return {
    type: ACTION.ADD_TECH_STACK,
    payload: inputData,
  };
};

export const getDataTechStacks = dataTechStack => ({
  type: ACTION.GET_DATA_TECH_STACK,
  payload: dataTechStack,
});

export const getDetailsTechStack = id => ({
  type: ACTION.GET_DETAILS_TECH_STACK,
  payload: id,
});

export const updateTechStack = inputData => {
  toast.success('Success');
  return {
    type: ACTION.UPDATE_TECH_STACK,
    payload: inputData,
  };
};

export const deleteTechStack = id => ({
  type: ACTION.DELETE_TECH_STACK,
  payload: id,
});

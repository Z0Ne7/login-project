import { toast } from 'react-toastify';
import { ACTION } from '../constants/customer.constants';

export const addCustomer = inputData => {
  toast.success('Success');
  return {
    type: ACTION.ADD_CUSTOMER,
    payload: inputData,
  };
};

export const getDataCustomers = dataCustomer => ({
  type: ACTION.GET_DATA_CUSTOMER,
  payload: dataCustomer,
});

export const getDetailsCustomer = id => ({
  type: ACTION.GET_DETAILS_CUSTOMER,
  payload: id,
});

export const updateCustomer = inputData => {
  toast.success('Success');
  return {
    type: ACTION.UPDATE_CUSTOMER,
    payload: inputData,
  };
};

export const deleteCustomer = id => ({
  type: ACTION.DELETE_CUSTOMER,
  payload: id,
});

import { ACTION } from '../constants/departments.constants';
import * as api from '../../../services/departments.services';

const localItem = 'departments';
const initialState = {
  data: [],
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_DATA_DEPARTMENT:
      if (state.data.length < 1) {
        action.payload.data.map(data => {
          state.data.push(data);
        });
      }
      return state;
    case ACTION.ADD_DEPARTMENT:
      state.data.push(action.payload);
      api.apiPost(localItem, JSON.stringify(state));
      return state;
    case ACTION.UPDATE_DEPARTMENT: {
      const { payload } = action;
      const index = state.data.findIndex(data => data.id === payload.id);
      state.data[index] = payload;
      api.apiPut(localItem, JSON.stringify(state));
      return state;
    }
    case ACTION.DELETE_DEPARTMENT: {
      const { payload } = action;
      const index = state.data.findIndex(data => data.id === payload);
      state.data.splice(index, 1);
      api.apiPut(localItem, JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
};

export default departmentReducer;

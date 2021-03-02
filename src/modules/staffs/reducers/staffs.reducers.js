import { ACTION } from '../constants/staffs.constants';
import * as api from '../../../services/staffs.services';

const localItem = 'staffs';
const initialState = {
  data: [],
};

const staffReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_DATA_STAFF:
      if (state.data.length < 1) {
        action.payload.data.map(data => {
          state.data.push(data);
        });
      }
      return state;
    case ACTION.ADD_STAFF:
      state.data.push(action.payload);
      api.apiPost(localItem, JSON.stringify(state));
      return state;
    case ACTION.UPDATE_STAFF: {
      const { payload } = action;
      const index = state.data.findIndex(data => data.id === payload.id);
      state.data[index] = payload;
      api.apiPut(localItem, JSON.stringify(state));
      return state;
    }
    case ACTION.DELETE_STAFF: {
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

export default staffReducer;

import { ACTION } from '../constants/tech-stack.constants';
import * as api from '../../../services/tech-stack.services';

const localItem = 'techStack';
const initialState = {
  data: [],
};

const techStackReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_DATA_TECH_STACK:
      if (state.data.length < 1) {
        action.payload.data.map(data => {
          state.data.push(data);
        });
      }
      return state;
    case ACTION.ADD_TECH_STACK:
      state.data.push(action.payload);
      api.apiPost(localItem, JSON.stringify(state));
      return state;
    case ACTION.UPDATE_TECH_STACK: {
      const { payload } = action;
      const index = state.data.findIndex(data => data.id === payload.id);
      state.data[index] = payload;
      api.apiPut(localItem, JSON.stringify(state));
      return state;
    }
    case ACTION.DELETE_TECH_STACK: {
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

export default techStackReducer;

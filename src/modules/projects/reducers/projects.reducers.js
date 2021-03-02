import { ACTION } from '../constants/projects.constants';
import * as api from '../../../services/projects.services';

const localItem = 'projects';
const initialState = {
  data: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_DATA_PROJECT:
      if (state.data.length < 1) {
        action.payload.data.map(data => {
          state.data.push(data);
        });
      }
      return state;
    case ACTION.ADD_PROJECT:
      state.data.push(action.payload);
      api.apiPost(localItem, JSON.stringify(state));
      return state;
    case ACTION.UPDATE_PROJECT: {
      const { payload } = action;
      const index = state.data.findIndex(data => data.id === payload.id);
      state.data[index] = payload;
      api.apiPut(localItem, JSON.stringify(state));
      return state;
    }
    case ACTION.DELETE_PROJECT: {
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

export default projectReducer;

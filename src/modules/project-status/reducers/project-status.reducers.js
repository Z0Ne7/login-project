import { ACTION } from '../constants/project-status.constants';
import * as api from '../../../services/project-status.services';

const localItem = 'projectStatus';
const initialState = {
  data: [],
};

const projectStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_DATA_PROJECT_STATUS:
      if (state.data.length < 1) {
        action.payload.data.map(data => {
          state.data.push(data);
        });
      }
      return state;
    case ACTION.ADD_PROJECT_STATUS:
      state.data.push(action.payload);
      api.apiPost(localItem, JSON.stringify(state));
      return state;
    case ACTION.UPDATE_PROJECT_STATUS: {
      const { payload } = action;
      const index = state.data.findIndex(data => data.id === payload.id);
      state.data[index] = payload;
      api.apiPut(localItem, JSON.stringify(state));
      return state;
    }
    case ACTION.DELETE_PROJECT_STATUS: {
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

export default projectStatusReducer;

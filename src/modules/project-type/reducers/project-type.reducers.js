import { ACTION } from '../constants/project-type.constants';
import produce from 'immer';

const initialState = {
  data: [],
};

const projectTypeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION.GET_DATA_PROJECT_TYPE:
        if (draft.data.length < 1) {
          action.payload.data.map(data => {
            draft.data.push(data);
          });
        }
        break;
      case ACTION.ADD_PROJECT_TYPE:
        draft.data.push(action.payload);
        break;
      case ACTION.UPDATE_PROJECT_TYPE: {
        const { payload } = action;
        const index = draft.data.findIndex(data => data.id === payload.id);
        draft.data[index] = payload;
        break;
      }
      case ACTION.DELETE_PROJECT_TYPE: {
        const { payload } = action;
        const index = draft.data.findIndex(data => data.id === payload);
        draft.data.splice(index, 1);
        break;
      }
      default:
        return state;
    }
  });

export default projectTypeReducer;

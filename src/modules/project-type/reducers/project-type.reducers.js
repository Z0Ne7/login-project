import { ACTION } from '../constants/project-type.constants';

const initialState = {
  data: [],
};

const projectTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_DATA_PROJECT_TYPE:
      state.data = action.payload;
      return state;
    case ACTION.ADD_PROJECT_TYPE:
      state.push(action.payload);
      localStorage.setItem('projectType', JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default projectTypeReducer;

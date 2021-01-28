import { ACTION } from '../constants/action-type';

const projectTypeData = JSON.parse(localStorage.getItem('projectType'));
const initialState = projectTypeData ? projectTypeData : [];

const projectTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOAD_DATA_TABLE:
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

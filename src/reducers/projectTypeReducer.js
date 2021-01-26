import { ACTION } from '../constants/action-type';

const initialState = [
  {
    name: 'Project 1',
    description: 'Project Type 1',
    priority: 0,
    status: 'active',
  },
  {
    name: 'Project 1',
    description: 'Project Type 1',
    priority: 0,
    status: 'active',
  },
  {
    name: 'Project 1',
    description: 'Project Type 1',
    priority: 0,
    status: 'active',
  },
];

const projectTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOAD_DATA_TABLE:
      return state;
    default:
      return state;
  }
};

export default projectTypeReducer;

import { combineReducers } from 'redux';
import projectTypeReducer from '../modules/project-type/reducers/project-type.reducers';
import projectStatusReducer from '../modules/project-status/reducers/project-status.reducers';
import techStackReducer from '../modules/tech-stack/reducers/tech-stack.reducers';
import customerReducer from '../modules/customer/reducers/customer.reducers';
import staffReducer from '../modules/staffs/reducers/staffs.reducers';
import departmentReducer from '../modules/departments/reducers/departments.reducers';
import projectReducer from '../modules/projects/reducers/projects.reducers';
export const rootReducer = combineReducers({
  projectType: projectTypeReducer,
  projectStatus: projectStatusReducer,
  techStack: techStackReducer,
  customer: customerReducer,
  staffs: staffReducer,
  departments: departmentReducer,
  projects: projectReducer,
});

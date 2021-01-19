import { LoginPage } from '../pages/login/login';
import { ProjectType } from '../pages/project-type/project-type';

export const routes = [
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/project-type',
    exact: true,
    component: ProjectType,
  },
];

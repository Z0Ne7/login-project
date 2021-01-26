import { LoginPage } from '../pages/login/login';
import { ProjectType } from '../pages/project-type/project-type';
import { ProjectTypeCreate } from '../pages/project-type/project-type-create';

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
  {
    path: '/project-type/create',
    exact: true,
    component: ProjectTypeCreate,
  },
];

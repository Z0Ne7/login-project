import { LoginPage } from '../pages/login/login';
import { ProjectType } from '../pages/project-type/project-type';
import { ProjectTypeCreate } from '../pages/project-type/project-type-create';
import { ProjectTypeDetails } from '../pages/project-type/project-type-details';
import { ProjectStatus } from '../pages/project-status/project-status';
import { ProjectStatusCreate } from '../pages/project-status/project-status-create';
import { ProjectStatusDetails } from '../pages/project-status/project-status-details';
import { TechStack } from '../pages/tech-stack/tech-stack';
import { TechStackCreate } from '../pages/tech-stack/tech-stack-create';
import { TechStackDetails } from '../pages/tech-stack/tech-stack-details';
import { Customer } from '../pages/customer/customer';
import { CustomerCreate } from '../pages/customer/customer-create';
import { CustomerDetails } from '../pages/customer/customer-details';
import { Staffs } from '../pages/staffs/staffs';
import { StaffsCreate } from '../pages/staffs/staffs-create';
import { StaffsDetails } from '../pages/staffs/staffs-details';
import { Departments } from '../pages/departments/departments';
import { DepartmentsCreate } from '../pages/departments/departments-create';
import { DepartmentsDetails } from '../pages/departments/departments-details';
import { Projects } from '../pages/projects/projects';
import { ProjectsCreate } from '../pages/projects/projects-create';
import { ProjectsDetails } from '../pages/projects/projects-details';

export const routes = [
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/',
    exact: true,
    component: ProjectType,
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
  {
    path: '/project-type/:id',
    exact: true,
    component: ProjectTypeDetails,
  },
  {
    path: '/project-status',
    exact: true,
    component: ProjectStatus,
  },
  {
    path: '/project-status/create',
    exact: true,
    component: ProjectStatusCreate,
  },
  {
    path: '/project-status/:id',
    exact: true,
    component: ProjectStatusDetails,
  },
  {
    path: '/tech-stack',
    exact: true,
    component: TechStack,
  },
  {
    path: '/tech-stack/create',
    exact: true,
    component: TechStackCreate,
  },
  {
    path: '/tech-stack/:id',
    exact: true,
    component: TechStackDetails,
  },
  {
    path: '/customers',
    exact: true,
    component: Customer,
  },
  {
    path: '/customers/create',
    exact: true,
    component: CustomerCreate,
  },
  {
    path: '/customers/:id',
    exact: true,
    component: CustomerDetails,
  },
  {
    path: '/staffs',
    exact: true,
    component: Staffs,
  },
  {
    path: '/staffs/create',
    exact: true,
    component: StaffsCreate,
  },
  {
    path: '/staffs/:id',
    exact: true,
    component: StaffsDetails,
  },
  {
    path: '/departments',
    exact: true,
    component: Departments,
  },
  {
    path: '/departments/create',
    exact: true,
    component: DepartmentsCreate,
  },
  {
    path: '/departments/:id',
    exact: true,
    component: DepartmentsDetails,
  },
  {
    path: '/projects',
    exact: true,
    component: Projects,
  },
  {
    path: '/projects/create',
    exact: true,
    component: ProjectsCreate,
  },
  {
    path: '/projects/:id',
    exact: true,
    component: ProjectsDetails,
  },
];

import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../app/store';
import { FormCreateProjectType } from '../modules/project-type/components/form/create-project-type';
import { TableProjectType } from '../modules/project-type/components/data-table';
import { DetailsProjectType } from '../modules/project-type/components/project-type-detail';
import { FormDetailProjectType } from '../modules/project-type/components/form/detail-project-type';
import { FormEditProjectType } from '../modules/project-type/components/form/edit-project-type';
import { RowTableProjectType } from '../modules/project-type/components/data-row-table';

describe('Test Project Type module', () => {
  it('render row table with props project type', () => {
    const table = document.createElement('table');
    const { getByText } = render(
      <RowTableProjectType
        number={1}
        type='education'
        description='description'
        priority={5}
        status='active'
        link='/customers'
      />,
      { container: document.body.appendChild(table) },
    );
    expect(getByText(/description/)).toBeInTheDocument();
    expect(getByText(/Active/)).toBeInTheDocument();
    expect(getByText(/education/)).toBeInTheDocument();
  });
  it('render form details project type ', () => {
    const { getByText } = render(<FormDetailProjectType />);
    expect(getByText(/Project Type Information/)).toBeInTheDocument();
    expect(getByText(/Description/)).toBeInTheDocument();
    expect(getByText(/Inactive/)).toBeInTheDocument();
  });
  it('render form edit project type ', () => {
    const { getByText } = render(<FormEditProjectType />);
    expect(getByText(/Description/)).toBeInTheDocument();
    expect(getByText(/Name/)).toBeInTheDocument();
  });

  it('render project type ', () => {
    render(
      <Provider store={store}>
        <TableProjectType />
      </Provider>,
    );
  });
  it('render pagination project type ', () => {
    render(
      <Provider store={store}>
        <FormCreateProjectType />
      </Provider>,
    );
  });

  it('render details project type', () => {
    render(
      <Provider store={store}>
        <Router>
          <DetailsProjectType />
        </Router>
      </Provider>,
    );
  });
});

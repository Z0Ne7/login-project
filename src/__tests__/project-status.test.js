import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../app/store';
import { FormCreateProjectStatus } from '../modules/project-status/components/form/create-project-status';
import { FormDetailProjectStatus } from '../modules/project-status/components/form/detail-project-status';
import { FormEditProjectStatus } from '../modules/project-status/components/form/edit-project-status';
import { RowTableProjectStatus } from '../modules/project-status/components/row-table-project-status';

describe('Project status module', () => {
  it('render row table project status', () => {
    const table = document.createElement('table');
    const { getByText } = render(
      <Provider store={store}>
        <RowTableProjectStatus
          description='description'
          status='active'
          link='/project-status'
          type='project start'
        />
      </Provider>,
      { container: document.body.appendChild(table) },
    );
    expect(getByText(/description/)).toBeInTheDocument();
    expect(getByText(/Active/)).toBeInTheDocument();
    expect(getByText(/project start/)).toBeInTheDocument();
  });
  it('render form details customers', () => {
    const { getByText } = render(<FormDetailProjectStatus />);
    expect(getByText(/Project Status Information/)).toBeInTheDocument();
    expect(getByText(/Description/)).toBeInTheDocument();
  });

  it('render form edit project status', () => {
    const { getByText } = render(
      <FormEditProjectStatus
        valueName='project status'
        valueDes='description'
        valueStatus='active'
      />,
    );
    expect(getByText(/Description/)).toBeInTheDocument();
  });

  it('render form create project status', () => {
    render(
      <Provider store={store}>
        <FormCreateProjectStatus />
      </Provider>,
    );
  });
});

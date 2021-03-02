import { ButtonAdding } from '../../components/button-adding/button-adding';
import { TableTitle } from '../../components/table-title/table-title';
import { TableDepartments } from '../../modules/departments/components/data-table-departments';
export const Departments = () => {
  return (
    <>
      <div className='flex w-10/12 justify-center'>
        <TableTitle title='Departments:' />
      </div>
      <ButtonAdding route='/departments/create' />
      <div className='mt-2 flex justify-center'>
        <TableDepartments />
      </div>
    </>
  );
};

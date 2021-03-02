import { ButtonAdding } from '../../components/button-adding/button-adding';
import { TableTitle } from '../../components/table-title/table-title';
import { TableProjectStatus } from '../../modules/project-status/components/data-table-project-status';
export const ProjectStatus = () => {
  return (
    <>
      <div className='flex w-10/12 justify-center'>
        <TableTitle title='Project Status:' />
      </div>
      <ButtonAdding route='/project-status/create' />
      <div className='mt-2'>
        <TableProjectStatus />
      </div>
    </>
  );
};

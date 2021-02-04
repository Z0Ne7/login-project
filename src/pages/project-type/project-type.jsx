import { ButtonAdding } from '../../components/button-adding/button-adding';
import { TableTitle } from '../../components/table-title/table-title';
import { TableProjectType } from '../../modules/project-type/components/data-table';
export const ProjectType = () => {
  return (
    <>
      <div className='flex w-10/12 justify-center'>
        <TableTitle title='Project Type:' />
      </div>
      <ButtonAdding route='/project-type/create' />
      <div className='mt-2'>
        <TableProjectType />
      </div>
    </>
  );
};

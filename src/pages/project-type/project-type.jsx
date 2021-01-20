import { ButtonAdding } from '../../components/button-adding/button-adding';
import { TableTitle } from '../../components/table-title/table-title';
export const ProjectType = () => {
  return (
    <>
      <div className='flex w-11/12 justify-center'>
        <TableTitle title='Project Type:' />
      </div>
      <div>
        <ButtonAdding />
      </div>
    </>
  );
};

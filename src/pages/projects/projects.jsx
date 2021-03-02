import { ButtonAdding } from '../../components/button-adding/button-adding';
import { TableTitle } from '../../components/table-title/table-title';
import { TableProjects } from '../../modules/projects/components/data-table-projects';
export const Projects = () => {
  return (
    <>
      <div className='flex w-10/12 justify-center'>
        <TableTitle title='Projects:' />
      </div>
      <ButtonAdding route='/projects/create' />
      <div className='mt-2 flex justify-center'>
        <TableProjects />
      </div>
    </>
  );
};

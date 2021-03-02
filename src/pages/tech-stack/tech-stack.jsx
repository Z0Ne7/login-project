import { ButtonAdding } from '../../components/button-adding/button-adding';
import { TableTitle } from '../../components/table-title/table-title';
import { TableTechStack } from '../../modules/tech-stack/components/data-table-tech-stack';
export const TechStack = () => {
  return (
    <>
      <div className='flex w-10/12 justify-center'>
        <TableTitle title='Tech stack:' />
      </div>
      <ButtonAdding route='/tech-stack/create' />
      <div className='mt-2 flex justify-center'>
        <TableTechStack />
      </div>
    </>
  );
};

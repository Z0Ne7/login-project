import { ButtonAdding } from '../../components/button-adding/button-adding';
import { TableTitle } from '../../components/table-title/table-title';
import { TableStaffs } from '../../modules/staffs/components/data-table-staffs';
export const Staffs = () => {
  return (
    <>
      <div className='flex w-10/12 justify-center'>
        <TableTitle title='Staffs:' />
      </div>
      <ButtonAdding route='/staffs/create' />
      <div className='mt-2 flex justify-center'>
        <TableStaffs />
      </div>
    </>
  );
};

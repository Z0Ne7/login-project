import { ButtonAdding } from '../../components/button-adding/button-adding';
import { TableTitle } from '../../components/table-title/table-title';
import { TableCustomer } from '../../modules/customer/components/data-table-customer';
export const Customer = () => {
  return (
    <>
      <div className='flex w-10/12 justify-center'>
        <TableTitle title='Customers:' />
      </div>
      <ButtonAdding route='/customers/create' />
      <div className='mt-2 flex justify-center'>
        <TableCustomer />
      </div>
    </>
  );
};

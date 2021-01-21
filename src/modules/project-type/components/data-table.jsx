import { RowTableProjectType } from './data-row-table';

export const TableProjectType = () => {
  return (
    <table className='flex flex-col shadow justify-center bg-white w-11/12 rounded'>
      <thead>
        <tr className='flex w-full bg-indigo-700 justify-around text-white cursor-pointer rounded h-10 items-center'>
          <th className='w-1/12'>No</th>
          <th className='w-2/12'>Name</th>
          <th className='w-4/12'>Description</th>
          <th className='w-2/12'>Priority</th>
          <th className='w-2/12'>Status</th>
        </tr>
      </thead>
      <RowTableProjectType />
    </table>
  );
};

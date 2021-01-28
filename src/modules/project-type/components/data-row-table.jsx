export const RowTableProjectType = ({
  number,
  name,
  description,
  priority,
  status,
}) => {
  return (
    <tbody>
      <tr className='flex w-full justify-around pt-4 pb-4 cursor-pointer text-center hover:bg-indigo-50'>
        <td className='w-1/12'>{number}</td>
        <td className='w-2/12'>{name}</td>
        <td className='w-4/12'>{description}</td>
        <td className='w-2/12'>{priority}</td>
        <td className='w-2/12'>
          {status === 'active' ? (
            <span className='bg-green-100 border-2 border-green-600 rounded-lg text-green-700 font-bold p-2'>
              ACTIVE
            </span>
          ) : (
            <span className='bg-red-100 border-2 border-red-600 rounded-lg text-red-700 font-bold p-2'>
              INACTIVE
            </span>
          )}
        </td>
      </tr>
    </tbody>
  );
};

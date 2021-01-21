export const RowTableProjectType = ({
  number,
  name,
  description,
  priority,
  status,
}) => {
  return (
    <tbody>
      {/* <tr className='flex w-full justify-around pt-4 pb-4 cursor-pointer'>
        <td className='text-center w w-1/12'>{number}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{priority}</td>
        <td>{status}</td>
      </tr> */}
      <tr className='flex w-full justify-around pt-4 pb-4 cursor-pointer text-center'>
        <td className='w-1/12'>1</td>
        <td className='w-2/12'>Project 1</td>
        <td className='w-4/12'>This is description</td>
        <td className='w-2/12'>1</td>
        <td className='w-2/12'>ACTIVE</td>
      </tr>
      <tr className='flex w-full justify-around pt-4 pb-4 cursor-pointer text-center'>
        <td className='w-1/12'>1</td>
        <td className='w-2/12'>Project 1</td>
        <td className='w-4/12'>This is description</td>
        <td className='w-2/12'>1</td>
        <td className='w-2/12'>ACTIVE</td>
      </tr>
      <tr className='flex w-full justify-around pt-4 pb-4 cursor-pointer text-center'>
        <td className='w-1/12'>1</td>
        <td className='w-2/12'>Project 1</td>
        <td className='w-4/12'>This is description</td>
        <td className='w-2/12'>1</td>
        <td className='w-2/12'>ACTIVE</td>
      </tr>
    </tbody>
  );
};

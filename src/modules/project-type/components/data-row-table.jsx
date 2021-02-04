import { useHistory } from 'react-router-dom';

export const RowTableProjectType = props => {
  const history = useHistory();
  const { rowData } = props;
  const handleViewDetail = () => {
    history.push(props.link);
  };
  return (
    <tbody>
      <tr
        className='flex w-full justify-around pt-4 pb-4 cursor-pointer text-left hover:bg-indigo-50'
        onClick={handleViewDetail}
      >
        <td className='w-1/12 text-center'>{props.number}</td>
        <td className='w-2/12'>{rowData.name}</td>
        <td className='w-4/12'>{rowData.description}</td>
        <td className='w-2/12 text-center'>{rowData.priority}</td>
        <td className='w-2/12 text-center'>
          {rowData.status === 'active' ? (
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

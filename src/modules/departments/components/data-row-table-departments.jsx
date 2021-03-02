import { useHistory } from 'react-router-dom';

export const RowTableDepartments = props => {
  const history = useHistory();
  const { rowData } = props;
  const handleViewDetail = () => {
    history.push(props.link);
  };
  return (
    <tbody>
      <tr
        className='flex w-full justify-around pt-4 pb-4 cursor-pointer text-left hover:bg-indigo-50 border-b-2 border-gray-200'
        onClick={handleViewDetail}
      >
        <td className='w-2/12 text-center'>{props.number}</td>
        <td className='w-4/12'>{rowData.name}</td>
        <td className='w-5/12'>{rowData.description}</td>
      </tr>
    </tbody>
  );
};

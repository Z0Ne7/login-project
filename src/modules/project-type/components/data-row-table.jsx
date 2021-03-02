import { useHistory } from 'react-router-dom';
import { LabelActive } from '../../../components/label-active/label-active';
import { LabelInactive } from '../../../components/label-inactive/label-inactive';

export const RowTableProjectType = props => {
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
        <td className='w-1/12 text-center'>{props.number}</td>
        <td className='w-2/12'>{rowData.name}</td>
        <td className='w-4/12'>{rowData.description}</td>
        <td className='w-2/12 text-center'>{rowData.priority}</td>
        <td className='w-2/12 text-center'>
          {rowData.status === 'active' ? <LabelActive /> : <LabelInactive />}
        </td>
      </tr>
    </tbody>
  );
};

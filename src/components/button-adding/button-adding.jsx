import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const ButtonAdding = ({ route }) => {
  const history = useHistory();
  const redirect = (route) => {
    history.push(route);
  };
  return (
    <button
      className='border border-solid shadow rounded w-20 h-8 text-white bg-green-600 mt-3'
      onClick={() => redirect(route)}
    >
      <p>
        Add
        <FontAwesomeIcon className='ml-2' icon={faPlus} />
      </p>
    </button>
  );
};

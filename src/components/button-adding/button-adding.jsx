import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const ButtonAdding = ({ route }) => {
  const history = useHistory();
  const redirect = (route) => {
    history.push(route);
  };
  return (
    <button onClick={() => redirect(route)}>
      <p>Add</p>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

export const ButtonLogout = ({ route }) => {
  const history = useHistory();
  const onLogout = () => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      history.push('/login');
    }
  };
  return (
    <button
      onClick={onLogout}
      className='rounded text-red-400 border-red-500 border h-8 w-20 hover:bg-red-500 hover:text-white'
    >
      <p>
        Logout
        <FontAwesomeIcon icon={faPowerOff} className='ml-1' />
      </p>
    </button>
  );
};

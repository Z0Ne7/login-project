import {
  faCaretDown,
  faPowerOff,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const NavbarHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const history = useHistory();
  const onLogout = () => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      history.push('/login');
    }
  };
  return (
    <nav className='flex justify-between h-20 w-11/12'>
      <p className='flex items-center ml-3'></p>
      <div className='flex w-40 items-center justify-around relative'>
        <div className='relative'>
          <div className='text-indigo-700 text-3xl'>
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
        </div>
        <div>
          <p className='font-semibold'>Admin</p>
        </div>
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
        {toggleMenu ? (
          <div className='flex absolute right-0 -top-16 rounded'>
            <div className='my-32'>
              <div className='flex justify-center h-9 absolute right-0 w-28 rounded shadow-md z-20 hover:bg-indigo-50 hover:opacity-80'>
                <button
                  onClick={onLogout}
                  className='text-red-600 font-semibold opacity-80'
                >
                  <FontAwesomeIcon icon={faPowerOff} className='mr-1' />
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

import { faCaretDown, faPowerOff } from '@fortawesome/free-solid-svg-icons';
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
      <div
        className='flex w-40 items-center justify-around relative'
      >
        <div className='relative'>
          <div>
            <img
              className='w-11'
              src='https://icons.iconarchive.com/icons/designcontest/ecommerce-business/96/admin-icon.png'
              alt='avatar'
            />
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
              <div className='absolute right-0 w-32 rounded shadow-md z-20'>
                <p
                  onClick={onLogout}
                  className='flex items-center justify-center m-2 cursor-pointer'
                >
                  Logout <FontAwesomeIcon icon={faPowerOff} className='ml-1' />
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

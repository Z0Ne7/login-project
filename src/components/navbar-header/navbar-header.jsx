import { useState } from 'react';
import { ButtonLogout } from '../button-logout/button-logout';

export const NavbarHeader = () => {
  return (
    <nav className='flex justify-between h-20 w-full'>
      <p className='text-5xl font-semibold text-indigo-700'>Welcome</p>
      <ButtonLogout />
    </nav>
  );
};

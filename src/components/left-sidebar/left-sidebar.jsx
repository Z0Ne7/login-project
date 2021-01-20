import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export const LeftSidebar = () => {
  return (
    <div className='w-2/12 sm:w-full mt-4 lg:w-2/12 relative'>
      <div className='flex justify-center'>
        <div className='flex justify-center items-center w-10/12 sm:w-full sm:mr-4 sm:flex-row-reverse'>
          <p className='text-4xl text-indigo-700'>Project</p>
        </div>
      </div>
      <div
        className='flex flex-col items-center mt-10
      sm:z-20
      sm:w-4/6
       sm:fixed transform
       transition duration-500 ease-in-out sm:-translate-x-full
       sm:left-0 sm:m-0 sm:top-0 sm:h-full sm:bg-white'
      >
        <div className='w-10/12 sm:mt-16'>
          <ul>
            <div className='text-gray-400 text-sm flex items-center'>
              <p>CATEGORY</p>
              <p className='ml-2 text-2xl'></p>
            </div>
            <div>
              <NavLink
                to='/project-type'
                activeClassName='hover:bg-indigo-700 hover:text-pink-100 bg-indigo-700 text-white rounded-xl'
                className='flex mt-6 items-center rounded-lg hover:text-gray-900 hover:bg-gray-200  p-2 cursor-pointer '
              >
                <p className='text-base  ml-3'>Project Type</p>
              </NavLink>
              <NavLink
                to='/project-status'
                activeClassName='hover:bg-indigo-700 hover:text-pink-100 bg-indigo-700 text-white rounded-xl'
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <p className=' text-base ml-3'>Project Status</p>
              </NavLink>
              <NavLink
                to='/tech-stack'
                activeClassName='hover:bg-indigo-700 hover:text-pink-100 bg-indigo-700 text-white rounded-xl'
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <p className='  text-base ml-3'> Tech Stack</p>
              </NavLink>
              <NavLink
                to='/customers'
                activeClassName=' bg-indigo-700 hover:bg-indigo-700 hover:text-pink-100 text-white rounded-xl'
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <p className='  text-base ml-3'>Customers</p>
              </NavLink>
            </div>
          </ul>
          <button></button>
        </div>
        <div className='w-10/12 mt-5'>
          <ul>
            <div className='text-gray-400 text-sm flex items-center'>
              <p>MANAGER</p>
              <p className='ml-2 text-2xl'></p>
            </div>
            <div>
              <NavLink
                to='/departments'
                activeClassName='hover:bg-indigo-700 hover:text-pink-100 bg-indigo-700 text-white rounded-xl'
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <p className='  text-base ml-3'>Departments</p>
              </NavLink>
              <NavLink
                to='/staffs'
                activeClassName='bg-indigo-700 text-white rounded-xl'
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <p className='  text-base ml-3'>Staffs</p>
              </NavLink>
              <NavLink
                to='/projects'
                activeClassName='hover:bg-indigo-700 hover:text-pink-100 bg-indigo-700 text-white rounded-xl'
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <p className='  text-base ml-3'>Projects</p>
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

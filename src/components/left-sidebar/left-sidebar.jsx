import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faChartBar,
  faDatabase,
  faUserAlt,
  faBuilding,
  faUserTag,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
export const LeftSidebar = () => {
  const activeClass =
    'font-semibold hover:bg-indigo-700 hover:text-pink-100 bg-indigo-700 text-white rounded';
  return (
    <div className='w-2/12 mt-4 relative'>
      <div className='flex justify-center'>
        <div className='flex justify-center items-center w-10/12'>
          <a className='text-4xl text-indigo-700 font-bold' href='/'>
            VMO Project
          </a>
        </div>
      </div>
      <div className='flex flex-col items-center mt-10'>
        <div className='w-10/12'>
          <ul>
            <div className='text-gray-400 text-sm flex items-center'>
              <p>CATEGORY</p>
              <p className='ml-2 text-2xl'></p>
            </div>
            <div>
              <NavLink
                to='/project-type'
                activeClassName={activeClass}
                className='flex mt-6 items-center rounded-lg hover:text-gray-900 hover:bg-gray-200 p-2 cursor-pointer '
              >
                <FontAwesomeIcon icon={faChartPie} />
                <p className='text-base  ml-3'>Project Type</p>
              </NavLink>
              <NavLink
                to='/project-status'
                activeClassName={activeClass}
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <FontAwesomeIcon icon={faChartBar} />
                <p className=' text-base ml-3'>Project Status</p>
              </NavLink>
              <NavLink
                to='/tech-stack'
                activeClassName={activeClass}
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <FontAwesomeIcon icon={faDatabase} />
                <p className='  text-base ml-3'> Tech Stack</p>
              </NavLink>
              <NavLink
                to='/customers'
                activeClassName={activeClass}
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <FontAwesomeIcon icon={faUserAlt} />
                <p className='  text-base ml-3'>Customers</p>
              </NavLink>
            </div>
          </ul>
        </div>
        <div className='w-10/12 mt-5'>
          <ul>
            <div className='text-gray-400 text-sm flex items-center'>
              <p>MANAGE</p>
              <p className='ml-2 text-2xl'></p>
            </div>
            <div onClick={null}>
              <NavLink
                to='/departments'
                activeClassName={activeClass}
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <FontAwesomeIcon icon={faBuilding} />
                <p className='text-base ml-3'>Departments</p>
              </NavLink>
              <NavLink
                to='/staffs'
                activeClassName={activeClass}
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <FontAwesomeIcon icon={faUserTag} />
                <p className='text-base ml-3'>Staffs</p>
              </NavLink>
              <NavLink
                to='/projects'
                activeClassName={activeClass}
                className='flex items-center mt-3 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200'
              >
                <FontAwesomeIcon icon={faFile} />
                <p className='text-base ml-3'>Projects</p>
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

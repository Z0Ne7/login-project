import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { ButtonAdding } from '../../components/button-adding/button-adding';
import { TableTitle } from '../../components/table-title/table-title';
import { TableProjectType } from '../../modules/project-type/components/data-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
export const ProjectType = () => {
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const onHandleAddProjectType = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push('/project-type/create');
    }, 1000);
  };
  return isLoading ? (
    <div className='flex items-center justify-center w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50'>
      <span className='text-indigo-800 text-7xl'>
        <FontAwesomeIcon className='ml-2' icon={faSpinner} spin />
      </span>
    </div>
  ) : (
    <>
      <div className='flex w-11/12 justify-center'>
        <TableTitle title='Project Type:' />
      </div>
      <Link to='/project-type/create' component={ButtonAdding} />
        {/* <ButtonAdding /> */}
      <div className='mt-2'>
        <TableProjectType />
      </div>
    </>
  );
};

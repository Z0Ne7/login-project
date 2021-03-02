import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/departments.actions';
import { getDataTechStacks } from '../../../tech-stack/actions/tech-stack.actions';
import { getDataStaffs } from '../../../staffs/actions/staffs.actions';
import { getDataProjects } from '../../../projects/actions/projects.actions';
import { apiGet } from '../../../../services/departments.services';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, useParams } from 'react-router-dom';

export const FormDetailDepartments = ({ setUpdate }) => {
  const history = useHistory();
  const params = useParams();
  const localTechStack = 'techStack';
  const localStaff = 'staffs';
  const localProject = 'projects';
  const localDepartment = 'departments';
  const { techStack, staffs, projects, departments } = useSelector(state => state);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [dataDepartment, setDataDepartment] = useState([]);
  const onHandleDelete = () => {
    const result = window.confirm('Do you want to delete department ' + dataDepartment.name + ' ?');
    if (result) {
      dispatch(action.deleteDepartments(dataDepartment.id));
      history.push('/departments');
    }
  };
  useEffect(() => {
    const localDataTechStack = JSON.parse(apiGet(localTechStack));
    const localDataStaff = JSON.parse(apiGet(localStaff));
    const localDataProject = JSON.parse(apiGet(localProject));
    const localDataDepartment = JSON.parse(apiGet(localDepartment));
    if (localDataTechStack) {
      dispatch(getDataTechStacks(localDataTechStack));
    }
    if (localDataStaff) {
      dispatch(getDataStaffs(localDataStaff));
    }
    if (localDataProject) {
      dispatch(getDataProjects(localDataProject));
    }
    if (localDataDepartment) {
      dispatch(action.getDataDepartments(localDataDepartment));
    }
    const result = departments.data.find(data => data.id === params.id);
    setDataDepartment(result);
    setLoading(false);
  }, []);
  return loading ? (
    <div className='flex justify-center'>
      <FontAwesomeIcon className='text-indigo-600 text-6xl mt-24' icon={faSpinner} spin />
    </div>
  ) : (
    <div className='rounded-lg shadow-lg bg-white mt-10 ml-5'>
      <div className='flex justify-between border-b border-gray-100 px-5 py-4'>
        <div className='flex items-center'>
          <span className='font-bold text-gray-700 text-xl'>Department Details</span>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Name:</p>
          <p className='break-words'>{dataDepartment?.name}</p>
        </div>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Description:</p>
          <p>{dataDepartment?.description}</p>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Tech stack:</p>
          {loading
            ? null
            : dataDepartment?.techStackId.map((item, i) => {
                const foundIndex = techStack.data.findIndex(data => data.id === item);
                return (
                  <p className='break-words' key={i}>
                    {techStack.data[foundIndex].name}
                  </p>
                );
              })}
        </div>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Staffs:</p>
          {loading
            ? null
            : dataDepartment?.staffId.map((item, i) => {
                const foundIndex = staffs.data.findIndex(data => data.id === item);
                return (
                  <p className='break-words' key={i}>
                    {staffs.data[foundIndex].name}
                  </p>
                );
              })}
        </div>
      </div>
      <div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Projects:</p>
          {loading
            ? null
            : dataDepartment?.projectId.map((item, i) => {
                const foundIndex = projects.data.findIndex(data => data.id === item);
                return (
                  <p className='break-words' key={i}>
                    {projects.data[foundIndex].name}
                  </p>
                );
              })}
        </div>
      </div>
      <div className='px-5 py-4 flex justify-end'>
        <button
          onClick={() => setUpdate(true)}
          className='bg-indigo-500 text-white p-2 rounded-md font-semibold mr-1 hover:bg-indigo-600'
        >
          <p>Update</p>
        </button>
        <button
          onClick={onHandleDelete}
          className='text-red-600 p-2 rounded-md border border-red-600 font-semibold bg-red-50 hover:bg-red-500 hover:text-white'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

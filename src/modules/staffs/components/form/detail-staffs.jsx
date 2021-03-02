import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/staffs.actions';
import { getDataTechStacks } from '../../../tech-stack/actions/tech-stack.actions';
import { apiGet } from '../../../../services/staffs.services';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, useParams } from 'react-router-dom';

export const FormDetailStaffs = ({ setUpdate }) => {
  const history = useHistory();
  const localTechStack = 'techStack';
  const localStaff = 'staffs';
  const params = useParams();
  const { techStack, staffs } = useSelector(state => state);
  const [loading, setLoading] = useState(true);
  const [dataStaff, setDataStaff] = useState([]);
  const dispatch = useDispatch();
  const onHandleDelete = () => {
    const result = window.confirm('Do you want to delete staff ' + dataStaff.name + ' ?');
    if (result) {
      dispatch(action.deleteStaffs(dataStaff.id));
      history.push('/staffs');
    }
  };
  useEffect(() => {
    const localDataTechStack = JSON.parse(apiGet(localTechStack));
    const localDataStaff = JSON.parse(apiGet(localStaff));
    if (localDataTechStack) {
      dispatch(getDataTechStacks(localDataTechStack));
    }
    if (localDataStaff) {
      dispatch(action.getDataStaffs(localDataStaff));
    }
    const result = staffs.data.find(data => data.id === params.id);
    setDataStaff(result);
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
          <span className='font-bold text-gray-700 text-xl'>Staff Details</span>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Name:</p>
          <p className='break-words'>{dataStaff?.name}</p>
        </div>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Email:</p>
          <p>{dataStaff?.email}</p>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Phone number:</p>
          <p className='break-words'>{dataStaff?.phone}</p>
        </div>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Address:</p>
          <p>{dataStaff?.address}</p>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='px-10 py-5'>
          <p className='font-bold'>Tech stack:</p>
          {loading
            ? null
            : dataStaff?.techStackId.map((item, i) => {
                const foundIndex = techStack.data.findIndex(data => data.id === item);
                return (
                  <p className='break-words' key={i}>
                    {techStack.data[foundIndex].name}
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

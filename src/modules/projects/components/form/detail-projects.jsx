import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/projects.actions';
import { getDataTechStacks } from '../../../tech-stack/actions/tech-stack.actions';
import { apiGet } from '../../../../services/tech-stack.services';

export const FormDetailProjects = ({ data, setUpdate }) => {
  const history = useHistory();
  const localTechStack = 'techStack';
  const { techStack } = useSelector(state => state);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  if (!data) {
    history.push('/projects');
  }
  const onHandleDelete = () => {
    const result = window.confirm('Do you want to delete project ' + data.name + ' ?');
    if (result) {
      dispatch(action.deleteProjects(data.id));
      history.push('/projects');
    }
  };
  useEffect(() => {
    const localData = JSON.parse(apiGet(localTechStack));
    if (localData) {
      dispatch(getDataTechStacks(localData));
    }
    setLoading(false);
  }, []);
  return (
    <div className='rounded-lg shadow-lg bg-white mt-10 ml-5'>
      <div className='flex justify-between border-b border-gray-100 px-5 py-4'>
        <div className='flex items-center'>
          <span className='font-bold text-gray-700 text-xl'>Project Details</span>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Name:</p>
          <p className='break-words'>{data?.name}</p>
        </div>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Email:</p>
          <p>{data?.email}</p>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Phone number:</p>
          <p className='break-words'>{data?.phone}</p>
        </div>
        <div className='px-10 py-5 w-1/2'>
          <p className='font-bold'>Address:</p>
          <p>{data?.address}</p>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='px-10 py-5'>
          <p className='font-bold'>Tech stack:</p>
          {loading
            ? null
            : data?.techStackId.map((item, i) => {
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

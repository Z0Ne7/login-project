import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { LabelActive } from '../../../../components/label-active/label-active';
import { LabelInactive } from '../../../../components/label-inactive/label-inactive';
import { apiDelete, apiGet } from '../../../../services/project-type.services';
import * as action from '../../actions/project-type.actions';

export const FormDetailProjectType = ({ setUpdate }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [dataProjectType, setDataProjectType] = useState([]);
  const localProjectType = 'projectType';
  useEffect(() => {
    const localData = apiGet(localProjectType);
    const result = localData.data.find(data => data.id === params.id);
    setDataProjectType(result);
    setLoading(false);
  }, []);
  const onHandleDelete = () => {
    const result = window.confirm(
      'Do you want to delete project type ' + dataProjectType.name + ' ?',
    );
    if (result) {
      apiDelete(localProjectType, dataProjectType.id);
      dispatch(action.deleteProjectType(dataProjectType.id));
      history.push('/project-type');
    }
  };
  return loading ? (
    <div className='flex justify-center'>
      <FontAwesomeIcon className='text-indigo-600 text-6xl mt-24' icon={faSpinner} spin />
    </div>
  ) : (
    <div className='rounded-lg shadow-lg bg-white mt-10 ml-5'>
      <div className='flex justify-between border-b border-gray-100 px-5 py-4'>
        <div className='flex items-center'>
          <span className='font-bold text-gray-700 text-xl'>Project Type Details</span>
        </div>
      </div>
      <div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Name:</p>
          <p className='break-words'>{dataProjectType?.name}</p>
        </div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Description:</p>
          <p>{dataProjectType?.description}</p>
        </div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Priority:</p>
          <span className='text-xl ml-2'>{dataProjectType?.priority}</span>
        </div>
        <div className='px-10 flex flex-row items-center'>
          <p className='font-bold'>Status:</p>
          {dataProjectType?.status === 'active' ? <LabelActive /> : <LabelInactive />}
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
    </div>
  );
};

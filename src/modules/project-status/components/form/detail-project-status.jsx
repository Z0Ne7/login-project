import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { apiGet } from '../../../../services/project-status.services';
import * as action from '../../actions/project-status.actions';
import { LabelActive } from '../../../../components/label-active/label-active';
import { LabelInactive } from '../../../../components/label-inactive/label-inactive';

export const FormDetailProjectStatus = ({ setUpdate }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [dataProjectStatus, setDataProjectStatus] = useState([]);
  const { projectStatus } = useSelector(state => state);
  const localProjectStatus = 'projectStatus';
  useEffect(() => {
    const localData = JSON.parse(apiGet(localProjectStatus));
    if (localData) {
      dispatch(action.getDataProjectStatuses(localData));
    }
    const result = projectStatus.data.find(data => data.id === params.id);
    setDataProjectStatus(result);
    setLoading(false);
  }, []);
  const onHandleDelete = () => {
    const result = window.confirm(
      'Do you want to delete project status ' + dataProjectStatus.name + ' ?',
    );
    if (result) {
      dispatch(action.deleteProjectStatus(dataProjectStatus.id));
      history.push('/project-status');
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
          <span className='font-bold text-gray-700 text-xl'>Project Status Details</span>
        </div>
      </div>
      <div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Name:</p>
          <p className='break-words'>{dataProjectStatus?.name}</p>
        </div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Description:</p>
          <p>{dataProjectStatus?.description}</p>
        </div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Priority:</p>
          <span className='text-xl ml-2'>{dataProjectStatus?.priority}</span>
        </div>
        <div className='px-10 flex flex-row items-center'>
          <p className='font-bold'>Status:</p>
          {dataProjectStatus?.status === 'active' ? <LabelActive /> : <LabelInactive />}
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

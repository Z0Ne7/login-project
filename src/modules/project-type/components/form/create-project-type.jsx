import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TableTitle } from '../../../../components/table-title/table-title';
import { generateID } from '../../../../utils/generate-id';
import * as action from '../../actions/project-type.actions';
import { apiGet, apiPost } from '../../../../services/project-type.services';

export const FormCreateProjectType = () => {
  const { register, handleSubmit } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const delay = 1000;
  const localItem = 'projectType';
  const dispatch = useDispatch();
  const { projectType } = useSelector(state => state);
  const history = useHistory();
  const onSubmit = dataInputProjectType => {
    const { id } = dataInputProjectType;
    apiPost(localItem, dataInputProjectType); //Set data to localStorage
    //Check if state exist
    if (projectType.data.length < 1) {
      const localData = apiGet(localItem);
      if (localData) {
        dispatch(action.getDataProjectTypes(localData)); //Get all local data to state
        dispatch(action.addProjectType(dataInputProjectType)); //Add new data to state
      }
    } else {
      dispatch(action.addProjectType(dataInputProjectType)); //Add new data to state
    }
    setIsDisabled(true);
    setTimeout(() => {
      history.push('/project-type/' + id);
    }, delay);
  };
  return (
    <div className='w-1/2'>
      <div className='mt-10'>
        <div className='flex justify-center'>
          <TableTitle title='Add Project Type:' />
        </div>
        <div className='leading-loose'>
          <ToastContainer autoClose={delay} />
          <form className='m-4 p-10 bg-white rounded shadow-xl' onSubmit={handleSubmit(onSubmit)}>
            <Link to='/project-type'>
              <FontAwesomeIcon
                icon={faTimes}
                className='text-red-600 float-right text-xl -mt-7 -mr-6'
              />
            </Link>
            <div>
              <label className='block text-sm text-gray-00 mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='w-full px-5 outline-none py-1 text-gray-700 focus:shadow-md border-gray-400 border rounded focus:border-indigo-600'
                ref={register}
                id='name'
                name='name'
                type='text'
                required
                placeholder='Name'
                disabled={isDisabled}
              />
              <input type='hidden' ref={register} name='id' value={generateID()} />
            </div>
            <div className='mt-4'>
              <label className='block text-sm text-gray-600 mb-2' htmlFor='description'>
                Description
              </label>
              <textarea
                className='w-full outline-none px-5 py-4 text-gray-700 focus:shadow-lg border-gray-400 border rounded focus:border-indigo-600'
                ref={register}
                id='description'
                name='description'
                type='text'
                required
                placeholder='Description'
                disabled={isDisabled}
              />
            </div>
            <div className='inline-block mt-2 w-1/2 pr-1'>
              <label className='text-sm text-gray-600 mb-2' htmlFor='priority'>
                Priority
              </label>
              <div className='relative '>
                <select
                  className='w-full appearance-none outline-none p-2 text-gray-700 bg-gray-200 rounded'
                  ref={register}
                  id='priority'
                  name='priority'
                  required
                  disabled={isDisabled}
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>
            </div>
            <div className='inline-block mt-2 w-1/2 pr-1'>
              <label className='text-sm text-gray-600 mb-2' htmlFor='status'>
                Status
              </label>
              <div className='relative '>
                <select
                  className='w-full appearance-none outline-none p-2 text-gray-700 bg-gray-200 rounded'
                  ref={register}
                  id='status'
                  name='status'
                  required
                  disabled={isDisabled}
                >
                  <option className='mt-10' value='active'>
                    Active
                  </option>
                  <option value='inactive'>Inactive</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-6'>
              {isDisabled ? (
                <button
                  type='button'
                  className='font-bold rounded bg-indigo-600 opacity-70 text-white shadow-md py-2 px-6 flex items-center'
                >
                  <div className='flex h-5 items-center'>Add</div>
                </button>
              ) : (
                <button className='font-bold rounded bg-indigo-600 text-white hover:opacity-90 shadow-md py-2 px-6 flex items-center'>
                  <div className='flex h-5 items-center'>Add</div>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

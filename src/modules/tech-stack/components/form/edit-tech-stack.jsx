import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TableTitle } from '../../../../components/table-title/table-title';
import * as action from '../../actions/tech-stack.actions';

export const FormEditTechStack = ({ data, setUpdate }) => {
  const { register, handleSubmit } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const delay = 1000;
  const onSubmit = dataInputTechStack => {
    dispatch(action.updateTechStack(dataInputTechStack));
    setIsDisabled(true);
    setTimeout(() => {
      setUpdate(false);
    }, delay);
  };
  const onHandleCancelUpdate = () => {
    setUpdate(false);
  };
  return (
    <div className='flex justify-center'>
      <div className='w-1/2'>
        <div className='mt-10'>
          <div className='flex justify-center'>
            <TableTitle title='Update Tech Stack:' />
          </div>
          <div className='leading-loose'>
            <ToastContainer autoClose={delay} />
            <form className='m-4 p-10 bg-white rounded shadow-xl' onSubmit={handleSubmit(onSubmit)}>
              <Link to='/tech-stack'>
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
                  defaultValue={data.name}
                  disabled={isDisabled}
                />
                <input type='hidden' ref={register} name='id' value={data.id} />
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
                  defaultValue={data.description}
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
                    defaultValue={data.priority}
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
                    defaultValue={data.status}
                    disabled={isDisabled}
                  >
                    <option className='mt-10' value='active'>
                      Active
                    </option>
                    <option value='inactive'>Inactive</option>
                  </select>
                </div>
              </div>
              {isDisabled ? (
                <div className='flex flex-row items-center justify-center mt-6'>
                  <button
                    type='button'
                    className='font-bold rounded bg-indigo-500 opacity-70 text-white hover:opacity-90 shadow-md py-2 px-6 flex items-center'
                  >
                    <div className='flex h-5 items-center'>Update</div>
                  </button>
                  <button
                    className='font-bold rounded border border-gray-200 text-gray-500 ml-2 shadow-md py-2 px-6 flex items-center'
                    type='button'
                  >
                    <div className='flex h-5 items-center'>Cancel</div>
                  </button>
                </div>
              ) : (
                <div className='flex flex-row items-center justify-center mt-6'>
                  <button className='font-bold rounded bg-indigo-600 text-white hover:opacity-90 shadow-md py-2 px-6 flex items-center'>
                    <div className='flex h-5 items-center'>Update</div>
                  </button>
                  <button
                    className='font-bold rounded border border-gray-200 text-red-500 ml-2 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 flex items-center'
                    type='button'
                    onClick={onHandleCancelUpdate}
                  >
                    <div className='flex h-5 items-center'>Cancel</div>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

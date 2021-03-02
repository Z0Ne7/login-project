import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import MultiSelect from 'react-multi-select-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TableTitle } from '../../../../components/table-title/table-title';
import { apiGet } from '../../../../services/tech-stack.services';
import { getDataTechStacks } from '../../../tech-stack/actions/tech-stack.actions';
import * as action from '../../actions/staffs.actions';

export const FormEditStaffs = ({ data, setUpdate, dataTechStack }) => {
  const [selectedTechStacks, setSelectedTechStacks] = useState(dataTechStack);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  const localTechStack = 'techStack';
  const dispatch = useDispatch();
  const { techStack } = useSelector(state => state);
  const [isDisabled, setIsDisabled] = useState(false);
  const delay = 1000;
  const onSubmit = dataFormStaffs => {
    const dataRequest = {
      id: dataFormStaffs.id,
      name: dataFormStaffs.name.trim(),
      email: dataFormStaffs.email.trim(),
      phone: dataFormStaffs.phone.trim(),
      address: dataFormStaffs.address.trim(),
      techStackId: selectedTechStacks.map(item => item.value),
    };
    dispatch(action.updateStaffs(dataRequest));
    setIsDisabled(true);
    setTimeout(() => {
      setUpdate(false);
    }, delay);
  };
  const onHandleCancelUpdate = () => {
    setUpdate(false);
  };
  const listTechStack = (arr = []) => {
    return arr.map(item => {
      if (item.status === 'inactive') {
        return { label: item.name, value: item.id, disabled: true };
      }
      return { label: item.name, value: item.id };
    });
  };
  useEffect(() => {
    const localData = JSON.parse(apiGet(localTechStack));
    if (localData) {
      dispatch(getDataTechStacks(localData));
    }
    setLoading(false);
  }, []);
  return (
    <div className='w-2/3 ml-28'>
      <div className='mt-10'>
        <div className='flex justify-center'>
          <TableTitle title='Update Staff:' />
        </div>
        <div className='leading-loose'>
          <ToastContainer autoClose={delay} />
          <form className='m-4 p-10 bg-white rounded shadow-xl' onSubmit={handleSubmit(onSubmit)}>
            <Link to='/staffs'>
              <FontAwesomeIcon
                icon={faTimes}
                className='text-red-600 float-right text-xl -mt-7 -mr-6'
              />
            </Link>
            <div className='flex flex-row'>
              <div className='w-1/2'>
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
              <div className='w-1/2 ml-3'>
                <label className='block text-sm text-gray-00 mb-2' htmlFor='email'>
                  Email
                </label>
                <input
                  className='w-full px-5 outline-none py-1 text-gray-700 focus:shadow-md border-gray-400 border rounded focus:border-indigo-600'
                  ref={register}
                  id='email'
                  name='email'
                  type='email'
                  required
                  placeholder='Email'
                  defaultValue={data.email}
                  disabled={isDisabled}
                />
              </div>
            </div>
            <div className='flex flex-row mt-3'>
              <div className='w-1/2'>
                <label className='block text-sm text-gray-00 mb-2' htmlFor='name'>
                  Phone number
                </label>
                <input
                  className='w-full px-5 outline-none py-1 text-gray-700 focus:shadow-md border-gray-400 border rounded focus:border-indigo-600'
                  ref={register}
                  id='phone'
                  name='phone'
                  type='text'
                  placeholder='Phone number'
                  defaultValue={data.phone}
                  disabled={isDisabled}
                />
              </div>
              <div className='w-1/2 ml-3'>
                <label className='block text-sm text-gray-00 mb-2' htmlFor='email'>
                  Address
                </label>
                <input
                  className='w-full px-5 outline-none py-1 text-gray-700 focus:shadow-md border-gray-400 border rounded focus:border-indigo-600'
                  ref={register}
                  id='address'
                  name='address'
                  type='text'
                  placeholder='Address'
                  defaultValue={data.address}
                  disabled={isDisabled}
                />
              </div>
            </div>
            <div className='mt-3'>
              <div className=''>
                <label className='block text-sm text-gray-00 mb-2' htmlFor='techStack'>
                  Tech stack
                </label>
                <MultiSelect
                  options={listTechStack(techStack.data)}
                  isLoading={loading}
                  value={selectedTechStacks}
                  onChange={setSelectedTechStacks}
                  disableSearch={true}
                />
              </div>
              {/* <div className='mt-3'>
                <label className='block text-sm text-gray-00 mb-2' htmlFor='email'>
                  Level tech stack
                </label>
                <input
                  className='w-full px-5 outline-none py-1 text-gray-700 focus:shadow-md border-gray-400 border rounded focus:border-indigo-600'
                  ref={register}
                  id='level'
                  name='level'
                  type='text'
                  required
                  placeholder='Level tech stack'
                />
              </div> */}
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
  );
};

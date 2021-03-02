import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import MultiSelect from 'react-multi-select-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { TableTitle } from '../../../../components/table-title/table-title';
import { generateID } from '../../../../utils/generate-id';
import * as action from '../../actions/projects.actions';
import { getDataTechStacks } from '../../../tech-stack/actions/tech-stack.actions';
import { apiGet } from '../../../../services/tech-stack.services';

export const FormCreateProjects = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const localTechStack = 'techStack';
  const history = useHistory();
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);
  const { techStack } = useSelector(state => state);
  const onSubmit = dataFormProjects => {
    const dataRequest = {
      id: dataFormProjects.id,
      name: dataFormProjects.name.trim(),
      email: dataFormProjects.email.trim(),
      phone: dataFormProjects.phone.trim(),
      address: dataFormProjects.address.trim(),
      techStackId: selectedTechStacks.map(item => item.value),
    };
    dispatch(action.addProjects(dataRequest));
    history.push('/projects/' + dataRequest.id);
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
    <div className='w-1/2'>
      <div className='mt-10'>
        <div className='flex justify-center'>
          <TableTitle title='Add Project:' />
        </div>
        <div className='leading-loose'>
          <form className='m-4 p-10 bg-white rounded shadow-xl' onSubmit={handleSubmit(onSubmit)}>
            <Link to='/projects'>
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
                />
                <input type='hidden' ref={register} name='id' value={generateID()} />
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
            <div className='flex flex-col items-center justify-center mt-6'>
              <button className='font-bold rounded bg-indigo-600 text-white hover:opacity-90 shadow-md py-2 px-6 flex items-center'>
                <div className='flex h-5 items-center'>Add</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

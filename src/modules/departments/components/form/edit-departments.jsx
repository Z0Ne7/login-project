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
import { getDataProjects } from '../../../projects/actions/projects.actions';
import { getDataStaffs } from '../../../staffs/actions/staffs.actions';
import { getDataTechStacks } from '../../../tech-stack/actions/tech-stack.actions';
import * as action from '../../actions/departments.actions';

export const FormEditDepartments = ({ data, setUpdate, dataTechStack, dataStaff, dataProject }) => {
  const [techStackLoading, setTechStackLoading] = useState(true);
  const [staffLoading, setStaffLoading] = useState(true);
  const [projectLoading, setProjectLoading] = useState(true);
  const [selectedTechStacks, setSelectedTechStacks] = useState(dataTechStack);
  const [selectedStaffs, setSelectedStaffs] = useState(dataStaff);
  const [selectedProjects, setSelectedProjects] = useState(dataProject);
  const localTechStack = 'techStack';
  const localStaff = 'staffs';
  const localProject = 'projects';
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { techStack, staffs, projects } = useSelector(state => state);
  const [isDisabled, setIsDisabled] = useState(false);
  const delay = 1000;
  const onSubmit = dataFormDepartments => {
    const dataRequest = {
      id: dataFormDepartments.id,
      name: dataFormDepartments.name.trim(),
      description: dataFormDepartments.description.trim(),
      techStackId: selectedTechStacks.map(item => item.value),
      staffId: selectedStaffs.map(item => item.value),
      projectId: selectedProjects.map(item => item.value),
    };
    dispatch(action.updateDepartments(dataRequest));
    setIsDisabled(true);
    setTimeout(() => {
      setUpdate(false);
    }, delay);
  };
  const onHandleCancelUpdate = () => {
    setUpdate(false);
  };
  const listItems = (arr = []) => {
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
    setTechStackLoading(false);
  }, []);
  useEffect(() => {
    const localData = JSON.parse(apiGet(localStaff));
    if (localData) {
      dispatch(getDataStaffs(localData));
    }
    setStaffLoading(false);
  }, []);
  useEffect(() => {
    const localData = JSON.parse(apiGet(localProject));
    if (localData) {
      dispatch(getDataProjects(localData));
    }
    setProjectLoading(false);
  }, []);
  return (
    <div className='w-2/3 ml-28'>
      <div className='mt-10'>
        <div className='flex justify-center'>
          <TableTitle title='Update Department:' />
        </div>
        <div className='leading-loose'>
          <ToastContainer autoClose={delay} />
          <form className='m-4 p-10 bg-white rounded shadow-xl' onSubmit={handleSubmit(onSubmit)}>
            <Link to='/departments'>
              <FontAwesomeIcon
                icon={faTimes}
                className='text-red-600 float-right text-xl -mt-7 -mr-6'
              />
            </Link>
            <div className=''>
              <div className=''>
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
            </div>
            <div className='mt-3'>
              <div className=''>
                <label className='block text-sm text-gray-00 mb-2' htmlFor='techStack'>
                  Tech stack:
                </label>
                <MultiSelect
                  options={listItems(techStack.data)}
                  isLoading={techStackLoading}
                  value={selectedTechStacks}
                  onChange={setSelectedTechStacks}
                  disableSearch={true}
                />
              </div>
            </div>
            <div className='mt-3'>
              <div className=''>
                <label className='block text-sm text-gray-00 mb-2' htmlFor='techStack'>
                  Staffs:
                </label>
                <MultiSelect
                  options={listItems(staffs.data)}
                  isLoading={staffLoading}
                  value={selectedStaffs}
                  onChange={setSelectedStaffs}
                  disableSearch={true}
                />
              </div>
            </div>
            <div className='mt-3'>
              <div className=''>
                <label className='block text-sm text-gray-00 mb-2' htmlFor='techStack'>
                  Projects:
                </label>
                <MultiSelect
                  options={listItems(projects.data)}
                  isLoading={projectLoading}
                  value={selectedProjects}
                  onChange={setSelectedProjects}
                  disableSearch={true}
                />
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
  );
};

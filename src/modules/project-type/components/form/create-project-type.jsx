import { TableTitle } from '../../../../components/table-title/table-title';
export const FormCreateProjectType = () => {
  return (
    <div className='w-1/2'>
      <div className='mt-10'>
        <div className='sm:ml-5'>
          <TableTitle title='Add Project Type:' />
        </div>
        <div className='leading-loose lg:mr-4 lg:w-full w-6/12'>
          <form className=' m-4 p-10 sm:m-0 sm:mt-6 sm:mb-5 bg-white rounded shadow-xl'>
            <div>
              <label className='block text-sm text-gray-00 mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='w-full px-5 outline-none py-1 text-gray-700 focus:shadow-md border-gray-400 border rounded focus:border-indigo-600'
                id='name'
                name='name'
                type='text'
                required
                placeholder='Name'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block text-sm text-gray-600 mb-2'
                htmlFor='description'
              >
                Description
              </label>
              <textarea
                className='w-full outline-none px-5 py-4 text-gray-700 focus:shadow-lg border-gray-400 border rounded focus:border-indigo-600'
                id='description'
                name='description'
                type='text'
                required
                placeholder='Description'
              />
            </div>
            <div className='inline-block mt-2 w-1/2 pr-1'>
              <label className='text-sm text-gray-600 mb-2' htmlFor='priority'>
                Priority
              </label>
              <div className='relative '>
                <select
                  className='w-full appearance-none outline-none p-2 text-gray-700 bg-gray-200 rounded'
                  id='priority'
                  name='priorityNumber'
                  required
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
                  id='status'
                  name='status'
                  required
                >
                  <option className='mt-10' value='active'>
                    Active
                  </option>
                  <option value='inactive'>Inactive</option>
                </select>
              </div>
            </div>
            <div className='flex items-center justify-center mt-6'>
              <div className='m-3'>
                <button className='font-bold rounded bg-indigo-600 text-white hover:opacity-90 shadow-md py-2 px-6 flex items-center'>
                  <div className='flex h-5 items-center'>Add</div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

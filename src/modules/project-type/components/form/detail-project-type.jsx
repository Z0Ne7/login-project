export const FormDetailProjectType = () => {
  const details = {
    name:
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabreak-wordsbreak-wordsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    description: '',
    priority: 0,
    status: 'active',
  };
  return (
    <div className='rounded-lg shadow-lg bg-white mt-10 ml-5'>
      <div className='flex justify-between border-b border-gray-100 px-5 py-4'>
        <div className='flex items-center'>
          <span className='font-bold text-gray-700 text-xl'>Project Type Details</span>
        </div>
      </div>
      <div>
        <div className='px-10 py-5'>
          Name: <p className='break-words'>{details?.name}</p>
        </div>
        <div className='px-10 py-5'>
          Description: <b>{details?.description}</b>
        </div>
        <div className='px-10  py-5'>
          Priority: <span className='text-xl ml-2'>{details?.priority}</span>
        </div>
        <div className='px-10 py-5'>
          Status:
          {details.status === 'active' ? (
            <span className='bg-green-100 border-2 border-green-600 rounded-lg text-green-700 font-bold p-2 ml-3'>
              ACTIVE
            </span>
          ) : (
            <span className='bg-red-100 border-2 border-red-600 rounded-lg text-red-700 font-bold p-2 ml-3'>
              INACTIVE
            </span>
          )}
        </div>
        <div className='px-5 py-4 flex justify-end'>
          <button
            onClick={null}
            className='bg-indigo-500 text-white p-2 rounded-md font-semibold mr-1 hover:bg-indigo-600'
          >
            <p>Update</p>
          </button>
          <button
            onClick={null}
            className='text-red-600 p-2 rounded-md border border-red-600 font-semibold bg-red-50 hover:bg-red-500 hover:text-white'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

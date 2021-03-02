import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { apiGet } from '../../../services/project-type.services';
import * as action from '../actions/project-type.actions';
import { RowTableProjectType } from './data-row-table';

export const TableProjectType = () => {
  const dispatch = useDispatch();
  const localItem = 'projectType';
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const { projectType } = useSelector(state => state);
  useEffect(() => {
    const localData = apiGet(localItem);
    if (localData) {
      dispatch(action.getDataProjectTypes(localData));
    }
    setLoading(false);
  }, []);
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = projectType.data
    .slice(offset, offset + PER_PAGE)
    .map((data, i) => (
      <RowTableProjectType
        key={i}
        number={i + 1}
        rowData={data}
        link={`/project-type/${data.id}`}
      />
    ));
  const pageCount = Math.ceil(projectType.data.length / PER_PAGE);
  const linkClassName = 'px-3.5 py-2 ml-2 mr-2 rounded-full hover:bg-indigo-500 hover:text-white';
  const navClass =
    'px-3.5 py-2 font-semibold text-lg ml-2 mr-2 rounded-full hover:bg-indigo-500 hover:text-white';

  return (
    <div className='w-full'>
      {/* <ToastContainer hideProgressBar={true} autoClose={2000} /> */}
      {isLoading ? (
        <div className='flex justify-center items-center text-7xl text-indigo-700 font-bold'>
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      ) : !projectType.data[0] ? (
        <div className='flex justify-center items-center text-4xl text-indigo-700 font-bold'>
          <p className='uppercase'>No data</p>
        </div>
      ) : (
        <div>
          <table className='flex flex-col shadow justify-center bg-white w-11/12 rounded'>
            <thead>
              <tr className='flex w-full bg-indigo-700 justify-around text-white cursor-pointer rounded h-10 items-center'>
                <th className='w-1/12'>No</th>
                <th className='w-2/12'>Name</th>
                <th className='w-4/12'>Description</th>
                <th className='w-2/12'>Priority</th>
                <th className='w-2/12'>Status</th>
              </tr>
            </thead>
            {currentPageData}
          </table>
          {pageCount > 1 ? (
            <div className='mt-5'>
              <ReactPaginate
                breakClassName={'text-indigo-500 font-bold'}
                breakLinkClassName={'ml-2 mr-2 rounded'}
                pageClassName={'font-semibold text-indigo-500'}
                pageLinkClassName={linkClassName}
                previousLabel={'<'}
                nextLabel={'>'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={'flex justify-center items-center'}
                previousLinkClassName={navClass}
                nextLinkClassName={navClass}
                disabledClassName={''}
                activeClassName={''}
                activeLinkClassName={'rounded-full bg-indigo-500 text-white px-3.5'}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

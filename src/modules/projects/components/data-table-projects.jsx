import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { RowTableProjects } from './data-row-table-projects';
import { apiGet } from '../../../services/projects.services';
import { useDispatch } from 'react-redux';
import * as action from '../actions/projects.actions';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const TableProjects = () => {
  const dispatch = useDispatch();
  const localItem = 'projects';
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const { projects } = useSelector(state => state);
  useEffect(() => {
    const localData = JSON.parse(apiGet(localItem));
    if (localData) {
      dispatch(action.getDataProjects(localData));
    }
    setLoading(false);
  }, []);
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = projects.data
    .slice(offset, offset + PER_PAGE)
    .map((data, i) => (
      <RowTableProjects key={i} number={i + 1} rowData={data} link={`/projects/${data.id}`} />
    ));
  const pageCount = Math.ceil(projects.data.length / PER_PAGE);
  const linkClassName = 'px-3.5 py-2 ml-2 mr-2 rounded-full hover:bg-indigo-500 hover:text-white';
  const navClass =
    'px-3.5 py-2 font-semibold text-lg ml-2 mr-2 rounded-full hover:bg-indigo-500 hover:text-white';

  return (
    <div className='w-full'>
      {isLoading ? (
        <div className='flex justify-center items-center text-7xl text-indigo-700 font-bold'>
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      ) : !projects.data[0] ? (
        <div className='flex justify-center items-center text-4xl text-indigo-700 font-bold'>
          <p className='uppercase'>No data</p>
        </div>
      ) : (
        <div>
          <table className='flex flex-col shadow justify-center bg-white w-11/12 rounded'>
            <thead>
              <tr className='flex w-full bg-indigo-700 justify-around text-white cursor-pointer rounded h-10 items-center'>
                <th className='w-2/12'>No</th>
                <th className='w-4/12'>Name</th>
                <th className='w-5/12'>Email</th>
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

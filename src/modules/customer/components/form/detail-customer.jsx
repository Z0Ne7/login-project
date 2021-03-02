import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { apiGet } from '../../../../services/customer.services';
import * as action from '../../actions/customer.actions';
import { LabelActive } from '../../../../components/label-active/label-active';
import { LabelInactive } from '../../../../components/label-inactive/label-inactive';

export const FormDetailCustomer = ({ setUpdate }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [dataCustomer, setDataCustomer] = useState([]);
  const { customer } = useSelector(state => state);
  const localCustomer = 'customer';
  useEffect(() => {
    const localData = JSON.parse(apiGet(localCustomer));
    if (localData) {
      dispatch(action.getDataCustomers(localData));
    }
    const result = customer.data.find(data => data.id === params.id);
    setDataCustomer(result);
    setLoading(false);
  }, []);
  const onHandleDelete = () => {
    const result = window.confirm('Do you want to delete customer ' + dataCustomer.name + ' ?');
    if (result) {
      dispatch(action.deleteCustomer(dataCustomer.id));
      history.push('/customers');
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
          <span className='font-bold text-gray-700 text-xl'>Customer Details</span>
        </div>
      </div>
      <div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Name:</p>
          <p className='break-words'>{dataCustomer?.name}</p>
        </div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Description:</p>
          <p>{dataCustomer?.description}</p>
        </div>
        <div className='px-10 py-5'>
          <p className='font-bold'>Priority:</p>
          <span className='text-xl ml-2'>{dataCustomer?.priority}</span>
        </div>
        <div className='px-10 flex flex-row items-center'>
          <p className='font-bold'>Status:</p>
          {dataCustomer?.status === 'active' ? <LabelActive /> : <LabelInactive />}
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

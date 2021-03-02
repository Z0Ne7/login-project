import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FormDetailCustomer } from './form/detail-customer';
import { FormEditCustomer } from './form/edit-customer';

export const DetailCustomer = () => {
  const params = useParams();
  const [update, setUpdate] = useState(false);
  const [detailsCustomer, setDetailsCustomer] = useState([]);
  const { customer } = useSelector(state => state);
  useEffect(() => {
    const result = customer.data.find(data => data.id === params.id);
    setDetailsCustomer(result);
  }, []);
  return (
    <div className='w-10/12'>
      {update ? (
        <FormEditCustomer data={detailsCustomer} setUpdate={setUpdate} />
      ) : (
        <FormDetailCustomer setUpdate={setUpdate} />
      )}
    </div>
  );
};

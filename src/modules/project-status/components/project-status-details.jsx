import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FormDetailProjectStatus } from './form/detail-project-status';
import { FormEditProjectStatus } from './form/edit-project-status';

export const DetailProjectStatus = () => {
  const params = useParams();
  const [update, setUpdate] = useState(false);
  const [detailsProjectStatus, setDetailsProjectStatus] = useState([]);
  const { projectStatus } = useSelector(state => state);
  useEffect(() => {
    const result = projectStatus.data.find(data => data.id === params.id);
    setDetailsProjectStatus(result);
  }, []);
  return (
    <div className='w-10/12'>
      {update ? (
        <FormEditProjectStatus data={detailsProjectStatus} setUpdate={setUpdate} />
      ) : (
        <FormDetailProjectStatus setUpdate={setUpdate} />
      )}
    </div>
  );
};

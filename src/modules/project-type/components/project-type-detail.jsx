import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FormDetailProjectType } from './form/detail-project-type';
import { FormEditProjectType } from './form/edit-project-type';

export const DetailProjectType = () => {
  const params = useParams();
  const [update, setUpdate] = useState(false);
  const [detailsProjectType, setDetailsProjectType] = useState([]);
  const { projectType } = useSelector(state => state);
  useEffect(() => {
    const result = projectType.data.find(data => data.id === params.id);
    setDetailsProjectType(result);
  }, []);
  return (
    <div className='w-10/12'>
      {update ? (
        <FormEditProjectType data={detailsProjectType} setUpdate={setUpdate} />
      ) : (
        <FormDetailProjectType setUpdate={setUpdate} />
      )}
    </div>
  );
};

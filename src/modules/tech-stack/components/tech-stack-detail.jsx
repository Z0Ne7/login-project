import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FormDetailTechStack } from './form/detail-tech-stack';
import { FormEditTechStack } from './form/edit-tech-stack';

export const DetailTechStack = () => {
  const params = useParams();
  const [update, setUpdate] = useState(false);
  const [detailsTechStack, setDetailsTechStack] = useState([]);
  const { techStack } = useSelector(state => state);
  useEffect(() => {
    const result = techStack.data.find(data => data.id === params.id);
    setDetailsTechStack(result);
  }, []);
  return (
    <div className='w-10/12'>
      {update ? (
        <FormEditTechStack data={detailsTechStack} setUpdate={setUpdate} />
      ) : (
        <FormDetailTechStack setUpdate={setUpdate} />
      )}
    </div>
  );
};

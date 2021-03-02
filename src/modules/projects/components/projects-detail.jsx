import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FormDetailProjects } from './form/detail-projects';
import { FormEditProjects } from './form/edit-projects';

export const DetailProjects = () => {
  const params = useParams();
  const [update, setUpdate] = useState(false);
  const [detailsProjects, setDetailsProjects] = useState([]);
  const { projects } = useSelector(state => state);
  useEffect(() => {
    const result = projects.data.find(data => data.id === params.id);
    setDetailsProjects(result);
  }, []);
  return (
    <div className='w-10/12'>
      {update ? (
        <FormEditProjects data={detailsProjects} />
      ) : (
        <FormDetailProjects data={detailsProjects} setUpdate={setUpdate} />
      )}
    </div>
  );
};

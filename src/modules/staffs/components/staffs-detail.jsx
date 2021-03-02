import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FormDetailStaffs } from './form/detail-staffs';
import { FormEditStaffs } from './form/edit-staffs';

export const DetailStaffs = () => {
  const params = useParams();
  const [update, setUpdate] = useState(false);
  const [detailsStaffs, setDetailsStaffs] = useState([]);
  const [detailsTechStacks, setDetailsTechStacks] = useState([]);
  const techStackList = [];
  const { staffs, techStack } = useSelector(state => state);
  useEffect(() => {
    const result = staffs.data.find(data => data.id === params.id);
    setDetailsStaffs(result);
    result.techStackId.map(item => {
      const foundIndex = techStack.data.findIndex(techStackData => techStackData.id === item);
      techStackList.push({
        label: techStack.data[foundIndex].name,
        value: techStack.data[foundIndex].id,
      });
    });
    setDetailsTechStacks(techStackList);
  }, []);
  return (
    <div className='w-10/12'>
      {update ? (
        <FormEditStaffs
          data={detailsStaffs}
          setUpdate={setUpdate}
          dataTechStack={detailsTechStacks}
        />
      ) : (
        <FormDetailStaffs setUpdate={setUpdate} />
      )}
    </div>
  );
};

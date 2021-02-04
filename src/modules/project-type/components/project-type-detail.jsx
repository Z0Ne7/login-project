import { FormDetailProjectType } from './form/detail-project-type';
import { useState } from 'react';

export const DetailProjectType = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className='w-10/12'>
      <FormDetailProjectType />
    </div>
  );
};

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FormDetailDepartments } from './form/detail-departments';
import { FormEditDepartments } from './form/edit-departments';

export const DetailDepartments = () => {
  const params = useParams();
  const [update, setUpdate] = useState(false);
  const [detailsDepartments, setDetailsDepartments] = useState([]);
  const [detailsTechStacks, setDetailsTechStacks] = useState([]);
  const [detailsStaffs, setDetailsStaffs] = useState([]);
  const [detailsProjects, setDetailsProjects] = useState([]);
  const techStackList = [];
  const staffList = [];
  const projectList = [];
  const { departments, techStack, staffs, projects } = useSelector(state => state);
  useEffect(() => {
    const result = departments.data.find(data => data.id === params.id);
    setDetailsDepartments(result);
    result.techStackId.map(item => {
      const foundIndex = techStack.data.findIndex(techStackData => techStackData.id === item);
      techStackList.push({
        label: techStack.data[foundIndex].name,
        value: techStack.data[foundIndex].id,
      });
    });
    setDetailsTechStacks(techStackList);
    result.staffId.map(item => {
      const foundIndex = staffs.data.findIndex(staffData => staffData.id === item);
      staffList.push({
        label: staffs.data[foundIndex].name,
        value: staffs.data[foundIndex].id,
      });
    });
    setDetailsStaffs(staffList);
    result.projectId.map(item => {
      const foundIndex = projects.data.findIndex(projectData => projectData.id === item);
      projectList.push({
        label: projects.data[foundIndex].name,
        value: projects.data[foundIndex].id,
      });
    });
    setDetailsProjects(projectList);
  }, []);
  return (
    <div className='w-10/12'>
      {update ? (
        <FormEditDepartments
          data={detailsDepartments}
          setUpdate={setUpdate}
          dataStaff={detailsStaffs}
          dataTechStack={detailsTechStacks}
          dataProject={detailsProjects}
        />
      ) : (
        <FormDetailDepartments setUpdate={setUpdate} />
      )}
    </div>
  );
};

import ProjectName from './detail/ProjectName';
import ProjectTask from './detail/ProjectTask';
import Status from './status/Status';

const ProjectUnit = () => {
  return (
    <>
      <Status />
      <ProjectName />
      <ProjectTask />
      <ProjectTask />
    </>
  );
};

export default ProjectUnit;

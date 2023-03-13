import styled from 'styled-components';
import ProjectName from './detail/ProjectName';
import ProjectTask from './detail/ProjectTask';
import Status from './status/Status';

const Wrapper = styled.div`
  margin-bottom: 15px;
`;
const ProjectUnit = ({ status }) => {
  return (
    <>
      <Wrapper>
        <Status status={status} />
        <ProjectName />
        <ProjectTask />
        <ProjectTask />
      </Wrapper>
    </>
  );
};

export default ProjectUnit;

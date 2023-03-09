import ProjectList from 'components/project/detail/ProjectList';
import ProjectUnit from 'components/project/ProjectUnit';
import styled from 'styled-components';

const Page = styled.div`
  padding: 10px 10px 0 10px;
`;

const Project = () => {
  return (
    <Page>
      <ProjectUnit />
    </Page>
  );
};

export default Project;

import GoBackLink from 'components/common/GoBackLink';
import TaskHeader from 'components/common/task/TaskHeader';
import ProjectList from 'components/project/detail/ProjectList';
import ProjectUnit from 'components/project/ProjectUnit';
import styled from 'styled-components';

const Page = styled.div`
  padding: 10px 10px 0 10px;
`;

const Project = () => {
  return (
    <Page>
      <GoBackLink>Projects</GoBackLink>
      <ProjectUnit status={'backlog'} />
      <ProjectUnit status={'todo'} />
      <ProjectUnit status={'done'} />
    </Page>
  );
};

export default Project;

import GoBackLink from 'components/common/GoBackLink';
import Description from 'components/task/detail/Description';
import DetailInfo from 'components/task/detail/DetailInfo';
import styled from 'styled-components';

const Page = styled.div`
  padding: 10px 10px 0 10px;
`;
const TaskDetail = () => {
  return (
    <Page>
      <GoBackLink></GoBackLink>
      <DetailInfo />
      <Description />
    </Page>
  );
};

export default TaskDetail;

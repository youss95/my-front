import GoBackLink from 'components/common/GoBackLink';
import Attatchment from 'components/task/detail/Attatchment';
import Description from 'components/task/detail/Description';
import DetailInfo from 'components/task/detail/DetailInfo';
import DetailProgress from 'components/task/detail/DetailProgress';
import Memo from 'components/task/detail/Memo';
import styled from 'styled-components';

const Page = styled.div`
  padding: 10px 0 0 0;
`;
const TaskDetail = () => {
  return (
    <Page>
      <GoBackLink></GoBackLink>
      <DetailInfo />
      <Description />
      <Attatchment />
      <DetailProgress />
      <Memo />
    </Page>
  );
};

export default TaskDetail;

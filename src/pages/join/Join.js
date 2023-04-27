import GoBackLink from 'components/common/GoBackLink';
import JoinForm from 'components/join/JoinForm';
import { useJoin } from 'hooks/query/useAuth';
import styled from 'styled-components';

const Page = styled.div`
  padding: 10px 10px 0 10px;
`;

const Join = () => {
  const data = useJoin();
  console.log('data', data);
  return (
    <Page>
      <GoBackLink>Sign Up</GoBackLink>
      <JoinForm mutate={data.mutate} />
    </Page>
  );
};

export default Join;

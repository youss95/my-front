import GoBackLink from 'components/common/GoBackLink';
import JoinForm from 'components/join/JoinForm';
import styled from 'styled-components';

const Page = styled.div`
  padding: 10px 10px 0 10px;
`;

const Join = () => {
  return (
    <Page>
      <GoBackLink>Sign Up</GoBackLink>
      <JoinForm />
    </Page>
  );
};

export default Join;

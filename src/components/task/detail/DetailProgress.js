import DetailHeader from './DetailHeader';
import styled from 'styled-components';
import DetailList from './DetailList';
import ProgressBar from 'components/common/ProgressBar';
const Container = styled.div`
  border-top: 10px solid rgba(211, 211, 211, 0.3);
`;
const Wrapper = styled.div`
  padding: 20px 10px 20px 10px;
`;
const Percentage = styled.div`
  font-size: 28px;
  font-weight: 600;
  padding: 10px 30px 10px 30px;
  border-bottom: 3px solid rgba(211, 211, 211, 0.3);
`;
const DetailProgress = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <DetailHeader name={'Task List'} plus />
          <ProgressBar value={78} bold={true} />
        </Wrapper>
        <DetailList />
      </Container>
    </>
  );
};

export default DetailProgress;

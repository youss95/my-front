import styled from 'styled-components';
import MemoBox from './box/MemoBox';
import DetailHeader from './DetailHeader';
const Container = styled.div`
  border-top: 10px solid rgba(211, 211, 211, 0.3);
`;
const Wrapper = styled.div`
  padding: 10px 10px 10px 10px;
`;
const Memo = () => {
  return (
    <Container>
      <Wrapper>
        <DetailHeader name={'Memo'} />

        <MemoBox />
      </Wrapper>
    </Container>
  );
};

export default Memo;

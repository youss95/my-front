import styled from 'styled-components';
import desc from 'assets/images/description.svg';
import { calculateTextLenth } from 'utils/descLength';
import DetailHeader from './DetailHeader';

const Container = styled.div`
  border-top: 10px solid rgba(211, 211, 211, 0.3);
`;
const Wrapper = styled.div`
  padding: 20px 10px 20px 10px;
  span {
    font-size: 18px;
  }
  p {
    padding: 15px 30px 15px 30px;
  }
  dd {
    font-size: 12px;
    color: blue;
    margin-left: 30px;
  }
`;

const Description = () => {
  const ex = 'ldsakjlfas;j;lafsdj;;l asdkfj;llasdj';
  const limit = 10;
  let text = calculateTextLenth(ex, limit);
  return (
    <Container>
      <Wrapper>
        <DetailHeader name={'Description'} plus={false} />
        <p>{text}</p>
        {ex.length > limit ? <dd>See Detail</dd> : ''}
      </Wrapper>
    </Container>
  );
};

export default Description;

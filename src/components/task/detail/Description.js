import styled from 'styled-components';
import desc from 'assets/images/description.svg';
import { calculateTextLenth } from 'utils/descLength';
const Wrapper = styled.div`
  border: 1px solid black;
  padding: 5px;
  span {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    padding: 15px 30px 15px 30px;
  }
`;

const Top = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Description = () => {
  const ex = 'ldsakjlfas;j;lafsdj;;l asdkfj;llasdj';
  const limit = 10;
  let text = calculateTextLenth(ex, limit);
  return (
    <Wrapper>
      <Top>
        <img src={desc} alt="description" />
        <span>Description</span>
      </Top>
      <p>{text}</p>
      {ex.length > limit ? <span>See Detail</span> : ''}
    </Wrapper>
  );
};

export default Description;

import styled from 'styled-components';

//width 가변 (날짜에 따라서)
const Wrapper = styled.div`
  width: ${props => props.width};
  border: 1px solid #e2e2ea;
  height: 69px;
  margin-left: ${props => props.start};
  margin-top: 10px;

  border-radius: 5px;
  display: flex;
  h3 {
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 5px;
  }
  span {
    color: grey;
  }
  &::before {
    content: '';
    display: block;
    width: 5px;
    height: 100%;
    background: blue;
    border-radius: 5px 0 0 5px;
    left: 0;
    top: 0;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 5px;
`;
const MyTaskCard = () => {
  const unitWIdth = (window.innerWidth - 64) / 7;
  const number = 5;
  const cardWidth = unitWIdth * number + 'px';
  // start logic
  return (
    <Wrapper width={cardWidth} start={unitWIdth * 2 + 'px'}>
      <Info>
        <h3>name</h3>
        <span>project</span>
      </Info>
    </Wrapper>
  );
};

export default MyTaskCard;

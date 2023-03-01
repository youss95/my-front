import styled from 'styled-components';
import checkIcon from '../../../assets/images/check.svg';
const Wrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.type === 'Inq') {
      return '#B1E5FC';
    } else if (props.type === 'On') {
      return '#CABDFF';
    } else {
      return '#FFD88D';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Round = ({ type, icon }) => {
  return (
    <div>
      <Wrapper type={type}>
        <img src={icon} alt="check" />
      </Wrapper>
    </div>
  );
};

export default Round;

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
      return '#F8F8FB';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Round = ({ type, icon, number }) => {
  return (
    <div>
      <Wrapper type={type}>{icon ? <img src={icon} alt="check" /> : number}</Wrapper>
    </div>
  );
};

export default Round;

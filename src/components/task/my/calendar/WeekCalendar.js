import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 5px;
  flex: 1;
  height: 100%;
  span {
    display: block;
    text-align: center;
  }
`;

const WeekCalendar = ({ day, name, index }) => {
  return (
    <Wrapper>
      <span>{day}</span>
      <span>{name}</span>
    </Wrapper>
  );
};

export default WeekCalendar;

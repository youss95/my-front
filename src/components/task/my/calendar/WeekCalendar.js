import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px 5px 10px 5px;
  flex: 1;
  height: 100%;
  span {
    display: block;
    text-align: center;
    margin-bottom: 5px;
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

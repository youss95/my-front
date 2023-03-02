import styled from 'styled-components';
import flag from '../../../assets/images/flag.svg';
import calendar from '../../../assets/images/calendar.svg';
import dayjs from 'dayjs';
import { dateFormat } from 'utils/datetime';
const Wrapper = styled.div`
  border: 1px solid silver;
  width: 100%;
  border-radius: 3px;
  padding: 8px 16px 8px 16px;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 85%;
  span {
    display: block;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
  }
  p {
    padding: 10px;
    color: grey;
    font-size: 16px;
    img {
      margin-right: 10px;
      vertical-align: middle;
    }
  }
`;

const TodayTaskCard = ({ title, date }) => {
  return (
    <Wrapper>
      <Content>
        <span>{title}</span>
        <p>
          <img src={calendar} alt="calendar" />
          {dateFormat(dayjs(date))}
        </p>
      </Content>
      <img src={flag} alt="flag" />
    </Wrapper>
  );
};

export default TodayTaskCard;

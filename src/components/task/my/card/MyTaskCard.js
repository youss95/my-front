import styled from 'styled-components';
import dayjs from 'dayjs';
import { dateFormat } from 'utils/datetime';
const Wrapper = styled.div`
  border: 1px solid silver;
  width: 100%;
  border-radius: 10px;
  padding: 8px 16px 8px 16px;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
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

const MyTaskCard = ({ title, date }) => {
  return (
    <Wrapper>
      <Content>
        <span>{title}</span>
        <p>{dateFormat(dayjs(date))}</p>
      </Content>
    </Wrapper>
  );
};

export default MyTaskCard;

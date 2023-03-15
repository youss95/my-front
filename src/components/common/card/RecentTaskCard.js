import styled from 'styled-components';
import { calculateTextLenth } from 'utils/descLength';
import Avatar from '../Avatar';
import ProgressBar from '../ProgressBar';

const Container = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  width: 266px;
  height: 131px;
  padding: 10px;
`;

const Content = styled.div`
  margin-bottom: 25px;
`;

const Title = styled.div`
  padding: 5px 0 5px 0;
  white-space: nowrap;
  span {
    font-weight: 600;
    font-size: 18px;
  }
`;

const Status = styled.div`
  display: flex;
  span {
    color: #7e8ca0;
  }
  p {
    color: red;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecentTaskCard = ({ title }) => {
  //title = title.length > 30 ? title.substr(0, 30).concat('...') : title;
  const limitedTitle = calculateTextLenth(title, 30);
  return (
    <Container>
      <Content>
        <Title>
          <span>{limitedTitle}</span>
        </Title>
        <Status>
          <span>private</span>&nbsp; * &nbsp;<p>3 days left</p>
        </Status>
      </Content>
      <Wrapper>
        <Avatar />
        <ProgressBar value={78} />
      </Wrapper>
    </Container>
  );
};

export default RecentTaskCard;

import styled from 'styled-components';
import calendar from '../../assets/images/edit.svg';
import check from '../../assets/images/hand.svg';
const Container = styled.div`
  display: flex;
  width: 60px;
`;

const Profile = styled.div`
  border: 1px solid grey;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  margin-right: -10px;
`;

const Avatar = ({ imgPath }) => {
  return (
    <Container>
      <Profile>
        <img src={calendar} alt="cal" />
      </Profile>
      <Profile>
        <img src={check} alt="cal" />
      </Profile>
      <Profile>
        <img src={check} alt="cal" />
      </Profile>
    </Container>
  );
};

export default Avatar;

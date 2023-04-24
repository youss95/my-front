import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f8f8fb;
  border-radius: 10px;
  padding: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    color: #7e8ca0;
    font-size: 16px;
  }
  h3 {
    font-weight: 600;
    font-size: 18px;
  }
`;

const Content = styled.div`
  margin-top: 20px;
`;
const MemoBox = () => {
  return (
    <Wrapper>
      <UserInfo>
        <h3>name</h3>
        <span>2021.11.11</span>
      </UserInfo>
      <Content>abcdef</Content>
    </Wrapper>
  );
};

export default MemoBox;

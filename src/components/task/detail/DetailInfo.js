import styled from 'styled-components';

const InfoWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  h2 {
    font-weight: 600;
    font-size: 20px;
  }
`;
const Detail = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 30px;
  span {
    color: grey;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-weight: 600;
  }
`;
const DetailInfo = () => {
  return (
    <>
      <InfoWrapper>
        <h2>Design and KK</h2>
        <Detail>
          <Content>
            <span>Due Date</span>
            <p>Fri, 15 Jul 2020</p>
          </Content>
          <Content>
            <span>Stauts</span>
            <p>Backlog</p>
          </Content>
        </Detail>
      </InfoWrapper>
    </>
  );
};

export default DetailInfo;

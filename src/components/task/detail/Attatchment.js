import styled from 'styled-components';
import DetailHeader from './DetailHeader';
import doc from 'assets/images/document.svg';
const Wrapper = styled.div`
  padding: 10px 10px 10px 10px;
`;
const ContentBox = styled.div`
  padding: 16px;
  display: flex;
  height: 80px;
  border-radius: 10px;
  background: rgba(196, 219, 255, 0.7);
`;
const IconWrapper = styled.div`
  border-radius: 10px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(80, 181, 255, 0.2);
`;
const Content = styled.div`
  height: 48px;
  width: 100%;
  padding: 5px;
  h3 {
    font-weight: 600;
  }
  span {
    color: grey;
    font-size: 12px;
  }
`;
const Container = styled.div`
  border-top: 10px solid rgba(211, 211, 211, 0.3);
`;
const Attatchment = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <DetailHeader name={'Attatchment'} plus />
          <ContentBox>
            <IconWrapper>
              <img src={doc} alt="sd" />
            </IconWrapper>
            <Content>
              <h3>P V1.doc</h3>
              <span>125 KB</span>
            </Content>
          </ContentBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default Attatchment;

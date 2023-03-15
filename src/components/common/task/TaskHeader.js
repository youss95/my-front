import styled from 'styled-components';
import goback from '../../../assets/images/gobackIcon.svg';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const GoBackIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const TaskHeader = () => {
  return (
    <Wrapper>
      <GoBackIconWrapper>
        <img src={goback} alt="goback" />
      </GoBackIconWrapper>
      <h2>name</h2>
    </Wrapper>
  );
};

export default TaskHeader;

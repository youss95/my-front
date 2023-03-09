import styled from 'styled-components';
import Avatar from 'components/common/Avatar';
import img from '../../../assets/images/violin.svg';
const Wrapper = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const ProjectTask = () => {
  return (
    <>
      <Wrapper>
        <span>name</span>
        <Avatar imgPath={img} />
      </Wrapper>
    </>
  );
};

export default ProjectTask;

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #f8f8fb;
  padding: 5px;
  span {
    color: #475569;
    line-height: 40px;
  }
`;

const ProjectName = () => {
  return (
    <Wrapper>
      <span>Task Name</span>
      <span>Assign to</span>
    </Wrapper>
  );
};

export default ProjectName;

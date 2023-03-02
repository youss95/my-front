import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0 14px 0;
  h3 {
    font-weight: 600;
    font-size: 28px;
  }
  a {
    color: #0062ff;
    font-size: 18px;
  }
`;

const SubHeader = ({ text }) => {
  return (
    <Wrapper>
      <h3>{text}</h3>
      <Link to="/">View All</Link>
    </Wrapper>
  );
};

export default SubHeader;

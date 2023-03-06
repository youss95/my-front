import styled from 'styled-components';

const Title = styled.h2`
  font-size: ${props => props.size};
  font-weight: 600;
  padding: 15px 5px 15px 5px;
`;

const PageTitle = ({ title, size }) => {
  return <Title size={size}>{title}</Title>;
};

export default PageTitle;

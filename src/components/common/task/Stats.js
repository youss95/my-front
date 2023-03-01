import styled from 'styled-components';
const Wrapper = styled.div`
  padding: 16px;

  span {
    font-size: ${props => props.size};
    font-weight: 500;
  }
  p {
    margin-top: 5px;
    font-size: ${props => props.textSize};
  }
`;

const Stats = ({ size, textSize, text, number }) => {
  return (
    <Wrapper size={size} textSize={textSize}>
      <span>{number}</span>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Stats;

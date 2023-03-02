import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  progress {
    height: 5px;
    width: 67px;
    appearance: none;
    ::-webkit-progress-bar {
      background: silver;
      border-radius: 10px;
    }
    ::-webkit-progress-value {
      border-radius: 10px;
      background: green;
    }
  }
`;

const ProgressBar = ({ value, max }) => {
  return (
    <Container>
      <span>{value}%</span>
      <progress value={value} min="0" max={max}></progress>
    </Container>
  );
};

ProgressBar.defaultProps = {
  max: 100,
  value: 78,
};

export default ProgressBar;

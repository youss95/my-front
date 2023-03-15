import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    font-size: ${props => {
      if (props.bold) return '24px';
      else return '18px';
    }};
    font-weight: 600;
  }
  progress {
    height: 5px;
    width: 67px;
    ${props => {
      if (props.bold) {
        return css`
          height: 10px;
          width: 157px;
        `;
      } else {
        return css`
          height: 5px;
          width: 67px;
        `;
      }
    }}
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

const ProgressBar = ({ value, max, bold }) => {
  return (
    <Container bold={bold}>
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

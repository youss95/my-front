import Round from 'components/common/task/Round';
import styled from 'styled-components';
import check from '../../../assets/images/check.svg';
import edit from '../../../assets/images/edit.svg';
import backlog from '../../../assets/images/emailIcon.svg';
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;
const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Plus = styled.div`
  position: relative;
  top: 0px;
  right: 0px;
  width: 31px;
  height: 31px;

  cursor: pointer;
  z-index: 1;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 2px;
    margin: -1px 0 0 -8px;
    background: #475569;
    content: '';
  }
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 16px;
    margin: -8px 0 0 -1px;
    background: #475569;
    content: '';
  }
`;
const Status = ({ status }) => {
  const getStatusIcon = () => {
    if (status === 'backlog') {
      return backlog;
    } else if (status === 'todo') {
      return edit;
    } else {
      return check;
    }
  };
  return (
    <Wrapper>
      <IconWrapper>
        <img src={getStatusIcon()} alt="backlog" />
        <span>name</span>
        <Round number={1} />
      </IconWrapper>
      <Plus />
    </Wrapper>
  );
};

export default Status;

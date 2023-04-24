import styled from 'styled-components';
import attatch from 'assets/images/attachment.svg';
import desc from 'assets/images/description.svg';
import taskIcon from 'assets/images/task.svg';
import message from 'assets/images/message.svg';
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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

const DetailHeader = ({ name, plus }) => {
  const decideIcon = () => {
    if (name === 'Description') return desc;
    else if (name === 'Task List') return taskIcon;
    else if (name === 'Memo') return message;
    else return attatch;
  };
  return (
    <Wrapper>
      <IconWrapper>
        <img src={decideIcon()} alt="attatch" />
        <span>{name}</span>
      </IconWrapper>
      {plus ? <Plus /> : ''}
    </Wrapper>
  );
};

export default DetailHeader;

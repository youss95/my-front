import styled from 'styled-components';
import MyTaskCard from '../card/MyTaskCard';
import threeDots from '../../../../assets/images/threeDot.svg';
import Round from 'components/common/task/Round';
import fold from '../../../../assets/images/fold.svg';
import unFold from '../../../../assets/images/unFold.svg';
import { useState } from 'react';
const Container = styled.div`
  padding: 10px 10px 10px 10px;
`;
const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  margin-bottom: 5px;
  height: 40px;

  span {
    display: table-cell;
    font-size: 22px;
    font-weight: 600;
    line-height: 40px;
    margin-bottom: 5px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const IconWrapper = styled.div``;
const MyWork = () => {
  const [isFold, setIsFold] = useState(true);
  const unFoldTask = () => {
    setIsFold(prev => !prev);
  };
  return (
    <>
      <Container>
        <SubHeader>
          <Wrapper>
            <IconWrapper onClick={unFoldTask}>
              {isFold ? <img src={fold} alt="fold" /> : <img src={unFold} alt="unFold" />}
            </IconWrapper>
            <span>name</span>
            <Round number={1} />
          </Wrapper>
          <img src={threeDots} alt="threeDots" />
        </SubHeader>
        {isFold ? '' : <MyTaskCard title={'name'} date={new Date()} />}
      </Container>
    </>
  );
};

export default MyWork;

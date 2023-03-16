import { StyledButton } from 'components/common/Button';
import RecentTaskCard from 'components/common/card/RecentTaskCard';
import TodayTaskCard from 'components/common/card/TodayTaskCard';
import StyledInput from 'components/common/Input';
import Modal from 'components/common/Modal';
import SubHeader from 'components/common/SubHeader';
import TaskInfo from 'components/task/TaskInfo';
import React from 'react';
import * as Styled from './Home.style';

const Home = () => {
  const title = 'title title title title title11';
  return (
    <>
      <Styled.Wrapper>
        <TaskInfo />
        <SubHeader text={'Today'} />
        <TodayTaskCard title={'Today Task'} date={new Date()} />
        <SubHeader text={'Recent'} />
        <RecentTaskCard title={title} />
      </Styled.Wrapper>
      <Modal height={'30vh'} width={'90%'} header={'Create Project'}>
        <StyledInput type={'text'} placeholder={'Project Name'} />
        <StyledButton size={'lg'} backcolor={'#3D56F0'} color={'white'}>
          Create
        </StyledButton>
      </Modal>
    </>
  );
};

export default Home;

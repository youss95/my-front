import TodayTaskCard from 'components/common/card/TodayTaskCard';
import SubHeader from 'components/common/SubHeader';
import TaskInfo from 'components/task/TaskInfo';
import React from 'react';
import * as Styled from './Home.style';

const Home = () => {
  return (
    <Styled.Wrapper>
      <TaskInfo />
      <SubHeader text={'today'} />
      <TodayTaskCard title={'Today Task'} date={new Date()} />
    </Styled.Wrapper>
  );
};

export default Home;

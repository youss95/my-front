import RecentTaskCard from 'components/common/card/RecentTaskCard';
import TodayTaskCard from 'components/common/card/TodayTaskCard';
import SubHeader from 'components/common/SubHeader';
import TaskInfo from 'components/task/TaskInfo';
import React from 'react';
import * as Styled from './Home.style';

const Home = () => {
  const title = 'title title title title title11';
  return (
    <Styled.Wrapper>
      <TaskInfo />
      <SubHeader text={'Today'} />
      <TodayTaskCard title={'Today Task'} date={new Date()} />
      <SubHeader text={'Recent'} />
      <RecentTaskCard title={title} />
    </Styled.Wrapper>
  );
};

export default Home;

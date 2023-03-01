/* eslint-disable prettier/prettier */
import TaskCard from 'components/common/task/TaskCard';
import React from 'react';
import CompletedTask from './info/CompletedTask';
import { CompleteWrapper, SideWrapper, Wrapper } from './TaskInfo.style';

const TaskInfo = () => {
  return (
    <>
      <Wrapper>
        <CompleteWrapper>
          <CompletedTask />
        </CompleteWrapper>
        <SideWrapper>
          <TaskCard number={12} text={'Inquiry'} type={'Inq'} />
          <TaskCard number={48} text={'OnGoing'} type={'On'} />
        </SideWrapper>
      </Wrapper>
    </>
  );
};

export default TaskInfo;

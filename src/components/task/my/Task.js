import PageTitle from 'components/common/PageTitle';
import Tab from 'components/common/Tab';
import { useState } from 'react';
import styled from 'styled-components';
import { getWeekDaysOfMonth } from 'utils/datetime';
import TaskCalendar from './calendar/TaskCalendar';
import WeekCalendar from './calendar/WeekCalendar';
import CalendarCard from './card/CalendarCard';
import MyTaskCard from './card/MyTaskCard';
import MyWork from './work/MyWork';

const Page = styled.div`
  padding: 0 0 0 0;
`;

const Task = () => {
  const [tabStatus, setTabStatus] = useState('left');
  const changeTabStatus = tabName => {
    setTabStatus(tabName);
  };
  return (
    <Page>
      <PageTitle size={'26px'} title={'abc'} />
      <Tab tabname={tabStatus} changeTab={changeTabStatus} />
      {tabStatus === 'right' ? <TaskCalendar /> : <MyWork />}
    </Page>
  );
};

export default Task;

import PageTitle from 'components/common/PageTitle';
import Tab from 'components/common/Tab';
import styled from 'styled-components';
import { getWeekDaysOfMonth } from 'utils/datetime';
import WeekCalendar from './calendar/WeekCalendar';
import MyTaskCard from './card/MyTaskCard';

const Page = styled.div`
  padding: 0 10px 0 10px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const Table = styled.table`
  border: 1px solid grey;
  width: 100%;
  height: 500px;
  margin-top: 20px;
  th {
    border: 1px solid grey;
    white-space: no-wrap;
    writing-mode: vertical-lr;
    text-align: center;
    vertical-align: middle;
    color: grey;
    font-size: 22px;
  }
  td {
    border: 1px solid grey;
  }
`;
const Task = () => {
  const weekDays = getWeekDaysOfMonth();
  return (
    <Page>
      <PageTitle size={'26px'} title={'abc'} />
      <Tab tabname={'left'} />
      <Table>
        <tr>
          <th rowSpan="2" width="34px">
            진행
          </th>
          <td height="50px">
            <Wrapper>
              {weekDays.map((x, i) => (
                <WeekCalendar name={x.name} day={x.day} index={i} />
              ))}
            </Wrapper>
          </td>
        </tr>
        <tr>
          <td>
            <MyTaskCard />
            <MyTaskCard />
          </td>
        </tr>
        <tr>
          <th>예정</th>
          <td>sd</td>
        </tr>
        <tr>
          <th>완료</th>
          <td>sd</td>
        </tr>
      </Table>
    </Page>
  );
};

export default Task;

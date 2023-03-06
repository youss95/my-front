import styled from 'styled-components';
import { getWeekDaysOfMonth } from 'utils/datetime';
import CalendarCard from '../card/CalendarCard';
import WeekCalendar from './WeekCalendar';

const Table = styled.table`
  width: 100%;
  height: 500px;
  margin-top: 20px;
  th {
    border-top: 1px solid grey;\
    border-bottom: 1px solid grey;
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
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const TaskCalendar = () => {
  const weekDays = getWeekDaysOfMonth();
  return (
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
          <CalendarCard />
        </td>
      </tr>
      <tr>
        <th>예정</th>
        <td></td>
      </tr>
      <tr>
        <th>완료</th>
        <td>sd</td>
      </tr>
    </Table>
  );
};

export default TaskCalendar;

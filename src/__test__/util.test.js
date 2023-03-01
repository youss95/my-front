import { dateWithOnlyHour, dateBasedOn24H } from 'utils/datetime';
import dayjs from 'dayjs';
test('date 유틸 함수 테스트 알림,채팅', () => {
  expect(dateBasedOn24H(new Date('2021-07-10T18:12:00.000'))).toBe('2021-07-10 , 6PM');
});

test('date 유틸 함수 테스트 년월일 , 시간', () => {
  expect(dateWithOnlyHour(dayjs(new Date()))).toBe('2022-07-10 , 6PM');
});

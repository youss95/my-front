import dayjs, { isDayjs } from 'dayjs';

//isDayjs:  object or not
export const dateFormat = value => {
  if (isDayjs(value)) {
    return value.format('YYYY-MM-DD');
  }
};

export const dateWithOnlyHour = value => {
  let hour = value.get('hour');
  hour = hour > 12 ? (hour % 12) + 'PM' : hour + 'AM';

  if (isDayjs(value)) {
    return `${value.format('YYYY-MM-DD')} , ${hour}`;
  }
};

export const dateBasedOn24H = value => {
  let now = new Date();
  const elapsedMSec = now.getTime() - value.getTime();
  const elapsedHour = elapsedMSec / 1000 / 60 / 60;
  if (elapsedMSec > 86400000) {
    return dateWithOnlyHour(dayjs(value));
  } else if (elapsedMSec >= 3600000 && elapsedMSec < 86400000) {
    return `${Math.floor(elapsedHour)} hr ago`;
  } else if (elapsedMSec < 3600000 && elapsedMSec >= 60000) {
    const elpasedMinute = elapsedMSec / 1000 / 60;
    return `${Math.floor(elpasedMinute)}  min ago`;
  } else if (elapsedMSec < 60000) {
    return '방금 전';
  }
};

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//last sunday ~ this saturday
export const getWeekDaysOfMonth = () => {
  let lastSunDay = dayjs().day(-0).$D;
  return Array.from({ length: 7 }, (_, index) => {
    return { day: lastSunDay++, name: WEEK_DAYS[index] };
  });
};

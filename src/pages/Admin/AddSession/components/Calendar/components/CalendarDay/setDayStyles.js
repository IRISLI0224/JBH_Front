import calendarColor from '../../../../../../../common/calendarColors';

const notCurrMonth = (day, value) =>
  day.isBefore(value.clone().startOf('month'), 'day') ||
  day.isAfter(value.clone().endOf('month'), 'day');
const isToday = (day) => day.isSame(new Date(), 'day');
const dayStyles = (day, value, monthlySessions) => {
  const bgColor = notCurrMonth(day, value)
    ? '#fff'
    : calendarColor[monthlySessions[day.format('D') * 1 - 1]];
  const numColor = notCurrMonth(day, value) ? '#fff' : isToday(day) ? '#0F5A3A' : '#000';
  return { bgColor, numColor };
};

export default dayStyles;

import calendarColor from '../../../../../../../common/calendarColors';

const notCurrMonth = (day, value) =>
  day.isBefore(value.clone().startOf('month'), 'day') ||
  day.isAfter(value.clone().endOf('month'), 'day');
const isToday = (day) => day.isSame(new Date(), 'day');
const dayStyles = (day, value, monthlySessions) => {
  // eslint-disable-next-line no-nested-ternary
  const bgColor = notCurrMonth(day, value)
    ? '#fff'
    : calendarColor[monthlySessions[day.format('D') * 1 - 1]];
    let numColor = notCurrMonth(day, value) ? '#fff' : '#0F5A3A';
    numColor = isToday(day) ? '#0F5A3A' : '#000';
  return { bgColor, numColor };
};

export default dayStyles;

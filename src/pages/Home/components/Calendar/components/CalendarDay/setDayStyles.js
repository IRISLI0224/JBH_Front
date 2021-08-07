const colors = {
  closed: '#D2E0E5',
  available: '#8097B9',
  limited: '#7A95A1',
  fullyBooked: '#3894C5',
};

const notCurrMonth = (day, value) =>
  day.isBefore(value.clone().startOf('month'), 'day') ||
  day.isAfter(value.clone().endOf('month'), 'day');
const isToday = (day) => day.isSame(new Date(), 'day');
const beforeToday = (day) => day.isBefore(new Date(), 'day');

const dayStyles = (day, value, monthlySessions) => {
  // eslint-disable-next-line no-nested-ternary
  const bgColor = notCurrMonth(day, value)
    ? '#fff'
    : beforeToday(day)
    ? '#D2E0E5'
    : colors[monthlySessions[day.format('D') * 1 - 1]];
  const numColor = notCurrMonth(day, value) ? '#fff' : isToday(day) ? '#0F5A3A' : '#000';//eslint-disable-line
  return { bgColor, numColor };
};

export default dayStyles;

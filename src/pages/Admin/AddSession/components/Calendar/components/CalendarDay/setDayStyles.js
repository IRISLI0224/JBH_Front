const colors = {
  closed: '#DCE9EF',
  available: '#127785',
  limited: '#AFAAC2',
  fullyBooked: '#77AFCF',
};

const notCurrMonth = (day, value) =>
  day.isBefore(value.clone().startOf('month'), 'day') || day.isAfter(value.clone().endOf('month'), 'day');
const isToday = (day) => day.isSame(new Date(), 'day');
const beforeToday = (day) => day.isBefore(new Date(), 'day');

const dayStyles = (day, value, monthlySessions) => {
  // eslint-disable-next-line no-nested-ternary
  const bgColor = notCurrMonth(day, value)
    ? '#fff'
    : beforeToday(day)
    ? '#F0F8FF'
    : colors[monthlySessions[day.format('D') * 1 - 1]];
  const numColor = notCurrMonth(day, value) || isToday(day) ? '#181b50' : '#000';
  // 根据三个日期判断条件和session状态array，返回背景色和日期色供日历使用
  return { bgColor, numColor };
};

export default dayStyles;

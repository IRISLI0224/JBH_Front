const colors = {
  false: '#F0F8FF',
  true: '#6495ED',
};

const notCurrMonth = (day, value) => day.isBefore(value.clone().startOf('month'), 'day')
  || day.isAfter(value.clone().endOf('month'), 'day');

const dayStyles = (day, value, monthlySessions) => {
  const bgColor = notCurrMonth(day, value)
    ? '#fff'
    : colors[monthlySessions[day.format('D') * 1 - 1]];
  const numColor = notCurrMonth(day, value) ? '#fff' : '#000';

  return { bgColor, numColor };
};

export default dayStyles;

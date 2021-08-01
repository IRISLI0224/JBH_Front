// 定义session四种状态的背景色
const colors = {
  false: '#F0F8FF',
  true: '#6495ED',
};

// 定义“非本月日子但显示在本月五周范围内的”、“当天”、“过去”三个判断函数
const notCurrMonth = (day, value) => day.isBefore(value.clone().startOf('month'), 'day')
  || day.isAfter(value.clone().endOf('month'), 'day');
const isToday = (day) => day.isSame(new Date(), 'day');
// const beforeToday = (day) => day.isBefore(new Date(), 'day');

const dayStyles = (day, value, monthlySessions) => {
  // eslint-disable-next-line no-nested-ternary
  const bgColor = notCurrMonth(day, value)
    ? '#fff'
    : colors[monthlySessions[day.format('D') * 1 - 1]];

  console.log(bgColor);
  const numColor = notCurrMonth(day, value) || isToday(day) ? '#fff' : '#000';
  // 根据三个日期判断条件和session状态array，返回背景色和日期色供日历使用
  return { bgColor, numColor };
};

export default dayStyles;

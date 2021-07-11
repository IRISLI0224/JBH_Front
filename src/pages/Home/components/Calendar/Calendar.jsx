import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import buildCalendar from './buildCalendar';
import setDayStyles from './setDayStyles';
// 获得固定的假数据
import getSessionData from './fakeData';

const Container = styled.div`
  margin: 0 auto;
  width: 48rem;
  border-top: solid 1px #c7c7c7;
  border-left: solid 1px #c7c7c7;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  border-right: solid 1px #c7c7c7;
  color: #181b50;
  font: bold 2.2rem 'Baloo';
`;

const CalendarButton = styled.button`
  margin: 0 6rem;
  border: none;
  background-color: #fff;
  font: 2rem 'Baloo';
  &:hover {
    cursor: pointer;
  }
`;

const CalendarWeekday = styled.span`
  display: inline-block;
  width: calc(100% / 7);
  height: 2.4rem;
  border-top: solid 1px #c7c7c7;
  border-bottom: solid 1px #c7c7c7;
  border-right: solid 1px #c7c7c7;
  font: bold 0.9rem 'Roboto';
  line-height: 2.4rem;
`;

const CalendarDay = styled.span`
  display: inline-block;
  width: calc(100% / 7);
  height: 5rem;
  padding: 0.2rem 0.5rem;
  border-bottom: solid 1px #c7c7c7;
  border-right: solid 1px #c7c7c7;
  background-color: ${({ colorStyles }) => colorStyles.bgColor};
  color: ${({ colorStyles }) => colorStyles.numColor};
  font: bold 1.2rem 'RobotoMono';
  text-align: left;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment(),
      calendar: [],
      monthlySessions: [],
    };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.setMonthlySessions = this.setMonthlySessions.bind(this);
  }

  componentDidMount() {
    const { value } = this.state;
    this.setState({
      calendar: buildCalendar(value),
      monthlySessions: this.setMonthlySessions(value),
    });
  }

  handleLeftClick() {
    const { value } = this.state;
    const preMonth = value.clone().subtract(1, 'month');
    const preCalendar = buildCalendar(preMonth);
    this.setState({
      value: preMonth,
      calendar: preCalendar,
      monthlySessions: this.setMonthlySessions(preMonth),
    });
  }

  handleRightClick() {
    const { value } = this.state;
    const nextMonth = value.clone().add(1, 'month');
    const nextCalendar = buildCalendar(nextMonth);
    this.setState({
      value: nextMonth,
      calendar: nextCalendar,
      monthlySessions: this.setMonthlySessions(nextMonth),
    });
  }

  setMonthlySessions(monthValue) {
    const { monthlySessions } = this.state;
    const { stateArr } = getSessionData(monthValue.format('M'));
    monthlySessions.push(...stateArr);
    return monthlySessions;
  }

  render() {
    const { calendar, value, monthlySessions } = this.state;
    return (
      <Container>
        <CalendarHeader>
          <CalendarButton onClick={this.handleLeftClick}>{'<'}</CalendarButton>
          {value.clone().format('MMMM YYYY')}
          <CalendarButton onClick={this.handleRightClick}>{'>'}</CalendarButton>
        </CalendarHeader>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((weekday) => (
          <CalendarWeekday>{weekday}</CalendarWeekday>
        ))}
        {calendar.map((week) => week.map((day) => (
          <CalendarDay
            colorStyles={setDayStyles(day, value, monthlySessions)}
          >
            {day.format('D').toString()}
          </CalendarDay>
        )))}
      </Container>
    );
  }
}

export default Calendar;

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import CalendarDay from './components/CalendarDay';
import buildCalendar from './buildCalendar';
import getSessionData from '../../../../../apis/getSessionData';

const Container = styled.div`
  margin: 0 auto;
  width: 40rem;
  border-top: solid 1px #c7c7c7;
  border-left: solid 1px #c7c7c7;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  border-right: solid 1px #c7c7c7;
  color: #181b50;
  font: bold 1.5rem 'Baloo';
  font-family: 'Poppins';
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
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment(),
      calendar: [],
      monthlySessions: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.setMonthlySessions = this.setMonthlySessions.bind(this);
  }

  componentDidMount() {
    const { value } = this.state;
    this.setMonthlySessions(value);
    this.setState({
      calendar: buildCalendar(value),
    });
  }

  async handleClick(direction) {
    const { value } = this.state;
    const preOrNextMonth = direction === 'left' ? value.clone().subtract(1, 'month') : value.clone().add(1, 'month');
    const preOrNextCalendar = buildCalendar(preOrNextMonth);
    await this.setMonthlySessions(preOrNextMonth);
    this.setState({
      value: preOrNextMonth,
      calendar: preOrNextCalendar,
    });
  }

  async setMonthlySessions(monthValue) {
    const { stateArr } = await getSessionData(monthValue);
    this.setState({ monthlySessions: stateArr });
  }

  render() {
    const { calendar, value, monthlySessions } = this.state;
    return (
      <Container>
        <CalendarHeader>
          <CalendarButton
            onClick={() => {
              this.handleClick('left');
            }}
          >
            {'<'}
          </CalendarButton>
          {value.clone().format('MMMM YYYY')}
          <CalendarButton
            onClick={() => {
              this.handleClick('right');
            }}
          >
            {'>'}
          </CalendarButton>
        </CalendarHeader>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((weekday) => (
          <CalendarWeekday key={weekday}>{weekday}</CalendarWeekday>
        ))}
        {calendar.map((week) =>
          week.map((day) => <CalendarDay key={day} day={day} value={value} monthlySessions={monthlySessions} />),
        )}
      </Container>
    );
  }
}

export default Calendar;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

import setDayStyles from './setDayStyles';

const DayItem = styled.span`
  display: inline-block;
  width: calc(100% / 7);
  height: 3rem;
  padding: 0.2rem 0.5rem;
  border-bottom: solid 1px #c7c7c7;
  border-right: solid 1px #c7c7c7;
  background-color: ${({ colorStyles }) => colorStyles.bgColor};
  color: ${({ colorStyles }) => colorStyles.numColor};
  font: bold 1rem 'Roboto';
  cursor: pointer;
  text-align: left;
  ${({ colorStyles }) => (colorStyles.bgColor === '#bcff2e' || colorStyles.bgColor === '#ffab2e'
    ? '&:hover {cursor: pointer;}'
    : '')}
`;

const CalendarDay = ({
  day, value, monthlySessions, getBookings,
}) => {
  const colorStyles = setDayStyles(day, value, monthlySessions, (new Date(), 'day'));
  // console.log("in calendarday",monthlySessions)
  const handleDayClick = (date) => {
    getBookings(date.format('YYYY-MM-DD').toString());
  };

  return (
    <DayItem
      colorStyles={colorStyles}
      onClick={() => {
        handleDayClick(day, colorStyles);
      }}
    >
      {day.format('D').toString()}
    </DayItem>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.instanceOf(moment).isRequired,
  value: PropTypes.instanceOf(moment).isRequired,
  monthlySessions: PropTypes.object.isRequired,//eslint-disable-line
  getBookings: PropTypes.func.isRequired,
};

export default withRouter(CalendarDay);

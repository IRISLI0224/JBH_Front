import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0.6rem;
  font-family: 'Roboto';
`;

const BookingDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.3rem;
`;

const Day = styled.div`
  font-size: 2.3rem;
  margin-right: 1rem;
`;

const Month = styled.div`
  font-size: 1rem;
  margin: -0.4rem 1rem 0 0;
  color: #3f51b5;
`;

const BookingContent = styled.div``;

const BookingMessage = styled.div`
  font-size: 0.88rem;
`;

const BookingDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  color: #838383;
  margin-top: 0.5rem;
`;

const BookingId = styled.span``;
const BookingType = styled.span``;
const GuestAmount = styled.span``;

const BookingInfo = ({ date, id, guestAmount }) => {
  const day = date.split('-')[2].substring(0, 2);
  const monthIndex = parseInt(date.split('-')[1], 10);
  const monthTable = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUNE',
    'JULY',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC',
  ];
  const month = monthTable[monthIndex - 1];

  return (
    <Container>
      <BookingDate>
        <Day>{day}</Day>
        <Month>{month}</Month>
      </BookingDate>
      <BookingContent>
        <BookingMessage>Your booking with Japanese Bath House</BookingMessage>
        <BookingDetails>
          <BookingId>{id}</BookingId>
          <BookingType>All Day Pass</BookingType>
          <GuestAmount>
            {guestAmount} {guestAmount === 1 ? 'Guest' : 'Guests'}
          </GuestAmount>
        </BookingDetails>
      </BookingContent>
    </Container>
  );
};

BookingInfo.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  guestAmount: PropTypes.oneOfType([
    PropTypes.PropTypes.string.isRequired,
    PropTypes.PropTypes.number.isRequired,
    PropTypes.oneOf([undefined]).isRequired,
  ]).isRequired,
};

export default BookingInfo;

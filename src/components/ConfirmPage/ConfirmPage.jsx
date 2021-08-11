import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import BookingInfo from '../BookingInfo';

const Container = styled.div`
  text-align: center;
  width: 380px;
  margin: 0 auto;
  font-family: 'Roboto';
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin: 24px 0;
`;

const ConfirmedMessage = styled.div`
  font-size: 14px;
  margin-bottom: 30px;
  line-height: 1.5rem;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c7c7c7;
`;

const ConfirmPage = ({
  formData: { firstName, email, bookingDate, bookingNum, numOfGuests },
  title,
}) => (
  <Container>
    <FontAwesomeIcon color="#181b50" size="4x" icon={faCheckCircle} />
    <Title>{title}</Title>
    <ConfirmedMessage>
      Thank you {firstName}
      , we&apos;re looking forward to see you soon!
      <br />
      Confirmation email send to &nbsp;
      <a href={email}>{email}</a>
    </ConfirmedMessage>
    <Line />
    <BookingInfo date={bookingDate} id={bookingNum} guestAmount={numOfGuests} />
    <Line />
  </Container>
);

ConfirmPage.propTypes = {
  title: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,//eslint-disable-line
};

export default ConfirmPage;

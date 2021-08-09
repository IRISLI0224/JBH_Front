import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import BookingInfoEdit from '../../../components/BookingInfoEdit';

const BookingCard = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 580px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
`;

const BookingTitle = styled.div`
  text-align: center;
  margin-top: 50px;
  font-family: Baloo;
  font-size: 36px;
  line-height: 57px;
  text-align: center;
  color: #171a4f;
`;

const UpcomingTitle = styled.div`
  width: 82px;
  height: 21px;
  left: 510px;
  top: 362px;
  margin-top: 20px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;
  margin-left: 20px;
`;

const Vector1 = styled.div`
  margin-top: 10px;
  width: 120px;
  height: 0px;
  color: #181b50;
  border: 1px solid #181b50;
`;

const Vector2 = styled.div`
  left: 510px;
  width: 580px;
  height: 0px;
  border: 1px solid #c7c7c7;
`;

const BookingExplain = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
`;

const BackToAvailability = styled.button`
  border: none;
  background: none;
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  letter-spacing: 0.46px;
  color: #818181;
  margin: 4rem 0 2rem 0;
  cursor: pointer;
  &:hover {
    color: #181b50;
  }
`;

const ViewBooking = ({ BookingDetails, handleNextStep, ready, handleFormData, today }) => (
  <>
    <BookingCard>
      <BookingTitle>My Booking </BookingTitle>
      <BookingExplain>You can check your booking status here and edit or cancel it</BookingExplain>
      <UpcomingTitle>Upcoming</UpcomingTitle>
      <Vector1 />
      <Vector2 />
      {BookingDetails.length !== 0 &&
        BookingDetails.map(
          (bookings) =>
            moment(bookings.bookingDate).format('YYYY-MM-DD') >= today && (
              <BookingInfoEdit
                key={bookings.bookingNum}
                date={ready ? moment(bookings.bookingDate).format('YYYY-MM-DD') : ''}
                id={ready ? bookings.bookingNum : '0'}
                guestAmount={ready ? bookings.numOfGuests : 0}
                formData={ready ? Array(bookings) : []}
                handleNextStep={handleNextStep}
                handleFormData={handleFormData}
              />
            ),
        )}

      <Link to="/">
        <BackToAvailability>BACK TO AVAILABILITY</BackToAvailability>
      </Link>
    </BookingCard>
  </>
);

ViewBooking.propTypes = {
  BookingDetails: PropTypes.arrayOf(PropTypes.object),
  handleNextStep: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  ready: PropTypes.bool,
  today: PropTypes.string,
};

ViewBooking.defaultProps = {
  BookingDetails: [],
  ready: false,
  today: '',
};
export default ViewBooking;

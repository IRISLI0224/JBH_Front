// First page of Mybooking part, get all booking data and transform to next page
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import BookingInfowithButton from '../../../components/BookingInfowithButton';

const BookingCard = styled.div`
text-align: center;
margin: 0 auto;
width: 580px;
height: 674px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
border-radius: 50px;`;

const BookingTitle = styled.div`
text-align: center;
margin-top:50px;
font-family: Baloo;
font-size: 36px;
line-height: 57px;
/* identical to box height */

text-align: center;

color: #171A4F;
`;

const UpcomingTitle = styled.div`
width: 82px;
height: 21px;
left: 510px;
top: 362px;
margin-top:20px;
font-family: Roboto;
font-size: 18px;
line-height: 21px;
margin-left:20px;
`;

const Vector1 = styled.div`
margin-top:10px;
width: 120px;
height: 0px;
color: #181B50;
border: 1px solid #181B50;
`;

const Vector2 = styled.div`
left: 510px;
width: 580px;
height: 0px;
border: 1px solid #C7C7C7;
`;

const BookingExplain = styled.div`
text-align: center;
margin-bottom: 1rem;
font-family: Roboto;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #000000;`;

const BacktoAvailability = styled.div`
text-align: center;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
/* identical to box height, or 162% */
letter-spacing: 0.46px;
text-transform: uppercase;
Margin-top: 250px;
color: #818181;
margin-top:150px`;

const ViewBooking = ({
  BookingDetails, handleNextStep, ready, handleFormData, today,
}) => (
  <>
    <BookingCard>
      <BookingTitle>My Booking </BookingTitle>
      <BookingExplain>
        You can check your booking status here and edit or cancel it
      </BookingExplain>
      <UpcomingTitle>Upcoming</UpcomingTitle>
      <Vector1 />
      <Vector2 />
      {/* {console.log(ready)} */}
      {BookingDetails.length !== 0 && (
        BookingDetails.map((bookings) => (
          (moment)(bookings.bookingDate).format('YYYY-MM-DD') >= today && (
          <BookingInfowithButton
            date={ready ? (moment)(bookings.bookingDate).format('YYYY-MM-DD') : ''}
            id={ready ? bookings.bookingNum : '0'}
            guestAmount={ready ? bookings.numOfGuests : 0}
            formData={ready ? bookings : []}
            handleNextStep={handleNextStep}
            handleFormData={handleFormData}
          />
          )
        ))
      )}
      <BacktoAvailability>
        <Link to="/" style={{ textDecoration: 'none', color: '#818181' }}>
          back to Availability
        </Link>
      </BacktoAvailability>

    </BookingCard>
  </>
);

ViewBooking.propTypes = {
  // 下两条type验证有问题
  BookingDetails: PropTypes.arrayOf(PropTypes.array),
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

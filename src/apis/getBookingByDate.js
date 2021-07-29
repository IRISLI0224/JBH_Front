import { get } from './axios';

const API_GET_BOOKING_BY_DATE_URL = '/bookings/bookingdate/';

const getBookingByDate = (bookingDate) => get(API_GET_BOOKING_BY_DATE_URL + bookingDate)
  .then((res) => res.data);

export default getBookingByDate;

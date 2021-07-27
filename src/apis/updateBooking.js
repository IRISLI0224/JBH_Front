import { put } from './axios';

const API_UPDATE_BOOKING_DETAIL = '/bookings/bookingnum/';

function updateBooking(updateData, bookingNum) {
  return put(API_UPDATE_BOOKING_DETAIL + bookingNum, updateData)
    .then((response) => response.status)
    .catch((error) => error.response.data);
}
export default updateBooking;

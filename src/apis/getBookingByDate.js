import { get } from './axios';

const API_GET_BOOKING_BY_DATE = '/bookings/bookingdate/';

export const getBookingByDate = (date) => {
  const data = {
  };
  try {
    const response = get(API_GET_BOOKING_BY_DATE + date, data).then((res) => res.data);
    return response;
  } catch (error) {
    return ('No booking that day.');
  }
};

export default getBookingByDate;

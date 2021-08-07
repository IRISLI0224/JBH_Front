import { get } from './axios';

const API_GET_BOOKING_BY_MONTH = '/bookings/monthly/';

export const getBookingByMonth = (month) => {
  const data = {};
  return get(API_GET_BOOKING_BY_MONTH + month, data).then((res) => res.data);
};

export default getBookingByMonth;

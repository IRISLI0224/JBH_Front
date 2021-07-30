import { get } from './axios';

const API_GET_BOOKING_BY_DATE = '/bookings/bookingdate/';

export const getBookingByDate = async (date) => {
  const data = {
  };
  try {
    const response = await get(API_GET_BOOKING_BY_DATE + date, data).then((res) => res.data);
    if (response.status !== 404) return response;
    return 0;
  } catch (error) {
    return ('No booking that day.');
  }
};

export default getBookingByDate;

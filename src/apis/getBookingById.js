import { get } from './axios';

const API_GET_USER_BY_ID_URL = '/bookings/id/';

export const getBookingById = (id) => {
  const data = {};
  return get(API_GET_USER_BY_ID_URL + id, data).then((res) => res.data);
};

export default getBookingById;

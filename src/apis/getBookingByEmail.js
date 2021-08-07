import { get } from './axios';

const API_GET_USER_BY_EMAIL_URL = '/bookings/email/';

export const getUserByEmail = (email) => {
  const data = {};
  return get(API_GET_USER_BY_EMAIL_URL + email, data).then((res) => res.data);
};

export default getUserByEmail;

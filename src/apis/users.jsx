import { get } from './axios';

const API_GET_USER_BY_PHONE_URL = '/users/';

export const getUserByPhone = (phoneNumber) => {
  const data = {
  };
  return get(API_GET_USER_BY_PHONE_URL + phoneNumber, data).then((res) => res.data);
};

export default getUserByPhone;

import axios from 'axios';
import {get} from './axios'

const UsersURL = 'http://localhost:3333/users/';
const API_GET_USER_BY_PHONE_URL = '/users';

export const getUserByPhone = async (phone) => {
  try {
    const response = await get(API_GET_USER_BY_PHONE_URL, phone);
    return (response);
  } catch (err) {
    console.log(err);//eslint-disable-line
  }
  return ('');
};

export default getUserByPhone;

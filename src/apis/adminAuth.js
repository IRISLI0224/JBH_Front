import { post } from './axios';

const API_ADMIN_LOGIN_URL = 'admin/login';

export const loginAdmin = (email, password) => {
  const data = {
    email,
    password,
  };
  return post(API_ADMIN_LOGIN_URL, data).then((res) => res.data);
};

export default loginAdmin;

import axios from 'axios';
import { getToken } from '../utils/authentication';

axios.defaults.baseURL = `${process.env.BASE_URL}/api`;

const appendAuthToken = (config) => {
  const jwtToken = getToken();
  const Authorization = jwtToken && `Bearer ${jwtToken}`;
  return { ...config, headers: { Authorization, ...config.header } };
};

export const post = (url, data, config = {}) => axios.post(url, data, appendAuthToken(config));

export const put = (url, data, config = {}) => axios.put(url, data, appendAuthToken(config));

export const get = (url, config = {}) => axios.get(url, appendAuthToken(config));

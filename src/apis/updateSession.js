import { put } from './axios';

const API_UPDATE_SESSION = '/sessions';

export const updateSession = (date, maxNumber, time) => {
  const data = {
    maxNumber,
  };
  return put(`${API_UPDATE_SESSION}/${date}/${time}`, data).then((res) => res.data);
};

export default updateSession;

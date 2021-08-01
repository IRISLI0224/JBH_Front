import { post } from './axios';

const API_ADD_SESSION = '/sessions';

export const addSession = (date, maxNumber, time) => {
  const data = {
    date,
    time,
    maxNumber,
  };
  return post(API_ADD_SESSION, data).then((res) => res.data);
};

export default addSession;

import { get } from './axios';

const API_GET_SESSION_BY_DATE = '/sessions/single/';

export const getSessionByDate = async (date, time) => {
  const data = {};
  try {
    const response = await get(`${API_GET_SESSION_BY_DATE + date}/${time}`, data).then(
      (res) => res.data,
    );
    if (response.status !== 404) return response;
    return 0;
  } catch (error) {
    return 'No session that day.';
  }
};

export default getSessionByDate;

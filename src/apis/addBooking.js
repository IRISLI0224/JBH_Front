import axios from 'axios';

const addBooking = async (bookingInfo) => {
  const json = JSON.stringify(bookingInfo);
  return axios.post(`${process.env.BASE_URL}/api/bookings`, json, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
  });
};

export default addBooking;

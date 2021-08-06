import axios from 'axios';

const addBooking = async (bookingInfo) => {
  const json = JSON.stringify(bookingInfo);
  return axios.post(`${process.env.BASE_URL}/api/bookings`, json, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default addBooking;

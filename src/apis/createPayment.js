import axios from 'axios';

const createPayment = async (paymentInfo) => {
  const json = JSON.stringify(paymentInfo);
  return axios.post('http://localhost:3000/api/payment', json, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
  });
};

export default createPayment;

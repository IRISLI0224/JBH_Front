import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import ConfirmPage from '../../../components/ConfirmPage';

const Confirm = ({ formData }) => (Object.keys(formData).length > 0 ? (
  <ConfirmPage title="Booking Confirmed" />
) : (
  <Loading />
));

// 加个按钮。如果付款成功，点击按钮发送formDAta给后端

Confirm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    mobile: PropTypes.number,
    booking: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
export default Confirm;

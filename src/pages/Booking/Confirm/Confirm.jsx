import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import ConfirmPage from '../../../components/ConfirmPage';

const Confirm = ({ formData }) =>
  Object.keys(formData).length > 0 ? (
    <ConfirmPage formData={formData} title="Booking Confirmed" />
  ) : (
    <Loading />
  );

Confirm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    mobile: PropTypes.number,
    booking: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
export default Confirm;

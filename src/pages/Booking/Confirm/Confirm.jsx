import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import ConfirmPage from '../../../components/ConfirmPage';
import ButtonContinue from '../../../components/ButtonContinue';

const Confirm = ({ formData }) => (
  <>
    {Object.keys(formData).length > 0 ? (
      <ConfirmPage formData={formData} title="Booking Confirmed" />
    ) : (
      <Loading />
    )}
    <Link to="/">
      <ButtonContinue>BACK TO HOME</ButtonContinue>
    </Link>
  </>
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

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BookingInfo from '../BookingInfo';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0.6rem;
  padding-right: 1.5rem;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14),
    0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 500px;
  margin-left: 50px;
  margin-top: 1rem;
`;

const EditButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.2rem;
  background: #181b50;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14),
    0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  font-family: Roboto;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0.46px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
  cursor: pointer;
`;

//= =================== BOOKINGINFO COMPONENT ====================
const BookingInfoEdit = ({ date, id, guestAmount, handleNextStep, handleFormData, formData }) => {
  const handleClick = () => {
    handleFormData(formData);
    handleNextStep();
  };
  return (
    <Container>
      <BookingInfo date={date} id={id} guestAmount={guestAmount} />
      <EditButton onClick={handleClick}>EDIT</EditButton>
    </Container>
  );
};

BookingInfoEdit.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  guestAmount: PropTypes.number.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  formData: PropTypes.arrayOf(PropTypes.object),
};

BookingInfoEdit.defaultProps = {
  formData: [],
};
export default BookingInfoEdit;

// Third page of Mybooking part, Confirm edit of booking
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ConfirmPage from '../../../components/ConfirmPage';

const Container = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 5rem 12rem;
  margin: 0 auto;
  border-radius: 20px;
`;

const Button = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  letter-spacing: 0.46px;
  margin: 5rem 0 1rem 0;
  color: #818181;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

class ConfirmEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.DataUpdata = this.DataUpdata.bind(this);
  }

  DataUpdata() {
    const { updateData, handleNextStep } = this.props;
    updateData();
    handleNextStep();
  }

  render() {
    const { formData } = this.props;

    return (
      <Container>
        <ConfirmPage formData={formData} title="Booking changes submitted" />
        <Button size="md" onClick={this.DataUpdata}>
          {'<'}
          {' '}
          My Bookings
        </Button>
      </Container>
    );
  }
}

ConfirmEdit.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
  formData: PropTypes.object,//eslint-disable-line
  updateData: PropTypes.func.isRequired,
};

export default ConfirmEdit;

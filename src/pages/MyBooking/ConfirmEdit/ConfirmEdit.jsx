import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ConfirmPage from '../../../components/ConfirmPage';
import ButtonContinue from '../../../components/ButtonContinue';

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

class ConfirmEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.DataUpdate = this.DataUpdate.bind(this);
  }

  DataUpdate() {
    const { updateData, handleNextStep } = this.props;
    updateData();
    handleNextStep();
  }

  render() {
    const { formData } = this.props;

    return (
      <Container>
        <ConfirmPage formData={formData} title="Booking changes submitted" />
        <ButtonContinue size="md" onClick={this.DataUpdate}>
          MY BOOKINGS
        </ButtonContinue>
      </Container>
    );
  }
}

ConfirmEdit.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  formData: PropTypes.oneOfType([
    PropTypes.objectOf.isRequired,
    PropTypes.oneOf([undefined]).isRequired,
  ]).isRequired,
};

export default ConfirmEdit;

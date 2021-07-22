// Third page of Mybooking part, Confirm edit of booking
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ConfirmPage from '../../../components/ConfirmPage';
import GoBack from '../../../components/ButtonGoBack';

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
  }

  render() {
    const { formData } = this.props;
    const { handleNextStep } = this.props;
    return (
      <Container>
        <ConfirmPage formData={formData[0]} title="Booking changes submitted" />
        <GoBack size="md" onClick={handleNextStep}>
          {'<'}
          {' '}
          My Bookings
        </GoBack>
      </Container>
    );
  }
}

ConfirmEdit.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
  formData: PropTypes.arrayOf(PropTypes.string),
};

ConfirmEdit.defaultProps = {
  formData: [],
};
export default ConfirmEdit;

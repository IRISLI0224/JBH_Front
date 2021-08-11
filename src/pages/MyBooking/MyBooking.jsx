/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import EditBooking from './EditBooking';
import ConfirmEdit from './ConfirmEdit';
import ViewBooking from './ViewBooking';
import { getUserByEmail } from '../../apis/getBookingByEmail';

class MyBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      formData: [],
      ready: false,
      allData: [],
      email: '',
      today: '',
    };
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleFormData = this.handleFormData.bind(this);
    this.getBookingDetails = this.getBookingDetails.bind(this);
    const history = this.props;
    this.state.email = history.location.email;
    this.getBookingDetails();
    const myDate = new Date();
    const currentDate = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;
    this.state.today = moment(currentDate).format('YYYY-MM-DD');
  }

  handleFormData(formData) {
    this.setState({
      formData,
    });
  }

  handleNextStep() {
    const { step } = this.state;
    if (step < 3) this.setState({ step: step + 1 });
    if (step === 3) this.setState({ step: 1 });
  }

  async getBookingDetails() {
    const { email } = this.state;
    this.setState({
      allData: await getUserByEmail(email),
      ready: true,
    });
  }

  render() {
    const { step, formData, ready, allData, today } = this.state;
    return (
      <>
        {step === 1 && ready === true && typeof allData !== 'undefined' && (
          <ViewBooking
            BookingDetails={allData}
            handleNextStep={this.handleNextStep}
            handleFormData={this.handleFormData}
            ready={ready}
            formData={formData}
            today={today}
          />
        )}
        {step === 2 && (
          <EditBooking
            handleNextStep={this.handleNextStep}
            handleFormData={this.handleFormData}
            formData={formData}
          />
        )}
        {step === 3 && (
          <ConfirmEdit
            formData={formData}
            handleNextStep={this.handleNextStep}
            updateData={this.getBookingDetails}
          />
        )}
      </>
    );
  }
}

MyBooking.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.objectOf.isRequired,
    PropTypes.oneOf([undefined]).isRequired,
  ]).isRequired,
};
export default MyBooking;

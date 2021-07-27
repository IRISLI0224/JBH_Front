// main page of Mybooking part, dealing with links between pages
import React from 'react';
import moment from 'moment';
import EditBooking from './EditBooking';
import ConfirmEdit from './ConfirmEdit';
import ViewBooking from './ViewBooking';
import { getUserByPhone } from '../../apis/users';

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
    this.state.email = history.location.email; //eslint-disable-line
    this.getBookingDetails();
    const myDate = new Date();
    const currentdate = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;
    this.state.today = (moment)(currentdate).format('YYYY-MM-DD');
    // console.log(this.props.location.email)
  }

  handleFormData(formData) {
    this.setState({
      formData,
    });
  }

  handleNextStep() {
    const { step } = this.state;
    // console.log(step);
    if (step < 3) this.setState({ step: step + 1 });
    if (step === 3) this.setState({ step: 1 });
  }

  async getBookingDetails() {
    const { email } = this.state;
    this.setState({
      allData: await getUserByPhone(email),
      ready: true,
    });
  }

  render() {
    const {
      step, formData, ready, allData, today,
    } = this.state;
    // console.log(ready ? allData.bookings : 'not ready');
    // console.log(ready +" "+typeof(formData));
    return (
      <>
        {step === 1 && ready === true && typeof (allData) !== 'undefined' && (
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
        {step === 3
        && (
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

export default MyBooking;

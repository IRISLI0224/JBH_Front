// main page of Mybooking part, dealing with links between pages
import React from 'react';
import EditBooking from './EditBooking';
import ConfirmEdit from './ConfirmEdit';
import ViewBooking from './ViewBooking';
import { getUserByPhone } from '../../apis/users';
// import { getBookingbyId } from '../../apis/bookings';

class MyBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      formData: [],
      BookingDetails: [],
      ready: false,
      allData: [],
      phoneNumber: '1234678901',
    };
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleFormData = this.handleFormData.bind(this);
    this.getBookingDetails();
  }

  handleFormData(formData) {
    // const { BookingDetails } = this.state;

    this.setState({
      formData,
    });
    // console.log(this.state.formData);
  }

  handleNextStep() {
    const { step } = this.state;
    console.log(step);
    if (step < 3) this.setState({ step: step + 1 });
    if (step === 3) this.setState({ step: 1 });
  }

  async getBookingDetails() {
    const { phoneNumber } = this.state;
    this.setState({
      allData: await getUserByPhone(phoneNumber),
    });
    // console.log(this.state.allData.bookings)

    // const Details = [];
    // const { BookingList } = this.state;
    // for (var i = 0; i < BookingList.length; i++) {
    //   Details[i] = await getBookingbyId(BookingList[i]);
    // }
    // BookingList.map(async (ID) => {
    //   Details[ID] = await getBookingbyId(ID);
    //   console.log(Details[ID])
    // });
    // let i = 0;
    // while (i < BookingList.length) {
    //   Details[i] = await getBookingbyId(BookingList[i]);
    //   i += 1;
    // }

    // Details[0] = await getBookingbyId(BookingList[0]);
    // const a = Details[0];
    // for (let i = 0; i < BookingList.length; i += 1) {
    //   Details[i] = a;
    // }
    this.setState({
      // BookingDetails: Details,
      ready: true,
    });

    // this.state.BookingDetails = Details;
  }

  render() {
    const {
      step, formData, BookingDetails, ready, allData,
    } = this.state;
    // {console.log(ready?allData.bookings:'not ready')}
    return (
      <>
        {step === 1 && ready === true && (
          <ViewBooking
            // date={date}
            BookingDetails={allData.bookings}
            handleNextStep={this.handleNextStep}
            handleFormData={this.handleFormData}
            ready={ready}
            formData={formData}
          />
        )}
        {step === 2 && (
          <EditBooking
            BookingDetails={BookingDetails}
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
        />
        )}
      </>
    );
  }
}

export default MyBooking;

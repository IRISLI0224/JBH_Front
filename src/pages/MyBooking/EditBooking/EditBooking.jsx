// Second page of Mybooking part, edit data of chosen booking
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import Input from '../../../components/Input';
import FormItem from '../../../components/FormItem';
import InputErrorMsg from '../../../components/InputErrorMsg';
import validate from '../../Booking/Form/validate';
import ButtonContinue from '../../../components/ButtonContinue';
import FormTitle from '../../../components/FormTitle';
import FormSubTitle from '../../../components/FormSubTitle';
import FormWrapper from '../../../components/FormWrapper';
import FlexRow from '../../../components/FlexRow';
import ServerMsg from '../../../components/ServerMsg';

const Container = styled.div`
  display: inline-block;
  background-color: white;
  border-radius: 20px;
  padding: 3rem 12rem;
  margin: 0 auto;
`;

const initialData = (data) => ({
  value: data,
  blurred: false,
});

class EditBooking extends React.Component {
  constructor(props) {
    super(props);

    const { formData } = this.props;
    const {
      bookingDate, numOfGuests, firstName, lastName, emailAddress, phoneNumber,
    } = formData;

    this.state = {
      data: {
        bookingDate: initialData((moment)(bookingDate).format('YYYY-MM-DD')),
        numOfGuests: initialData(numOfGuests),
        firstName: initialData(firstName),
        lastName: initialData(lastName),
        emailAddress: initialData(emailAddress),
        phoneNumber: initialData(phoneNumber),
      },
      isFormSubmit: false,
      isSubmitFail: false,
      submitError: '',
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
    this.getSubmitError = this.getSubmitError.bind(this);
  }

  handleDataChange(event) {
    const { name, value } = event.target;

    this.setData(name, {
      value,
    });
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  handleBlurredChange(event) {
    const { name } = event.target;

    this.setData(name, {
      blurred: true,
    });
  }

  setData(name, newData) {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          ...newData,
        },
      },
    }));
  }

  getErrorMessage(error, name) {
    const { data, isFormSubmit } = this.state;
    const showInputError = data[name].blurred;
    return (showInputError || isFormSubmit) && error[name];
  }

  getError() {
    const { data } = this.state;
    const error = {};
    Object.keys(data).forEach((name) => {
      const errorOfName = validate(name, data);
      if (!errorOfName) {
        return;
      }
      error[name] = errorOfName;
    });
    return error;
  }

  getSubmitError(error) {
    this.setState({
      isSubmitFail: true,
      submitError: error,
    });
  }

  handleContinueClick = (data, hasError) => {
    const {
      bookingDate, numOfGuests, firstName, lastName, emailAddress, phoneNumber,
    } = data;
    const { handleNextStep, handleFormData } = this.props;
    const updatedData = {};
    Object.entries(data).map(([key, value]) => {
      updatedData[key] = value.value;
      return updatedData;
    });

    if (!hasError) {
      axios.post('http://localhost:3000/api/bookings/check', {
        bookingDate: bookingDate.value,
        numOfGuests: numOfGuests.value,
        firstName: firstName.value,
        lastName: lastName.value,
        emailAddress: emailAddress.value,
        phoneNumber: phoneNumber.value,
      })
        .then((response) => {
          if (response.status === 200) {
            handleFormData(updatedData);
            handleNextStep();
          }
        })
        .catch((error) => {
          if (error.response.status === 406) {
            this.getSubmitError(error.response.data);
          } else {
            this.getSubmitError('Fail to submit, please try again');
          }
        });
    }
  };

  render() {
    const { formData } = this.props;
    const { bookingNum } = formData;
    const { data, isSubmitFail, submitError } = this.state;

    const error = this.getError(data);
    const hasError = Object.keys(error).length > 0;

    return (
      <>
        <Container>
          <FormTitle variant="primary">Booking Details</FormTitle>
          <FormSubTitle font="normal">
            Order number
            {' '}
            {bookingNum}
          </FormSubTitle>
          <FormWrapper
            onSubmit={(e) => {
              e.preventDefault();
              this.handleIsFormSubmitChange(true);
              this.handleContinueClick(data, hasError);
            }}
          >
            <FlexRow>
              <FormItem label="Date" htmlFor="bookingDate">
                <Input
                  size="smLeft"
                  name="bookingDate"
                  id="bookingDate"
                  type="text"
                  value={data.bookingDate.value}
                  disabled
                />
              </FormItem>
              <FormItem label="Number of guests" htmlFor="numOfGuests">
                <Input
                  size="smRight"
                  name="numOfGuests"
                  id="numOfGuests"
                  value={data.numOfGuests.value}
                  type="number"
                  onChange={this.handleDataChange}
                  onBlur={this.handleBlurredChange}
                  error={this.getErrorMessage(error, 'numOfGuests')}
                />
                <InputErrorMsg>{this.getErrorMessage(error, 'numOfGuests')}</InputErrorMsg>
              </FormItem>
            </FlexRow>
            <FlexRow>
              <FormItem label="First Name" htmlFor="firstName">
                <Input
                  size="smLeft"
                  name="firstName"
                  id="firstName"
                  type="text"
                  value={data.firstName.value}
                  onChange={this.handleDataChange}
                  onBlur={this.handleBlurredChange}
                  error={this.getErrorMessage(error, 'firstName')}
                />
                <InputErrorMsg>{this.getErrorMessage(error, 'firstName')}</InputErrorMsg>
              </FormItem>
              <FormItem label="Last Name" htmlFor="lastName">
                <Input
                  size="smRight"
                  name="lastName"
                  id="lastName"
                  type="text"
                  value={data.lastName.value}
                  onChange={this.handleDataChange}
                  onBlur={this.handleBlurredChange}
                  error={this.getErrorMessage(error, 'lastName')}
                />
                <InputErrorMsg>{this.getErrorMessage(error, 'lastName')}</InputErrorMsg>
              </FormItem>
            </FlexRow>
            <FormItem label="Email" htmlFor="emailAddress">
              <Input
                size="lg"
                name="emailAddress"
                id="emailAddress"
                type="emailAddress"
                value={data.emailAddress.value}
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                error={this.getErrorMessage(error, 'emailAddress')}
              />
              <InputErrorMsg>{this.getErrorMessage(error, 'emailAddress')}</InputErrorMsg>
            </FormItem>
            <FormItem label="Phone number" htmlFor="phoneNumber">
              <Input
                size="lg"
                name="phoneNumber"
                id="phoneNumber"
                type="text"
                value={data.phoneNumber.value}
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                error={this.getErrorMessage(error, 'phoneNumber')}
              />
              <InputErrorMsg>{this.getErrorMessage(error, 'phoneNumber')}</InputErrorMsg>
            </FormItem>
            {isSubmitFail && (<ServerMsg status="error">{submitError}</ServerMsg>)}
            <ButtonContinue>SUBMIT</ButtonContinue>
          </FormWrapper>
        </Container>
      </>
    );
  }
}

EditBooking.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  formData: PropTypes.arrayOf(PropTypes.string),
  handleFormData: PropTypes.func.isRequired,
};

EditBooking.defaultProps = {
  formData: [],
};
export default EditBooking;

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../../../components/Input';
import FormItem from '../../../components/FormItem';
import validate from './validate';
import InputErrorMsg from '../../../components/InputErrorMsg';
import ButtonContinue from '../../../components/ButtonContinue';
import FormTitle from '../../../components/FormTitle';
import FormSubTitle from '../../../components/FormSubTitle';
import FormWrapper from '../../../components/FormWrapper';
import FlexRow from '../../../components/FlexRow';
import SubmitErrorMsg from '../../../components/SubmitErrorMsg';

const Checkbox = styled.div`
  font-family: 'Raleway';
  text-align: left;
`;

const initialData = {
  value: '',
  blurred: false,
};
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      data: {
        guestNumber: initialData,
        firstName: initialData,
        lastName: initialData,
        email: initialData,
        phoneNumber: initialData,
        birthDate: initialData,
        towelChecked: {
          value: false,
        },
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
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const { name } = event.target;

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
      guestNumber, firstName, lastName, email, phoneNumber, birthDate,
    } = data;
    const { date, handleFormData, handleNextStep } = this.props;
    const formData = { price: 100 * guestNumber.value };
    Object.entries(data).map(([key, value]) => {
      formData[key] = value.value;
      return formData;
    });
    if (!hasError) {
      axios.post('http://localhost:3000/api/bookings/check', {
        bookingDate: date,
        numOfGuests: guestNumber.value,
        firstName: firstName.value,
        lastName: lastName.value,
        emailAddress: email.value,
        phoneNumber: phoneNumber.value,
        dateOfBirth: birthDate.value,
      })
        .then((response) => {
          if (response.status === 200) {
            handleFormData(formData);
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
    const { data, isSubmitFail, submitError } = this.state;
    const { date } = this.props;
    const error = this.getError(data);
    const hasError = Object.keys(error).length > 0;

    return (
      <>
        <FormTitle variant="primary">Booking Details</FormTitle>
        <FormSubTitle font="special">You can manage your booking with your details below.</FormSubTitle>
        <FormWrapper
          onSubmit={(e) => {
            e.preventDefault();
            this.handleIsFormSubmitChange(true);
            this.handleContinueClick(data, hasError);
          }}
        >
          <FlexRow>
            <FormItem label="Date" htmlFor="selectedDate">
              <Input
                size="smLeft"
                name="selectedDate"
                id="selectedDate"
                placeholder={date}
                type="text"
                value={date}
                disabled
              />
            </FormItem>
            <FormItem label="Number of guests" htmlFor="guestNumber">
              <Input
                size="smRight"
                name="guestNumber"
                id="guestNumber"
                value={data.guestNumber.value}
                type="number"
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                error={this.getErrorMessage(error, 'guestNumber')}
              />
              <InputErrorMsg>{this.getErrorMessage(error, 'guestNumber')}</InputErrorMsg>
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
          <FormItem label="Email" htmlFor="email">
            <Input
              size="lg"
              name="email"
              id="email"
              type="email"
              value={data.email.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, 'email')}
            />
            <InputErrorMsg>{this.getErrorMessage(error, 'email')}</InputErrorMsg>
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
          <FormItem label="Date of birth" htmlFor="birthDate">
            <Input
              size="lg"
              name="birthDate"
              id="birthDate"
              type="date"
              value={data.birthDate.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, 'birthDate')}
            />
            <InputErrorMsg>{this.getErrorMessage(error, 'birthDate')}</InputErrorMsg>
          </FormItem>
          <FormTitle variant="secondary">Please read and select before the payment</FormTitle>
          <Checkbox>
            <label htmlFor="towelChecked">
              <input
                name="towelChecked"
                type="checkbox"
                id="towelChecked"
                checked={data.towelChecked.value}
                onChange={this.handleDataChange}
              />
              I will either bring my own large bath towel or purchase one on the day
            </label>
            <InputErrorMsg>{this.getErrorMessage(error, 'towelChecked')}</InputErrorMsg>
          </Checkbox>
          {isSubmitFail && (<SubmitErrorMsg>{submitError}</SubmitErrorMsg>)}
          <ButtonContinue>CONTINUE</ButtonContinue>
        </FormWrapper>
      </>
    );
  }
}

Form.propTypes = {
  date: PropTypes.string.isRequired,
  handleFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

export default Form;

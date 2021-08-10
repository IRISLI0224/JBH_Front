import React from 'react';
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
import ServerMsg from '../../../components/ServerMsg';

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
        numOfGuests: initialData,
        firstName: initialData,
        lastName: initialData,
        email: initialData,
        phone: initialData,
        dateOfBirth: initialData,
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
    const { numOfGuests } = data;
    const { date, handleFormData, handleNextStep } = this.props;
    const formData = { price: 100 * numOfGuests.value, bookingDate: date };
    Object.entries(data).map(([key, value]) => {
      formData[key] = value.value;
      return formData;
    });
    if (!hasError) {
      handleFormData(formData);
      handleNextStep();
    }
  };

  handleSubmit = (e, data, hasError) => {
    e.preventDefault();
    this.handleIsFormSubmitChange(true);
    this.handleContinueClick(data, hasError);
  };

  render() {
    const { data, isSubmitFail, submitError } = this.state;
    const { date } = this.props;
    const error = this.getError(data);
    const hasError = Object.keys(error).length > 0;

    return (
      <>
        <FormTitle variant="primary">Booking Details</FormTitle>
        <FormSubTitle font="special">
          You can manage your booking with your details below.
        </FormSubTitle>
        <FormWrapper
          onSubmit={(e) => {
            this.handleSubmit(e, data, hasError);
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
          <FormItem label="Phone number" htmlFor="phone">
            <Input
              size="lg"
              name="phone"
              id="phone"
              type="text"
              value={data.phone.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, 'phone')}
            />
            <InputErrorMsg>{this.getErrorMessage(error, 'phone')}</InputErrorMsg>
          </FormItem>
          <FormItem label="Date of birth" htmlFor="dateOfBirth">
            <Input
              size="lg"
              name="dateOfBirth"
              id="dateOfBirth"
              type="date"
              value={data.dateOfBirth.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, 'dateOfBirth')}
            />
            <InputErrorMsg>{this.getErrorMessage(error, 'dateOfBirth')}</InputErrorMsg>
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
          {isSubmitFail && <ServerMsg status="error">{submitError}</ServerMsg>}
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

// Second page of Mybooking part, edit data of chosen booking
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../../../components/Input';
import FormItem from '../../../components/FormItem';
import InputErrorMsg from '../../../components/InputErrorMsg';
import validate from '../../Booking/Form/validate';
import ButtonContinue from '../../../components/ButtonContinue';
import FormTitle from '../../../components/FormTitle';
import FormSubTitle from '../../../components/FormSubTitle';
import FormWrapper from '../../../components/FormWrapper';
import FlexRow from '../../../components/FlexRow';
import SubmitErrorMsg from '../../../components/SubmitErrorMsg';

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

    const {
      selectedDate, guestNumber, firstName, lastName, email, phoneNumber,
    } = this.props;

    this.state = {
      // wait for value after calling backend api
      data: {
        selectedDate: initialData(selectedDate),
        guestNumber: initialData(guestNumber),
        firstName: initialData(firstName),
        lastName: initialData(lastName),
        email: initialData(email),
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
      guestNumber, firstName, lastName, email, phoneNumber,
    } = data;
    const { handleNextStep } = this.props;
    const { handleFormData } = this.props;
    const formData = this.props;
    // console.log("here"+formData)
    // Object.entries(data).map(([key, value]) => {
    //   formData[key] = value.value;
    //   return formData;
    // });

    if (!hasError) {
      axios.post('http://localhost:3000/api/bookings/edit', {
        bookingDate: '2021-08-01',
        numOfGuests: guestNumber.value,
        firstName: firstName.value,
        lastName: lastName.value,
        emailAddress: email.value,
        phoneNumber: phoneNumber.value,
      })
        .then((response) => {
          if (response.status === 201) {
            // handleFormData(formData);
            handleNextStep();
          }
        })
        .catch((error) => {
          if (error.response.status === 406) {
            this.getSubmitError(error.response.data);
          } else {
            this.getSubmitError('Fail to submit, please try again');
          }
          // error.response.status === 406
          //   ? this.getSubmitError(error.response.data)
          //   : this.getSubmitError('Fail to submit, please try again');
        });
    }
  };

  render() {
    // const { data } = this.state;
    // // 数据都在formData里面
    // const { formData } = this.props;
    // console.log(formData);


    const { data, isSubmitFail, submitError } = this.state;
    // wait for order number from previous page
    // const { formData } = this.props;
    const error = this.getError(data);
    const hasError = Object.keys(error).length > 0;

    return (
      <>
        <Container>
          <FormTitle variant="primary">Booking Details</FormTitle>
          <FormSubTitle font="normal">
            Order number
          </FormSubTitle>
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
                  placeholder="06/06/2021"
                  type="text"
                  value={data.selectedDate.value}
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
            {isSubmitFail && (<SubmitErrorMsg>{submitError}</SubmitErrorMsg>)}
            <ButtonContinue>SUBMIT</ButtonContinue>
          </FormWrapper>
        </Container>
      </>
    );
  }
}

EditBooking.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  guestNumber: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  formData: PropTypes.arrayOf(PropTypes.string),
  handleFormData: PropTypes.func.isRequired,
};

EditBooking.defaultProps = {
  formData: [],
};
export default EditBooking;

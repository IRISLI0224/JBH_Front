import React from 'react';
import PropTypes from 'prop-types';
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import ButtonContinue from '../../../../../components/ButtonContinue';
import addBooking from '../../../../../apis/addBooking';

const Form = styled.form`
  margin: 1.25rem auto;
  max-width: 23.8rem;
  animation: fade 200ms ease-out;
`;

const FormGroup = styled.fieldset`
  margin: 0 0.94rem 1.25rem;
  border-style: none;
  background-color: #bbbbc25e;
  will-change: opacity, transform;
  border-radius: 0.25rem;
`;

const FormRow = styled.div`
  margin-left: 0.938rem;
  padding: 0.688rem 0.938rem 0.688rem 0;
`;

const FormStatement = styled.div`
  margin: 0.938rem auto;
  font-size: 0.875rem;
  color: #818181;
  border: none;
`;

const Error = styled.div`
  padding: 0.375rem 1rem;
  border-radius: 4px;
  background-color: #fdecea;
  color: red;
  margin: 0 auto 1.25rem;
  max-width: max-content;
`;

const Transaction = styled(Error)`
  background-color: #eaf1fd;
  color: black;
`;

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      confirmMessage: undefined,
      isButtonDisabled: false,
    };
  }

  setErrorMessage = (error) => {
    if (error) this.setState({ error: error.message });
    else this.setState({ error: undefined });
  };

  setConfirmMessageAndButton = (confirmMessage, isButtonDisabled) => {
    this.setState({
      confirmMessage,
      isButtonDisabled,
    });
  };

  setPayment = async () => {
    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return '';
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      this.setErrorMessage(error);
      this.setConfirmMessageAndButton(undefined, false);
      return '';
    }
    this.setErrorMessage();
    this.setConfirmMessageAndButton('the payment is being processed......', true);
    try {
      const { id } = paymentMethod;
      const { formData } = this.props;
      const bookingAndPaymentInfo = { ...formData, id };
      const response = await addBooking(bookingAndPaymentInfo);
      if (response.data.success) {
        return response.data;
      }
      this.setConfirmMessageAndButton(response.data.message, false);
    } catch (payError) {
      if (payError.response) {
        payError.message = payError.response.data.message || payError.response.data;
      } else if (payError.request) {
        payError.message = 'The request was made but no response was received, try again later';
      }
      this.setErrorMessage(payError);
      this.setConfirmMessageAndButton(undefined, false);
    }

    return '';
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = this.state;
    let bookingResponse = null;
    bookingResponse = !error && (await this.setPayment());
    if (bookingResponse) {
      this.handleClick(bookingResponse);
    }
  };

  handleClick = (bookingResponse) => {
    const { handlePaidStatus, handleNextStep, handleFormData } = this.props;
    handlePaidStatus();
    handleFormData(bookingResponse);
    handleNextStep();
  };

  render() {
    const { error, confirmMessage, isButtonDisabled } = this.state;
    const {
      formData: { paidAmount },
    } = this.props;
    const price = paidAmount * 2;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormRow>
              <CardElement
                onChange={(e) => {
                  this.setErrorMessage(e.error);
                }}
              />
            </FormRow>
          </FormGroup>
          {error && <Error>{error}</Error>}
          {confirmMessage && <Transaction>{confirmMessage}</Transaction>}
          <div>
            Order total: AU$
            {price}
            <br />
            <br />
            <b>
              Payment total (50%): AU$
              {paidAmount}
            </b>
          </div>
          <FormStatement>
            By proceeding, I agree with the terms of the license agreement, privacy policy and terms
            and conditions.
          </FormStatement>
          <ButtonContinue type="submit" disabled={isButtonDisabled}>
            Pay AU$
            {paidAmount}
          </ButtonContinue>
          <br />
        </Form>
      </>
    );
  }
}

CheckoutForm.defaultProps = {
  stripe: undefined,
  elements: undefined,
};

CheckoutForm.propTypes = {
  stripe: PropTypes.shape({
    createPaymentMethod: PropTypes.func,
    elements: PropTypes.func,
  }),
  elements: PropTypes.shape({
    create: PropTypes.func,
    getElement: PropTypes.func,
  }),
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bookingDate: PropTypes.string,
    paidAmount: PropTypes.number,
  }).isRequired,
  handlePaidStatus: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

const InjectedCheckoutForm = ({ formData, handlePaidStatus, handleFormData, handleNextStep }) => (
  <ElementsConsumer>
    {({ elements, stripe }) => (
      <CheckoutForm
        elements={elements}
        stripe={stripe}
        formData={formData}
        handlePaidStatus={handlePaidStatus}
        handleFormData={handleFormData}
        handleNextStep={handleNextStep}
      />
    )}
  </ElementsConsumer>
);

InjectedCheckoutForm.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bookingDate: PropTypes.string,
    paidAmount: PropTypes.number,
    sessions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handlePaidStatus: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

export default InjectedCheckoutForm;

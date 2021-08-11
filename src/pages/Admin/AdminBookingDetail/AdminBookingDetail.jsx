/* eslint-disable prefer-destructuring */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GuestCard from './components/GuestCard';
import BookingCard from './components/BookingCard';
import { getBookingById } from '../../../apis/getBookingById';

const Wrapper = styled.div`
  height: 100%;
  margin-left: 170px;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-family: 'Poppins';
`;

class AdminBookingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingDetail: undefined,
      id: '',
    };
    const history = this.props;
    const location = history.location;
    const locationid = location.id;
    this.state.id = locationid;
    this.getBookingDetail();
  }

  async getBookingDetail() {
    const { id } = this.state;
    this.setState({
      bookingDetail: await getBookingById(id),
    });
  }

  render() {
    const { bookingDetail } = this.state;
    return (
      <>
        {bookingDetail && (
          <Wrapper>
            <GuestCard bookingDetail={bookingDetail} />
            <BookingCard bookingDetail={bookingDetail} />
          </Wrapper>
        )}
      </>
    );
  }
}

AdminBookingDetail.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.objectOf.isRequired,
    PropTypes.oneOf([undefined]).isRequired,
  ]).isRequired,
};
export default AdminBookingDetail;

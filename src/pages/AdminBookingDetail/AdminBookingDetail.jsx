import React from 'react';
import styled from 'styled-components';
import GuestCard from './components/GuestCard';
import BookingCard from './components/BookingCard';
import { getBookingById } from '../../apis/getBookingById';

const Wrapper = styled.div`
  height: 100%;
  margin-left: 170px;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-family: 'Poppins';
  margin-bottom: 13%;
`;

class AdminBookingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingDetail: undefined,
      id: '',
    };
    const history = this.props;//eslint-disable-line
    this.state.id = history.location.id;//eslint-disable-line
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

          <GuestCard
            bookingDetail={bookingDetail}
          />
          <BookingCard
            bookingDetail={bookingDetail}
          />
        </Wrapper>
        )}
      </>
    );
  }
}

export default AdminBookingDetail;

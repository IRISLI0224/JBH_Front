import React from 'react';
import styled from 'styled-components';
import GuestCard from './components/GuestCard';
import BookingCard from './components/BookingCard';

const Wrapper = styled.div`
  height: 100%;
  margin-left: 170px;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
`;

const AdminBookingDetail = () => (

  <Wrapper>
    <GuestCard />
    <BookingCard />
  </Wrapper>
);

export default AdminBookingDetail;

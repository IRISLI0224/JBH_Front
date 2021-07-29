import React from 'react';
import styled from 'styled-components';
import GuestList from './GuestList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 1.5rem 3rem 0 0;
  width: 85%;
  /* background-color: #e8f0f8; */
  font-family: 'Poppins';
  margin-left: 11rem;
`;

const Admin = () => (
  <Container>
    <GuestList />
  </Container>
);
export default Admin;
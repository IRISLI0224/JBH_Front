import React from 'react';
import styled from 'styled-components';
import AdminLogin from './AdminLogin';

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Admin = () => (
  <>
    <Container>
      <AdminLogin />
    </Container>
  </>
);

export default Admin;

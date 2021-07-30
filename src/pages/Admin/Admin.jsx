import React from 'react';
import styled from 'styled-components';
import AdminLogin from './AdminLogin';
import { OtherHeader } from '../../components/Layout/components/Header';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
`;
const Admin = () => (
  <>
    <OtherHeader />
    <Container>
      <AdminLogin />
    </Container>
  </>
)

export default Admin;

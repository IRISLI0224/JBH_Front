import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';

const Main = styled.div`
  min-height: 400px;
`;

const AdminLayout = ({ children }) => (
  <>
    <AdminHeader />
    <Main>{children}</Main>
    <AdminSidebar />
  </>
);

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(AdminLayout);

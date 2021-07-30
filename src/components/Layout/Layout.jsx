import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header, { OtherHeader } from './components/Header';
import Footer from './components/Footer';
import bgImg from '../../assets/images/bgImg.jpeg';
import otherBgImg from '../../assets/images/otherBgImg.jpg';
import AdminHeader from '../AdminLayout/components/AdminHeader';
import AdminSidebar from '../AdminLayout/components/AdminSidebar';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  min-height: 100vh;
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;
`;

// location.pathname.indexOf("admin") != -1

const Layout = ({ children, location }) => (
  <>
    {location.pathname === '/' || location.pathname === '/index.html' ? (  //eslint-disable-line
      <>
        <Header />
        <Main img={bgImg}>{children}</Main>
        <Footer />
      </>
    )
      : location.pathname.indexOf('guestlist') !== -1 ? (
        <>
          <>
            <AdminHeader />
            <Main>{children}</Main>
            <AdminSidebar />
          </>
        </>
      ) : (
        <>
          <OtherHeader />
          <Main img={otherBgImg}>{children}</Main>
          <Footer />
        </>
      )}

  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Layout);

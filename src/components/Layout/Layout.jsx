import React from 'react';
import styled, { css } from 'styled-components';
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
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;

  ${(props) => ({
    user: css`
      min-height: 100vh;
    `,
  }[props.variant])}
`;

// location.pathname.indexOf("admin") != -1
const Layout = ({ children, location }) => {
  const url = location.pathname;
  const specialCases = {
    '/': 'A',
    '/index.html': 'A',
    '/admin/guestlist': 'B',
    '/admin/bookingdetail': 'B',
  };

  const specialCase = specialCases[url];
  if (specialCase === 'A') {
    return (
      <>
        <Header />
        <Main img={bgImg}>{children}</Main>
        <Footer />
      </>
    );
  }
  if (specialCase === 'B') {
    return (

      <>
        <AdminHeader />
        <Main>{children}</Main>
        <AdminSidebar />
      </>

    );
  }

  return (
    <>
      <OtherHeader />
      <Main variant="user" img={otherBgImg}>{children}</Main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Layout);

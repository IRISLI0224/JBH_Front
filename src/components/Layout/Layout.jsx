import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/Header';
import BasicHeader from './components/Header/BasicHeader';
import BasicLogoutHeader from './components/Header/BasicLogoutHeader';
import Footer from './components/Footer';
import bgImg from '../../assets/images/bgGif.gif';
import adminBg from '../../assets/images/adminBg.jpg';
import primaryBgImg from '../../assets/images/primaryBgImg.jpg';
import AdminHeader from '../AdminLayout/components/AdminHeader';
import AdminSidebar from '../AdminLayout/components/AdminSidebar';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;

  ${(props) =>
    ({
      user: css`
        min-height: 100vh;
      `,
    }[props.variant])}
`;

const Layout = ({ children, location }) => {
  const url = location.pathname;
  const specialCases = {
    '/': 'A',
    '/index.html': 'A',
    '/admin/guestlist': 'B',
    '/admin/bookingdetail': 'B',
    '/admin/addsession': 'B',
    '/admin/editsession': 'B',
    '/mybooking': 'C',
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
        <Main img={adminBg}>{children}</Main>
        <AdminSidebar />
      </>
    );
  }

  if (specialCase === 'C') {
    return (
      <>
        <BasicLogoutHeader />
        <Main variant="user" img={primaryBgImg}>
          {children}
        </Main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <BasicHeader />
      <Main variant="user" img={primaryBgImg}>
        {children}
      </Main>
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

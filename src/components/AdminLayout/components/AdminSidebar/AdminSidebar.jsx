import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import LogoImg from '../../../../assets/images/logo.png';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 150px;
  height: 100%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
`;

const LogoIconImg = styled.img`
  margin-top: 20px;
  width: 80px;
  height: 80px;
`;

const IconTitleWrap = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 5px;
  font-family: 'Poppins';
  font-size: 12px;
`;

const NavButton = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;

const AdminSidebar = ({ history }) => (
  <Wrapper>
    <LogoIconImg src={LogoImg} alt="Avatar" />
    <NavButton
      onClick={() => {
        history.push({
          pathname: '/admin/guestlist',
          adminName: history.location.adminName,
        });
      }}
    >
      <IconTitleWrap>
        <FontAwesomeIcon color="#8f8f8f" size="2x" icon={faThLarge} />
        <Title>Dashboard</Title>
      </IconTitleWrap>
    </NavButton>
    <NavButton
      onClick={() => {
        history.push({
          pathname: '/admin/addsession',
          adminName: history.location.adminName,
        });
      }}
    >
      <IconTitleWrap>
        <FontAwesomeIcon color="#8f8f8f" size="2x" icon={faUser} />
      </IconTitleWrap>
      <Title>Avaliability</Title>
    </NavButton>
  </Wrapper>
);

AdminSidebar.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      adminName: PropTypes.string,
    }),
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(AdminSidebar);

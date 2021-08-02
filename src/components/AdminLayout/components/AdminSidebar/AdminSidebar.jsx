import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
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
  margin-top: 25px;
  width: 60px;
  height: 60px;
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

const AdminSidebar = () => (
  <Wrapper>
    <LogoIconImg src={LogoImg} alt="Avatar" />

    <Link to="/admin/guestlist" style={{ textDecoration: 'none', marginTop: '5px', display: 'flex' }}>
      <NavButton>
        <IconTitleWrap>
          <FontAwesomeIcon color="#8f8f8f" size="2x" icon={faThLarge} />
          <Title>Dashboard</Title>
        </IconTitleWrap>
      </NavButton>

    </Link>

    <Link to="/admin/addsession" style={{ textDecoration: 'none', marginTop: '5px' }}>

      <NavButton>
        <IconTitleWrap>
          <FontAwesomeIcon color="#8f8f8f" size="2x" icon={faUser} />

        </IconTitleWrap>
        <Title>Avaliability</Title>
      </NavButton>
    </Link>

  </Wrapper>

);

export default AdminSidebar;

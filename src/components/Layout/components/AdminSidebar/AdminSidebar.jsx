import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../../../assets/images/logo.png';
import DashboardImg from '../../../../assets/images/dashboard.png';
import GuestImg from '../../../../assets/images/guest.png';

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

const DashboardIconImg = styled.img`
  margin-top: 50px;
  width: 90px;
  height: 70px;
`;

const GuestIconImg = styled.img`
  margin-top: 25px;
  width: 80px;
  height: 60px;
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
    <NavButton>
      <DashboardIconImg src={DashboardImg} alt="DashboardIcon" />
    </NavButton>
    <NavButton>
      <GuestIconImg src={GuestImg} alt="GuestIcon" />
    </NavButton>
  </Wrapper>

);

export default AdminSidebar;

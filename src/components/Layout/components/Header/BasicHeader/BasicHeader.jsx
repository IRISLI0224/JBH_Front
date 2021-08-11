import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../../../../../assets/images/logo.png';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: ${({ height }) => height}rem;
  background-color: rgb(24, 28, 77);
  text-align: center;
  @media (max-width: 768px) {
    height: ${({ height }) => height + 2}rem;
  }
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 6.7rem;
`;

const HeaderButton = styled.button`
  border: none;
  background-color: rgb(24, 28, 77);
  color: #fff;
  font: 500 0.8rem 'Roboto';
  letter-spacing: 0.05rem;
  &:hover {
    cursor: pointer;
    color: #818181;
  }
  position: absolute;
  right: 4rem;
  bottom: 1rem;
`;

const BasicHeader = () => (
  <Container height={7.5}>
    <Logo src={LogoImg} alt="Logo" />
    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
      <HeaderButton>BACK TO HOMEPAGE</HeaderButton>
    </Link>
  </Container>
);

export default BasicHeader;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import LogoImg from '../../../../assets/images/logo.png';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: ${({ height }) => height}rem;
  background-color: rgb(24, 28, 77);
  text-align: center;
  @media(max-width:768px){
    height:${({ height }) => (height + 2)}rem;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 0.3rem;
  left: 8%;
  width:10.5rem;
  @media (max-width: 992px) {
    left:40%;
  }
  @media(max-width:414px){
    left:28%;
  }
`;

const OtherLogo = styled.img`
  width: 6.7rem;
`;

const HeaderTitle = styled.h1`
  margin-top: 5rem;
  color: #fff;
  font: bold 2.1rem 'Baloo';
  letter-spacing: 0.1rem;
  @media (max-width: 992px) {
    display:none;
  }
`;

const ButtonContainer = styled.div`
  display:flex;
  justify-content: flex-end;
  margin-right: 2rem;
  color: white;
`;

const HeaderButton = styled.button`
  border: none;
  background-color: rgb(24, 28, 77);
  color: #fff;
  font: 500 0.8rem 'Arial';
  letter-spacing: 0.05rem;
  padding: 0 0.5rem;
  &:hover {
    cursor: pointer;
    color: #818181;
  }
`;

const Header = (props) => (
  <Container height={12}>
    <Logo src={LogoImg} alt="Logo" />
    <HeaderTitle>WELCOME TO JAPANESE BATH HOUSE</HeaderTitle>
    <ButtonContainer>
      <HeaderButton
        onClick={() => {
          props.history.push('/login');
        }}
      >
        GUEST LOGIN
        {' '}
      </HeaderButton>
      /
      <HeaderButton
        onClick={() => {
          props.history.push('/admin');
        }}
      >
        ADMIN LOGIN
        {' '}
      </HeaderButton>
    </ButtonContainer>
  </Container>
);

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export const OtherHeader = () => (
  <Container height={7.5}>
    <OtherLogo src={LogoImg} alt="Logo" />
  </Container>
);

export default withRouter(Header);

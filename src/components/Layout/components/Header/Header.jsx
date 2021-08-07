import React from 'react';
import styled, { css } from 'styled-components';
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
  @media (max-width: 768px) {
    height: ${({ height }) => height + 2}rem;
  }
  box-shadow: 0px 15px 10px -15px #000;
`;

const Logo = styled.img`
  position: absolute;
  top: 0.3rem;
  left: 8%;
  width: 10.5rem;
  @media (max-width: 992px) {
    left: 40%;
  }
  @media (max-width: 414px) {
    left: 28%;
  }
`;

const HeaderTitle = styled.h1`
  margin-top: 5rem;
  color: #fff;
  font: bold 2.1rem 'Baloo';
  letter-spacing: 0.1rem;
  @media (max-width: 992px) {
    display: none;
  }
  text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black, 5px 5px black, 6px 6px black, 7px 7px black,
    8px 8px black;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  color: white;
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

  ${(props) =>
    ({
      logout: css`
        position: absolute;
        right: 4rem;
        bottom: 1rem;
      `,
      login: css`
        padding: 0 0.5rem;
      `,
    }[props.type])}
`;

const Header = (props) => (
  <Container height={12}>
    <Logo src={LogoImg} alt="Logo" />
    <HeaderTitle>WELCOME TO JAPANESE BATH HOUSE</HeaderTitle>
    <ButtonContainer>
      <HeaderButton
        type="login"
        onClick={() => {
          props.history.push('/login');
        }}
      >
        GUEST LOGIN
      </HeaderButton>
      /
      <HeaderButton
        type="login"
        onClick={() => {
          props.history.push('/admin');
        }}
      >
        ADMIN LOGIN
      </HeaderButton>
    </ButtonContainer>
  </Container>
);

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Header);

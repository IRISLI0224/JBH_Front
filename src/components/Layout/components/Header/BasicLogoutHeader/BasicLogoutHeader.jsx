import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { removeToken } from '../../../../../utils/authentication';
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

const BasicHeader = (props) => (
  <Container height={7.5}>
    <Logo src={LogoImg} alt="Logo" />

    <HeaderButton
      type="logout"
      onClick={() => {
        removeToken();
        props.history.push('/login');
      }}
    >
      LOGOUT
    </HeaderButton>
  </Container>
);

BasicHeader.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(BasicHeader);

import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getUserEmail, removeToken, removeUserEmail } from '../../../../../utils/authentication';
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

const UserInfo = styled.div`
  position: absolute;
  right: 4rem;
  bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
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
        padding: 0 0 0 2rem;
      `,
      login: css`
        padding: 0 0.5rem;
      `,
    }[props.type])}
`;

const AvatarIconImg = styled.img`
  margin-left: 80px;
  border: 2px solid #8f8f8f;
  border-radius: 50%;
  height: 25px;
`;

const UserName = styled.div`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: bold;
  color: white;
  padding: 0 1rem 0 0.5rem;
`;

const BasicHeader = (props) => (
  <Container height={7.5}>
    <Logo src={LogoImg} alt="Logo" />
    <UserInfo>
      <AvatarIconImg
        src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        alt="Avatar"
      />
      <UserName>{getUserEmail()}</UserName>
      <HeaderButton
        type="logout"
        onClick={() => {
          removeToken();
          removeUserEmail();
          props.history.push('/login');
        }}
      >
        LOGOUT
      </HeaderButton>
    </UserInfo>
  </Container>
);

BasicHeader.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(BasicHeader);

import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../../../../assets/images/logo.png';

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

const OtherLogo = styled.img`
  width: 6.7rem;
`;

const BasicHeader = () => (
  <Container height={7.5}>
    <OtherLogo src={LogoImg} alt="Logo" />
  </Container>
);

export default BasicHeader;

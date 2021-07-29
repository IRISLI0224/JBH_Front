import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import PaperImg from '../../../../assets/images/cement.jpeg';

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const AvatarIcon = styled.div`
  width: 180px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const AvatarIconImg = styled.img`
  width:80px; 
  border: 5px solid white;
  border-radius:50%;
  margin-top: -40px;
`;

const Name = styled.div`
  font-family: Poppins;
  font-size: 20px;
`;

const TelephoneWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const EmailWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Number = styled.div`
  font-family: Poppins;
  font-size: 16px;
  margin-top: 3px;
  margin-left: 5px;
`;

const GuestCard = () => (
  <Wrapper>
    <AvatarIcon>
      <BackgroundImg src={PaperImg} alt="Avatar" />
      <AvatarIconImg src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Avatar" />
    </AvatarIcon>
    <Name>
      Name
    </Name>
    <div>
      <TelephoneWrapper>
        <FontAwesomeIcon color="#181b50" size="2x" icon={faPhoneSquareAlt} />
        <Number>+12 3456 789</Number>
      </TelephoneWrapper>
      <EmailWrapper>
        <FontAwesomeIcon color="#181b50" size="2x" icon={faEnvelopeSquare} />
        <Number>test@admin.com</Number>
      </EmailWrapper>
    </div>
  </Wrapper>
);

export default GuestCard;

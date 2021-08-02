import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import PaperImg from '../../../../assets/images/cement.jpeg';

const Wrapper = styled.div`
  width: 20%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
`;

const AvatarIcon = styled.div`
  width: 100%;
  height: 30%;
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
  font-size: 20px;
`;

const TelephoneWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Number = styled.div`
  font-size: 16px;
  margin: 0 1rem;
`;

const GuestCard = ({ bookingDetail }) => (
  <>
    {bookingDetail && (
    <Wrapper>
      <AvatarIcon>
        <BackgroundImg src={PaperImg} alt="Avatar" />
        <AvatarIconImg src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Avatar" />
      </AvatarIcon>
      <Name>
        {bookingDetail[0].firstName}
      </Name>
      <div>
        <TelephoneWrapper>
          <FontAwesomeIcon color="#181b50" size="2x" icon={faPhoneSquareAlt} />
          <Number>{bookingDetail[0].phone}</Number>
        </TelephoneWrapper>
        <EmailWrapper>
          <FontAwesomeIcon color="#181b50" size="2x" icon={faEnvelopeSquare} />
          <Number>{bookingDetail[0].email}</Number>
        </EmailWrapper>
      </div>
    </Wrapper>
    )}
  </>
);

GuestCard.propTypes = {
  bookingDetail: PropTypes.shape([]).isRequired,
};

export default GuestCard;

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faBed } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import ImgOne from '../../../../../assets/images/slide1.png';
import ImgTwo from '../../../../../assets/images/slide2.jpeg';
import ImgThree from '../../../../../assets/images/slide3.jpeg';
import ImgFour from '../../../../../assets/images/slide4.png';

const Wrapper = styled.div`
  width: 55%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin-left: 1rem;
  border-radius: 10px;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;

const TopSubUp = styled.div`
  display: flex;
`;

const TopSub = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

const IconWrapperLarge = styled.div`
  width: 50px;
  height: 50px;
  margin-top: -10px;
`;

const IconWrapperSmall = styled.div`
  width: 20px;
  height: 20px;
`;

const BookingGeneral = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

const BookingId = styled.div`
  font-size: 16px;
  color: #181b50;
`;

const ProductName = styled.div`
  font-size: 20px;
`;

const BottomTitle = styled.div`
  font-size: 20px;
  margin: 2rem 0;
`;

const DetailName = styled.div`
  font-size: 18px;
  display: flex;
`;

const BookingNum = styled.div`
  font-size: 12px;
  margin-left: 10px;
  color: #8f8f8f;
`;

const ImgWrapper = styled.img`
  width: 22%;
  border-radius: 10px;
  object-fit: cover;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PersonWrap = styled.div`
  margin-left: 10px;
`;

const BookingCard = ({ bookingDetail }) => (
  <>
    {bookingDetail && (
      <Wrapper>
        <TopWrapper>
          <ProductName>Current Booking</ProductName>
          <TopDetail>
            <IconWrapperLarge>
              <FontAwesomeIcon color="#181b50" size="3x" icon={faShapes} />
            </IconWrapperLarge>
            <BookingGeneral>
              <BookingId>Booking Number</BookingId>
              <ProductName>{bookingDetail[0].bookingNum}</ProductName>
            </BookingGeneral>
            <TopSub>
              <TopSubUp>
                <IconWrapperSmall>
                  <FontAwesomeIcon color="#8f8f8f" size="1x" icon={faUser} />
                </IconWrapperSmall>
                <BookingNum>Number of Guest</BookingNum>
              </TopSubUp>
              <DetailName>
                {bookingDetail[0].numOfGuests}
                <PersonWrap>Person</PersonWrap>
              </DetailName>
            </TopSub>
            <TopSub>
              <TopSubUp>
                <IconWrapperSmall>
                  <FontAwesomeIcon color="#8f8f8f" size="1x" icon={faBed} />
                </IconWrapperSmall>
                <BookingNum>Booking Date</BookingNum>
              </TopSubUp>
              <DetailName>{moment(bookingDetail[0].bookingDate).format('YYYY-MM-DD')}</DetailName>
            </TopSub>
          </TopDetail>
        </TopWrapper>
        <TopWrapper>
          <BottomTitle>Room Facilities</BottomTitle>
          <ImgContainer>
            <ImgWrapper src={ImgOne} alt="Avatar" />
            <ImgWrapper src={ImgTwo} alt="Avatar" />
            <ImgWrapper src={ImgThree} alt="Avatar" />
            <ImgWrapper src={ImgFour} alt="Avatar" />
          </ImgContainer>
        </TopWrapper>
      </Wrapper>
    )}
  </>
);

BookingCard.propTypes = {
  bookingDetail: PropTypes.oneOfType([
    PropTypes.shape([]).isRequired,
    PropTypes.arrayOf(PropTypes.object).isRequired,
    PropTypes.oneOf([undefined]).isRequired,
  ]).isRequired,
};

export default BookingCard;

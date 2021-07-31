import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faBed } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import SlideOne from '../../../../assets/images/slide1.png';
import SlideTwo from '../../../../assets/images/slide2.jpeg';
import SlideThree from '../../../../assets/images/slide3.jpeg';

const Wrapper = styled.div`
  width: 1000px;
  height: 400px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin-left:20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

`;

const TopDetail = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
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
  font-family: Poppins;
  font-size: 16px;
  color: #181b50;
`;

const ProductName = styled.div`
  font-family: Poppins;
  font-size: 20px;
`;

const BottomTitle = styled.div`
  font-family: Poppins;
  font-size: 20px;
  margin-top: -20px;
  margin-bottom: 20px;
`;

const DetailName = styled.div`
  font-family: Poppins;
  font-size: 18px;
`;

const BookingNum = styled.div`
  font-family: Poppins;
  font-size: 12px;
  margin-left: 10px;
  color: #8f8f8f;
`;

const ImgWrapper = styled.img`
  width: 200px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BookingCard = ({
  bookingDetail,
}) => (
  <>
    {bookingDetail && (
      <Wrapper>
        <TopWrapper>
          <ProductName>Current Booking</ProductName>
          <TopDetail>
            <IconWrapperLarge>
              <FontAwesomeIcon color="#181b50" size="4x" icon={faShapes} />
            </IconWrapperLarge>
            <BookingGeneral>
              <BookingId>Booking Number</BookingId>
              <ProductName>{bookingDetail[0].bookingNum}</ProductName>
            </BookingGeneral>
            <TopSub>
              <TopSubUp>
                <IconWrapperSmall>
                  <FontAwesomeIcon color="#8f8f8f" size="x" icon={faUser} />
                </IconWrapperSmall>
                <BookingNum>Book Capacity</BookingNum>
              </TopSubUp>
              <DetailName>
                {bookingDetail[0].numOfGuests}
                Person
              </DetailName>
            </TopSub>
            <TopSub>
              <TopSubUp>
                <IconWrapperSmall>
                  <FontAwesomeIcon color="#8f8f8f" size="x" icon={faBed} />
                </IconWrapperSmall>
                <BookingNum>Booking Date</BookingNum>
              </TopSubUp>
              <DetailName>{(moment)(bookingDetail[0].bookingDate).format('YYYY-MM-DD')}</DetailName>
            </TopSub>
          </TopDetail>

        </TopWrapper>
        <TopWrapper>
          <BottomTitle>Room Facilities</BottomTitle>
          <ImgContainer>
            <ImgWrapper src={SlideOne} alt="Avatar" />
            <ImgWrapper src={SlideTwo} alt="Avatar" />
            <ImgWrapper src={SlideThree} alt="Avatar" />
            <ImgWrapper src={SlideThree} alt="Avatar" />
          </ImgContainer>
        </TopWrapper>
      </Wrapper>
    )}
  </>

);

BookingCard.propTypes = {
  bookingDetail: PropTypes.shape([]).isRequired,

};

export default BookingCard;

import React from 'react';
import styled from 'styled-components';
import Calendar from './components/Calendar';

const Container = styled.div`
  overflow: hidden;
  width: 45rem;
  height: 41rem;
  border-radius: 4rem;
  margin: 1rem auto;
  background-color: #fff;
  text-align: center;
  margin-bottom: 5%;
`;

const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 0.7rem;
  color: #171a4f;
  font: bold 30px 'Baloo';
  font-family: 'Poppins';
`;

const Info = styled.div`
  font: 1rem 'Roboto';
`;

const Legend = styled.div`
  font-family: 'Roboto';
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: stretch;
  height: 3.2rem;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 1.5rem;
`;

const LegendImg = styled.span`
  display: inline-block;
  margin: 0 1rem 0 3.2rem;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${({ color }) => color};
`;

const AddSession = () => (
  <Container>
    <Title>Add Availability</Title>
    <Info>Please click on the date you wish to add availability in</Info>
    <Legend>
      <LegendImg color="#127785" />
      Available
      <LegendImg color="#AFAAC2" />
      limited
      <LegendImg color="#77AFCF" />
      Fully Booked
      <LegendImg color="#DCE9EF" />
      Closed
    </Legend>
    <Calendar />
  </Container>
);

export default AddSession;

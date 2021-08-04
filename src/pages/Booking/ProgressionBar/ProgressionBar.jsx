import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const BREAKPOINT = {
  small: 320,
  medium: 720,
  large: 1024,
};

const Container = styled.div`
  width: 29rem;
  margin: 5rem auto 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';

  @media only screen and (max-width: ${BREAKPOINT.medium}px) {
    width: 18rem;
  }

  @media only screen and (max-width: ${BREAKPOINT.small}px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2rem;
    width: auto;
  }
`;

const StageWrapper = styled.div`
  width: max-content;
  position: relative;
`;

const Stage = styled.div`
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  border: 1px solid #181b50;
  border-radius: 50%;
  text-align: center;
  transition: all 0.2s;
  &::after {
    content: '';
    display: ${({ children }) => (children === 1 ? 'none' : 'block')};
    background-color: ${({ state, children }) => (state >= children ? '#181b50' : '#c7c7c7')};
    width: 121px;
    height: 1px;
    position: absolute;
    right: 4.5rem;
    top: 2rem;
    transition: all 0.2s;

    @media only screen and (max-width: ${BREAKPOINT.medium}px) {
      width: 40px;
      right: 4.25rem;
    }

    @media only screen and (max-width: ${BREAKPOINT.small}px) {
      display: none;
    }
  }

  ${({ state, children }) => ({
    true: css`
        background-color: #181b50;
        color: #fff;
      `,
    false: css`
        background-color: #fff;
        color: #181b50;
      `,
  }[state >= children])}
  box-shadow:0px 15px 10px -15px #000;
`;

const StageDescription = styled.div`
  font-size: 14px;
  white-space: nowrap;
  position: absolute;
  left: 2rem;
  transform: translate(-50%, 8px);

  @media only screen and (max-width: ${BREAKPOINT.small}px) {
    margin-left: 90px;
    margin-top: -50px;
  }
`;

const ProgressionBar = ({ step }) => {
  const stepTable = [
    { key: 1, stage: 1, description: 'Booking Details' },
    { key: 2, stage: 2, description: 'Payment' },
    { key: 3, stage: 3, description: 'Confirm' },
  ];
  return (
    <Container>
      {stepTable.map(({ key, stage, description }) => (
        <StageWrapper key={key}>
          <Stage state={step}>{stage}</Stage>
          <StageDescription>{description}</StageDescription>
        </StageWrapper>
      ))}
    </Container>
  );
};

ProgressionBar.propTypes = {
  step: PropTypes.number.isRequired,
};
Stage.propTypes = {
  state: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired,
};
StageDescription.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ProgressionBar;

// 此按钮为用于所有回退功能的按钮
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ButtonTo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  letter-spacing: 0.46px;
  margin: 5rem 0 1rem 0;
  color: #818181;
  &:hover {
    color: red;
    cursor: pointer;
  }
  ${(props) => {
    switch (props.size) {
      case 'lg':
        return css`
          width: 193px;
        `;
      case 'md':
        return css`
          width: 155px;
        `;
      default:
        return css`
          width: 117px;
        `;
    }
  }}
`;

const ButtonGoBack = ({ children, size, onClick }) => (
  <ButtonTo onClick={onClick} size={size}>
    {children}
  </ButtonTo>
);
ButtonGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonGoBack;

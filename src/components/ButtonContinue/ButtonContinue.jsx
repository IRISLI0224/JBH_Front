import styled, { css } from 'styled-components';

const ButtonContinue = styled.button`
  font-family: 'Roboto';
  letter-spacing: 0.46px;
  border: none;
  border-radius: 0.3rem;
  background-color: rgb(24, 28, 77);
  color: #fff;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    ({
      true: css`
        background-color: grey;
        cursor: initial;
      `,
    }[props.disabled || false])}
`;

export default ButtonContinue;

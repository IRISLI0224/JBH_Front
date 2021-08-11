import styled, { css } from 'styled-components';

const ServerMsg = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 2rem;
  margin-top: 2rem;
  border-radius: 4px;
  font-family: 'Roboto';
  font-size: 13px;
  ${(props) =>
    ({
      error: css`
        color: red;
        background-color: #fdecea;
      `,
      success: css`
        color: green;
        background-color: #e5ffe5;
      `,
    }[props.status])}
`;

export default ServerMsg;

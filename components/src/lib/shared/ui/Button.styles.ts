import styled from '@emotion/styled';
// import { css } from '@emotion/react';

export const ConfirmButton = styled.button`
  width: 80px;
  height: 36px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 0.1s ease-in-out;
  :hover {
    background-color: rgb(100, 100, 100);
  }
`;

export const CancelButton = styled.button`
  width: 80px;
  height: 36px;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 0.1s ease-in-out;
  :hover {
    background-color: rgb(238, 238, 238);
  }
`;

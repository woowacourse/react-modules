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
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.5);
  }
`;

export const CloseButton = styled.button`
  width: 80px;
  height: 36px;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 0.1s ease-in-out;
  :hover {
    background-color: rgb(220, 220, 220);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.5);
  }
`;

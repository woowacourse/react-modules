import { css } from '@emotion/react';

export const triggerButtonsContainer = css`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const dialogContent = css`
  padding: 16px;

  h2 {
    margin-top: 0;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }
`;

export const buttonContainer = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    padding: 8px 16px;
    background-color: #0077ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: #0066dd;
    }
  }
`;

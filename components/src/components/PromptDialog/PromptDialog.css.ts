import { css } from '@emotion/react';

export const dialogContainer = css`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  text-align: center;
`;

export const titleStyle = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const inputContainer = css`
  margin-bottom: 24px;
`;

export const input = css`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const cancelButton = css`
  padding: 12px 24px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background-color: white;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const confirmButton = css`
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  background-color: #333;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

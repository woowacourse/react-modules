import { css } from '@emotion/react';

export const ModalLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const center = (maxWidth: number) => css`
  width: 100%;
  max-width: ${maxWidth}px;
  background-color: white;
`;

export const bottom = (maxWidth: number) => css`
  position: fixed;
  width: 100%;
  max-width: ${maxWidth}px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
`;

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

export const center = css`
  background-color: white;
`;

export const bottom = css`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: white;
`;

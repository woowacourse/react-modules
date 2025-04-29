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

const baseModalStyle = (maxWidth: number) => css`
  width: 100%;
  max-width: ${maxWidth}px;
  background-color: white;
  background: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
`;

export const center = (maxWidth: number) => css`
  ${baseModalStyle(maxWidth)}
`;

export const bottom = (maxWidth: number) => css`
  ${baseModalStyle(maxWidth)}
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const ModalHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = css`
  background-color: transparent;
  border: none;

  cursor: pointer;
`;

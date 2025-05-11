import { css } from '@emotion/css';
import { Position, Size } from '../types/Modal.type';

export const ModalBackdrop = css`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
`;

const ModalFrameWidth = (size: Size) => {
  if (!size) {
    return '100%';
  }
  if (size === 'small') {
    return '320px';
  }
  if (size === 'medium') {
    return '480px';
  }
  if (size === 'large') {
    return '600px';
  }
};

export const ModalFrame = (position: Position, size: Size) => css`
  background-color: white;
  padding: 30px;
  width: ${position === 'center' ? ModalFrameWidth(size) : '100dvw'};
  min-width: ${position === 'center' && '300px'};
  max-width: ${position === 'center' && '80dvw'};
  border-radius: ${position === 'center' ? '8px' : '8px 8px 0 0'};
  position: ${position === 'bottom' && 'absolute'};
  bottom: ${position === 'bottom' && '0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ModalHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ModalCloseButton = css`
  all: unset;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`;

export const ModalContent = css`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const ButtonBar = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

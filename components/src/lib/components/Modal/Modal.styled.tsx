import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ModalProps } from '.';

const positionStyle = {
  center: css`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    animation: fadeIn 0.2s ease-out forwards;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  bottom: css`
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 16px 16px 0 0;
    animation: slideUp 0.2s ease-out forwards;

    @keyframes slideUp {
      0% {
        transform: translate(-50%, 100%);
      }
      100% {
        transform: translate(-50%, 0);
      }
    }
  `,
} as const;

export const StyledBackDrop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(31, 41, 55, 0.2);
`;

export const StyledModalContainer = styled.div<
  Pick<ModalProps, 'maxWidth' | 'position' | 'zIndex'>
>`
  box-sizing: border-box;
  width: 90%;
  max-width: ${({ maxWidth }) => (typeof maxWidth === 'number' ? `${maxWidth}rem` : maxWidth)};
  height: auto;
  position: fixed;
  z-index: ${({ zIndex }) => zIndex ?? 10};
  background-color: white;
  padding: 24px 32px;

  ${({ position }) => positionStyle[position ?? 'center']};
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

export const StyledIcon = styled.img`
  width: auto;
  height: auto;
`;

export const StyledCloseButton = styled.button`
  width: 27px;
  height: 27px;
  border: none;
  cursor: pointer;
  z-index: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(31, 41, 55, 0.1);
    border-radius: 20%;
  }
`;

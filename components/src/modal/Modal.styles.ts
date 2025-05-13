import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { PositionType, SizeType } from './types';

export const StyledModalContainer = styled.dialog<{
  position: PositionType;
  size: SizeType;
}>`
  box-sizing: border-box;
  min-width: 400px;
  padding: 0;
  position: relative;

  border: none;
  border-radius: 8px;

  &::backdrop {
    background-color: #000000;
    opacity: 0.35;
  }

  ${({ position }) => positionStyles[position]}
  ${({ position, size }) => position !== 'bottom' && modalContainerSize[size]}
`;

const defaultModalContainer = css`
  @media (max-width: 600px) {
    width: calc(100vw - 72px);
  }
`;

const bottomModalContainer = css`
  margin-bottom: 0;
  width: 100%;
  max-width: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const positionStyles: Record<PositionType, ReturnType<typeof css>> = {
  center: defaultModalContainer,
  bottom: bottomModalContainer,
};

const modalContainerSize: Record<SizeType, ReturnType<typeof css>> = {
  small: css`
    width: 320px;
  `,
  medium: css`
    width: 480px;
  `,
  large: css`
    width: 600px;
  `,
};

export const ModalWrapper = styled.div<{ position: PositionType }>`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  ${({ position }) => modalWrapperGap[position]}
`;

const modalWrapperGap: Record<PositionType, ReturnType<typeof css>> = {
  center: css`
    gap: 16px;
  `,
  bottom: css`
    gap: 24px;
  `,
};

export const StyledTitle = styled.h2`
  margin: 0;
  justify-self: flex-start;
  font-size: 24px;
  font-weight: 700;
`;

export const StyledCloseButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 24px;
  right: 32px;
  cursor: pointer;
`;

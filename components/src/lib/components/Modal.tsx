import { ComponentProps } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Portal } from './Portal';

import Close from '../assets/Close.svg';

export type Props = {
  /**
   * If true, the modal will be open
   */
  isOpen: boolean;
  /**
   * position of the modal
   * @default 'center'
   */
  position?: 'center' | 'bottom';
  /**
   * The title of the modal
   */
  title: string;
  /**
   * Indicate close button visibility
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * close function to be called when the close button is clicked
   * @default 'Close'
   */
  onClose: VoidFunction;
  /**
   * Function to be called when the backdrop is clicked
   */
  onOutsideClick?: (e: React.MouseEvent) => void;
  /**
   * The maximum width of the modal
   * @type {string | number}
   * @description It can be a string (e.g. '400px') or a number (e.g. 400).
   * @default '400px'
   */
  maxWidth?: string | number;
  /**
   * The z-index of the modal.
   * @type {number}
   * @description It can be a number (e.g. 10).
   * @default 10
   */
  zIndex?: number;
  /**
   * The content of the modal
   */
  children: React.ReactNode;
} & ComponentProps<'div'>;

export const Modal = ({
  isOpen,
  position = 'center',
  title,
  showCloseButton,
  onClose,
  onOutsideClick,
  maxWidth = '400px',
  zIndex = 10,
  children,
  ...props
}: Props) => {
  return (
    <Portal isOpen={isOpen}>
      <StyledBackDrop onClick={onOutsideClick} aria-hidden="true" />
      <StyledModalContainer
        role="dialog"
        aria-modal="true"
        position={position}
        maxWidth={maxWidth}
        zIndex={zIndex}
        {...props}
      >
        <StyledModalHeader aria-label={title}>
          {title}
          {showCloseButton && (
            <StyledCloseButton onClick={onClose} aria-label="closeModalButton">
              <StyledIcon src={Close} alt="close" />
            </StyledCloseButton>
          )}
        </StyledModalHeader>
        {children}
      </StyledModalContainer>
    </Portal>
  );
};

const StyledBackDrop = styled.div`
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

const StyledModalContainer = styled.div<Pick<Props, 'maxWidth' | 'position' | 'zIndex'>>`
  width: 100%;
  max-width: ${({ maxWidth }) => (typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth)};
  height: auto;
  position: fixed;
  z-index: ${({ zIndex }) => zIndex ?? 10};
  background-color: white;
  padding: 24px 32px;
  ${({ position }) => positionStyle[position ?? 'center']};
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;
const StyledIcon = styled.img`
  width: auto;
  height: auto;
`;

const StyledCloseButton = styled.button`
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

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Portal from './Portal';

type ModalProps = {
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
   * The content of the modal
   */
  children: React.ReactNode;
};

export const Modal = ({
  isOpen,
  position = 'center',
  title,
  showCloseButton,
  onClose,
  children,
}: ModalProps) => {
  return (
    <Portal isOpen={isOpen}>
      <StyledBackDrop />
      <StyledModalContainer position={position}>
        <StyledModalHeader>
          <h1>{title}</h1>
          {showCloseButton && <button onClick={onClose}>closeButton</button>}
        </StyledModalHeader>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalContainer>
    </Portal>
  );
};

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(31, 41, 55, 0.5);
`;

const positionStyle = {
  center: css`
    top: 25%;
    left: 25%;
  `,
  bottom: css`
    bottom: 0;
    left: 50%;
    width: 100%;
    max-width: 600px;
    height: auto;
    max-height: 80%;
    border-radius: 16px 16px 0 0;
  `,
} as const;

const StyledModalContainer = styled.div<{ position?: 'center' | 'bottom' }>`
  position: absolute;
  ${({ position }) => positionStyle[position ?? 'center']};
`;

const StyledModalHeader = styled.div``;

const StyledModalContent = styled.div``;

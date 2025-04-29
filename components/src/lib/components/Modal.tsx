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
  position?: 'top' | 'center' | 'bottom';
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
  position,
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

const StyledBackDrop = styled.div``;

const StyledModalContainer = styled.div<{ position?: 'top' | 'center' | 'bottom' }>``;

const StyledModalHeader = styled.div``;

const StyledModalContent = styled.div``;

import { ComponentProps, useCallback, useEffect } from 'react';

import styled from '@emotion/styled';

import ModalBackdrop from './Modal.Backdrop';
import ModalContainer from './Modal.Container';
import ModalTitle from './Modal.Title';
import Portal from './Portal';
import { ModalContext, useModalContext } from './useModalContext';

import closeIcon from '../../assets/Close.svg';

export type ModalProps = {
  /**
   * If true, the modal will be open
   */
  isOpen: boolean;

  /**
   * close function to be called when the close button is clicked
   * @default 'Close'
   */
  onClose: VoidFunction;

  /**
   * The content of the modal
   */
  children: React.ReactNode;

  /**
   * The z-index of the modal
   * @default 1000
   */
  $zIndex?: number;

  /**
   * If true, the modal will be closed by Escape key press
   * @default true
   */
  closeByEscapeKey?: boolean;
} & ComponentProps<'div'>;

type ModalDescriptionProps = {
  /**
   * The description of the modal
   */
  description?: string;
};

const ModalDescription = ({ description }: ModalDescriptionProps) => {
  return (
    <>
      {description && (
        <StyledModalDescription aria-label={description}>{description}</StyledModalDescription>
      )}
    </>
  );
};

const ModalCloseButton = () => {
  const { onClose } = useModalContext();

  return (
    <StyledCloseButton type="button" onClick={onClose} aria-label="closeModalButton">
      <StyledCloseIcon src={closeIcon} alt="closeIcon" />
    </StyledCloseButton>
  );
};

const ModalButtonWrapper = ({ children }: { children: React.ReactNode }) => {
  return <StyledModalButtonWrapper>{children}</StyledModalButtonWrapper>;
};

const ModalCancelButton = ({ children }: { children: React.ReactNode }) => {
  const { onClose } = useModalContext();

  return (
    <StyledCancelButton type="button" onClick={onClose} aria-label="cancelButton">
      {children}
    </StyledCancelButton>
  );
};

const ModalConfirmButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <StyledConfirmButton type="button" onClick={onClick} aria-label="confirmButton">
      {children}
    </StyledConfirmButton>
  );
};

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, closeByEscapeKey = true } = props;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeByEscapeKey) {
        onClose();
      }
    },
    [closeByEscapeKey, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <ModalContext.Provider value={props}>
      <Portal isOpen={isOpen}>{children}</Portal>
    </ModalContext.Provider>
  );
};

Modal.Backdrop = ModalBackdrop;
Modal.Container = ModalContainer;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.CloseButton = ModalCloseButton;
Modal.ButtonWrapper = ModalButtonWrapper;
Modal.CancelButton = ModalCancelButton;
Modal.ConfirmButton = ModalConfirmButton;

const StyledModalDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 0;
  &:hover {
    background-color: rgba(31, 41, 55, 0.1);
    border-radius: 20%;
  }
`;

const StyledCloseIcon = styled.img`
  width: 27px;
  height: 27px;
`;

const StyledModalButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const StyledCancelButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 8px 0;
  background-color: #f3f4f6;
  color: #333333;
  cursor: pointer;
  border: 1px solid #333333;
  border-radius: 4px;
`;

const StyledConfirmButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 8px 4px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

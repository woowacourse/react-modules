import { ComponentProps, createContext, useCallback, useContext, useEffect } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Portal } from './Portal';

import closeIcon from '../assets/Close.svg';

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
} & ComponentProps<'div'>;

type ModalContainerProps = {
  /**
   * The content of the modal
   */
  children: React.ReactNode;
  /**
   * position of the modal
   * @default 'center'
   */
  position?: 'center' | 'bottom';
  /**
   * Custom styles for the modal
   */
  containerStyle?: React.CSSProperties;
};

type ModalTitleProps = {
  /**
   * The title of the modal
   */
  title: string;
};

const ModalContext = createContext<ModalProps | undefined>(undefined);

const useModalContext = () => {
  const props = useContext(ModalContext);

  if (!props) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }

  return props;
};

const ModalBackdrop = () => {
  const { onClose, $zIndex = 1000 } = useModalContext();

  return <StyledBackDrop onClick={onClose} aria-hidden="true" backdropZIndex={$zIndex} />;
};

const ModalContainer = ({
  children,
  position = 'center',
  containerStyle = {},
}: ModalContainerProps) => {
  const { $zIndex = 1000, ...props } = useModalContext();

  return (
    <StyledModalContainer
      role="dialog"
      aria-modal="true"
      position={position}
      modalZIndex={$zIndex + 1}
      containerStyle={containerStyle}
      {...props}
    >
      {children}
    </StyledModalContainer>
  );
};

const ModalTitle = ({ title }: ModalTitleProps) => {
  return <StyledModalTitle aria-label={title}>{title}</StyledModalTitle>;
};

const ModalCloseButton = ({ showCloseButton = true }: { showCloseButton?: boolean }) => {
  const { onClose } = useModalContext();

  return (
    <>
      {showCloseButton && (
        <StyledCloseButton type="button" onClick={onClose} aria-label="closeModalButton">
          <StyledCloseIcon src={closeIcon} alt="closeIcon" />
        </StyledCloseButton>
      )}
    </>
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
  const { isOpen, onClose, children } = props;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
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
Modal.CloseButton = ModalCloseButton;
Modal.ButtonWrapper = ModalButtonWrapper;
Modal.CancelButton = ModalCancelButton;
Modal.ConfirmButton = ModalConfirmButton;

const StyledBackDrop = styled.div<{ backdropZIndex: number }>`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ backdropZIndex }) => backdropZIndex};
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

const StyledModalContainer = styled.div<{ modalZIndex: number } & ModalContainerProps>`
  width: 100%;
  max-width: 400px;
  height: auto;
  position: fixed;
  background-color: white;
  padding: 18px 24px;
  ${({ position }) => positionStyle[position ?? 'center']};
  ${({ containerStyle }) => ({ ...containerStyle })};
  z-index: ${({ modalZIndex }) => modalZIndex};
`;

const StyledModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
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

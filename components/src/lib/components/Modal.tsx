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

type ModalHeaderProps = {
  /**
   * The title of the modal
   */
  title: string;
  /**
   * Indicate close button visibility
   * @default true
   */
  showCloseButton?: boolean;
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

const ModalHeader = ({ title, showCloseButton = true }: ModalHeaderProps) => {
  const { onClose } = useModalContext();

  return (
    <StyledModalHeader aria-label={title}>
      {title}
      {showCloseButton && (
        <StyledCloseButton type="button" onClick={onClose} aria-label="closeModalButton">
          <StyledCloseIconButton src={closeIcon} alt="closeIcon" />
        </StyledCloseButton>
      )}
    </StyledModalHeader>
  );
};

export const Modal = (props: ModalProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        props.onClose();
      }
    },
    [props]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <ModalContext.Provider value={props}>
      <Portal isOpen={props.isOpen}>{props.children}</Portal>
    </ModalContext.Provider>
  );
};

Modal.Backdrop = ModalBackdrop;
Modal.Container = ModalContainer;
Modal.Header = ModalHeader;

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
  padding: 24px 32px;
  ${({ position }) => positionStyle[position ?? 'center']};
  ${({ containerStyle }) => ({ ...containerStyle })};
  z-index: ${({ modalZIndex }) => modalZIndex};
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const StyledCloseButton = styled.button`
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

const StyledCloseIconButton = styled.img`
  width: 27px;
  height: 27px;
`;

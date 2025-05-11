import { ComponentProps } from 'react';

import {
  StyledBackDrop,
  StyledCloseButton,
  StyledIcon,
  StyledModalContainer,
  StyledModalHeader,
} from './Modal.styled';
import { Portal } from './Portal';

import Close from '../../assets/Close.svg';
import { useFocusTrap } from '../../hooks/useFocusTrap';

export type ModalProps = {
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
   * @default true
   */
  closeOnOutsideClick?: boolean;
  /**
   * The maximum width of the modal
   * @type {string | number}
   * @description It can be a string (e.g. '25rem') or a number (e.g. 25).  1rem = 16px
   * @example '25rem' or 25
   * @default '25rem'
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

type ModalBaseProps = Pick<ModalProps, 'isOpen' | 'closeOnOutsideClick' | 'onClose' | 'children'>;

export const BaseModal = ({ isOpen, closeOnOutsideClick, onClose, children }: ModalBaseProps) => {
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target === e.currentTarget && closeOnOutsideClick) {
      onClose();
    }
  };

  return (
    <Portal isOpen={isOpen}>
      <StyledBackDrop aria-hidden={isOpen ? 'true' : 'false'} onClick={handleOutsideClick} />
      {children}
    </Portal>
  );
};

type ModalContentProps = Pick<ModalProps, 'position' | 'maxWidth' | 'zIndex' | 'children'>;

export const ModalContent = ({
  position = 'center',
  maxWidth = '400px',
  zIndex = 10,
  children,
  ...props
}: ModalContentProps) => (
  <StyledModalContainer
    role="dialog"
    aria-modal="true"
    position={position}
    maxWidth={maxWidth}
    zIndex={zIndex}
    {...props}
  >
    {children}
  </StyledModalContainer>
);

type ModalHeaderProps = Pick<ModalProps, 'title' | 'showCloseButton' | 'onClose'>;

export const ModalHeader = ({ title, showCloseButton = true, onClose }: ModalHeaderProps) => (
  <StyledModalHeader aria-label={title}>
    {title}
    {showCloseButton && (
      <StyledCloseButton onClick={onClose} aria-label="closeModalButton">
        <StyledIcon src={Close} alt="close" />
      </StyledCloseButton>
    )}
  </StyledModalHeader>
);

export const Modal = ({
  isOpen,
  position = 'center',
  title,
  onClose,
  maxWidth = '400px',
  showCloseButton = true,
  closeOnOutsideClick = true,
  zIndex = 10,
  children,
  ...props
}: ModalProps) => {
  const { refContainer, handleKeyDown } = useFocusTrap(isOpen);
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} closeOnOutsideClick={closeOnOutsideClick}>
      <ModalContent
        ref={refContainer}
        onKeyDown={handleKeyDown}
        position={position}
        maxWidth={maxWidth}
        zIndex={zIndex}
        {...props}
      >
        <ModalHeader title={title} showCloseButton={showCloseButton} onClose={onClose} />
        {children}
      </ModalContent>
    </BaseModal>
  );
};

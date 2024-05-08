import * as Styled from './Modal.styled';

import { ButtonProps } from '../Button/Button';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import useBlockedScroll from '../hooks/useBlockedScroll';
import useEscKeyDown from '../hooks/useEscKeyDown';

export type ModalSize = 'small' | 'medium' | 'large';
export type ModalPosition = 'center' | 'bottom';
export type ButtonPosition = 'row' | 'column';
export type ButtonJustifyContent = 'center' | 'left' | 'right';

export interface ModalProps {
  isOpened: boolean;
  closeModal: () => void;
  title?: string;
  description?: string;
  size?: ModalSize;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  buttonPosition?: ButtonPosition;
  buttonJustifyContent?: ButtonJustifyContent;
  primaryColor?: string;
  showCloseButton?: boolean;
}

const Modal = ({
  isOpened,
  closeModal,
  title = '',
  description = '',
  size = 'large',
  children,
  modalPosition = 'center',
  primaryButton,
  secondaryButton,
  buttonPosition = 'row',
  buttonJustifyContent = 'center',
  primaryColor,
  showCloseButton = false,
}: ModalProps) => {
  useBlockedScroll(isOpened);
  useEscKeyDown(closeModal);

  const modalHeaderProps = {
    closeModal,
    title,
    showCloseButton,
  };

  const modalFooterProps = {
    closeModal,
    primaryButton,
    secondaryButton,
    buttonPosition,
    buttonJustifyContent,
    primaryColor,
  };

  return (
    <>
      {isOpened && (
        <Styled.DimmedLayer onClick={closeModal}>
          <Styled.ModalContainer
            modalPosition={modalPosition}
            size={size}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ModalHeader {...modalHeaderProps} />
            <Styled.ModalBody>
              <Styled.ModalDescription>{description}</Styled.ModalDescription>
              <div>{children}</div>
            </Styled.ModalBody>
            <ModalFooter {...modalFooterProps} />
          </Styled.ModalContainer>
        </Styled.DimmedLayer>
      )}
    </>
  );
};

export default Modal;

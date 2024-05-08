import Button, { ButtonProps } from '../Button/Button';

import { useEffect } from 'react';
import ModalDimmedLayer from './ModalDimmedLayer/ModalDimmedLayer';
import ModalContainer from './ModalContainer/ModalContainer';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalTitle from './ModalTitle/ModalTitle';
import ModalCloseButton from './ModalCloseButton/ModalCloseButton';
import ModalBody from './ModalBody/ModalBody';
import ModalDescription from './ModalDescription/ModalDescription';
import ModalButtonContainer from './ModalButtonContainer/ModalButtonContainer';

interface ModalProps {
  size?: ModalSize;
  isOpened: boolean;
  onClose: () => void;
  zIndex?: number;
  title?: string;
  description?: string;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  buttonPosition?: ButtonPosition;
  primaryColor?: string;
  showCloseButton?: boolean;
}

const Modal = ({
  size = 'small',
  isOpened,
  onClose,
  zIndex = 0,
  title = '',
  description = '',
  children,
  modalPosition = 'center',
  primaryButton,
  secondaryButton,
  buttonPosition = 'row',
  primaryColor,
  showCloseButton = false,
}: ModalProps) => {

  useEffect(() => {
    if (isOpened) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
    document.body.addEventListener('keydown', handleKeyDownEsc);
    return document.body.removeEventListener('keydown', handleKeyDownEsc);
  }, [isOpened])

  const handleKeyDownEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpened) {
      onClose();
    }
  };

  return (
    <>
      {isOpened && (
        <ModalDimmedLayer onClick={onClose} zIndex={zIndex}>
          <ModalContainer
            size={size}
            modalPosition={modalPosition}
          >
            <ModalHeader>
              <ModalTitle title={title} />
              <ModalCloseButton showCloseButton={showCloseButton} onClick={onClose} />
            </ModalHeader>
            <ModalBody>
              <ModalDescription description={description} />
              <>{children}</>
            </ModalBody>
            <ModalButtonContainer buttonPosition={buttonPosition}>
              {primaryButton && (
                <Button
                  text={primaryButton.text}
                  onClick={primaryButton.onClick}
                  size={primaryButton.size ?? 'small'}
                  width={primaryButton.width ?? 'full'}
                  buttonStyle={primaryButton.buttonStyle ?? 'primary'}
                  primaryColor={
                    primaryColor ?? primaryButton.primaryColor ?? '#333333'
                  }
                />
              )}
              {secondaryButton && (
                <Button
                  text={secondaryButton.text}
                  onClick={secondaryButton.onClick ?? onClose}
                  size={secondaryButton.size ?? 'small'}
                  width={secondaryButton.width ?? 'full'}
                  buttonStyle={secondaryButton.buttonStyle ?? 'border'}
                  primaryColor={
                    primaryColor ?? secondaryButton.primaryColor ?? '#333333'
                  }
                />
              )}
            </ModalButtonContainer>
          </ModalContainer>
        </ModalDimmedLayer>
      )}
    </>
  );
};

export default Modal;

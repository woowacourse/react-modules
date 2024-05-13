import Button, { ButtonProps } from '../Button/Button';

import { useEffect } from 'react';
import { ModalProvider } from '.';
import { createPortal } from 'react-dom';

export interface DefaultModalProps {
  size?: ModalSize;
  isOpened: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  buttonPosition?: ButtonPosition;
  primaryColor?: string;
  showCloseButton?: boolean;
}

interface ModalProps extends DefaultModalProps {
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}

const Modal = ({
  size = 'small',
  isOpened,
  onClose,
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

  return createPortal(
    <>
      {isOpened && (
        <ModalProvider.DimmedLayer onClick={onClose}>
          <ModalProvider.Container
            size={size}
            modalPosition={modalPosition}
          >
            <ModalProvider.Header>
              <ModalProvider.Title title={title} />
              <ModalProvider.CloseButton showCloseButton={showCloseButton} onClick={onClose} />
            </ModalProvider.Header>
            <ModalProvider.Body>
              <ModalProvider.Description description={description} />
              <>{children}</>
            </ModalProvider.Body>
            <ModalProvider.ButtonContainer buttonPosition={buttonPosition}>
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
            </ModalProvider.ButtonContainer>
          </ModalProvider.Container>
        </ModalProvider.DimmedLayer>
      )}
    </>
    , document.body);
};

export default Modal;

import Button from '../Button/Button';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DefaultModalProps } from './Modal';
import { ModalProvider } from './ModalProvider';

interface AlertModalProps extends DefaultModalProps {
  onConfirm?: () => void;
}

const AlertModal = ({
  size = 'small',
  isOpened,
  onClose,
  onConfirm = () => { },
  title = '',
  description = '',
  children,
  modalPosition = 'center',
  buttonPosition = 'row',
  primaryColor,
  showCloseButton = false,
}: AlertModalProps) => {

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
              <Button
                text={'확인'}
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                size={'small'}
                width={modalPosition === 'bottom' || buttonPosition === 'column' ? 'full' : 'fixed'}
                buttonStyle={'primary'}
                primaryColor={
                  primaryColor ?? '#333333'
                }
              />
            </ModalProvider.ButtonContainer>
          </ModalProvider.Container>
        </ModalProvider.DimmedLayer>
      )}
    </>, document.body
  );
};

export default AlertModal;

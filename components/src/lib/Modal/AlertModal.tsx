import Button from '../Button/Button';

import { useEffect } from 'react';
import ModalDimmedLayer from './ModalDimmedLayer/ModalDimmedLayer';
import ModalContainer from './ModalContainer/ModalContainer';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalTitle from './ModalTitle/ModalTitle';
import ModalCloseButton from './ModalCloseButton/ModalCloseButton';
import ModalBody from './ModalBody/ModalBody';
import ModalDescription from './ModalDescription/ModalDescription';
import ModalButtonContainer from './ModalButtonContainer/ModalButtonContainer';

interface AlertModalProps {
  size?: ModalSize;
  isOpened: boolean;
  onClose: () => void;
  zIndex?: number;
  title?: string;
  description?: string;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  buttonPosition?: ButtonPosition;
  primaryColor?: string;
  showCloseButton?: boolean;
}

const AlertModal = ({
  size = 'small',
  isOpened,
  onClose,
  zIndex = 0,
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
              <Button
                text={'확인'}
                onClick={onClose}
                size={'small'}
                width={modalPosition === 'bottom' || buttonPosition === 'column' ? 'full' : 'fixed'}
                buttonStyle={'primary'}
                primaryColor={
                  primaryColor ?? '#333333'
                }
              />
            </ModalButtonContainer>
          </ModalContainer>
        </ModalDimmedLayer>
      )}
    </>
  );
};

export default AlertModal;

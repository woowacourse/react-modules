import Button from '../Button/Button';

import { useEffect, useState } from 'react';
import ModalDimmedLayer from './ModalDimmedLayer/ModalDimmedLayer';
import ModalContainer from './ModalContainer/ModalContainer';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalTitle from './ModalTitle/ModalTitle';
import ModalCloseButton from './ModalCloseButton/ModalCloseButton';
import ModalBody from './ModalBody/ModalBody';
import ModalDescription from './ModalDescription/ModalDescription';
import ModalButtonContainer from './ModalButtonContainer/ModalButtonContainer';
import ModalInputField from './ModalInputField/ModalInputField';

interface PromptModalProps {
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

  placeholder?: string;
  onConfirm: (value: string) => void;
}

const PromptModal = ({
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
  placeholder = '',
  onConfirm,
}: PromptModalProps) => {

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

  const [value, setValue] = useState('');

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
              <ModalInputField placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
              <>{children}</>
            </ModalBody>
            <ModalButtonContainer buttonPosition={buttonPosition}>
              <Button
                text={'확인'}
                onClick={() => onConfirm(value)}
                size={'small'}
                width={modalPosition === 'bottom' || buttonPosition === 'column' ? 'full' : 'fixed'}
                buttonStyle={'primary'}
                primaryColor={
                  primaryColor ?? '#333333'
                }
              />
              <Button
                text={'취소'}
                onClick={onClose}
                size={'small'}
                width={modalPosition === 'bottom' || buttonPosition === 'column' ? 'full' : 'fixed'}
                buttonStyle={'border'}
              />
            </ModalButtonContainer>
          </ModalContainer>
        </ModalDimmedLayer>
      )}
    </>
  );
};

export default PromptModal;

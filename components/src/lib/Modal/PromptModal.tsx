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
import ModalInputField, { ValidateResult } from './ModalInputField/ModalInputField';
import { createPortal } from 'react-dom';
import { DefaultModalProps } from './Modal';

interface PromptModalProps extends DefaultModalProps {
  placeholder?: string;
  onConfirm: (value: string) => void;
  initialValue?: string;
  validateOnChange?: (value: string) => ValidateResult;
  validateOnBlur?: (value: string) => ValidateResult;
}

const PromptModal = ({
  size = 'small',
  isOpened,
  onClose,
  title = '',
  description = '',
  children,
  modalPosition = 'center',
  buttonPosition = 'row',
  primaryColor,
  showCloseButton = false,
  placeholder = '',
  onConfirm,
  initialValue = '',
  validateOnChange = () => ({ isValid: true, errorMessage: '' }),
  validateOnBlur = () => ({ isValid: true, errorMessage: '' }),
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

  const [value, setValue] = useState(initialValue)

  return createPortal(
    <>
      {isOpened && (
        <ModalDimmedLayer onClick={onClose}>
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
              <ModalInputField placeholder={placeholder} value={value} updateValue={setValue} validateOnChange={validateOnChange} validateOnBlur={validateOnBlur} />
              <>{children}</>
            </ModalBody>
            <ModalButtonContainer buttonPosition={buttonPosition}>
              <Button
                text={'확인'}
                onClick={() => {
                  onConfirm(value);
                  onClose();
                }}
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
    </>, document.body
  );
};

export default PromptModal;

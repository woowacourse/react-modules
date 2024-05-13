import Button from '../Button/Button';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { DefaultModalProps } from './Modal';
import { ModalProvider } from './ModalProvider';
import { ValidateResult } from './ModalInputField/ModalInputField';

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
              <ModalProvider.InputField placeholder={placeholder} value={value} updateValue={setValue} validateOnChange={validateOnChange} validateOnBlur={validateOnBlur} />
              <>{children}</>
            </ModalProvider.Body>
            <ModalProvider.ButtonContainer buttonPosition={buttonPosition}>
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
            </ModalProvider.ButtonContainer>
          </ModalProvider.Container>
        </ModalProvider.DimmedLayer>
      )}
    </>, document.body
  );
};

export default PromptModal;

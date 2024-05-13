import Button from '../Button/Button';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal, { DefaultModalProps } from './Modal';
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

  const [value, setValue] = useState(initialValue)

  return createPortal(
    <>
      {isOpened && (
        <Modal.DimmedLayer onClick={onClose} isOpened={isOpened} onClose={onClose}>
          <Modal.Container
            size={size}
            modalPosition={modalPosition}
          >
            <Modal.Header>
              <Modal.Title title={title} />
              <Modal.CloseButton showCloseButton={showCloseButton} onClick={onClose} />
            </Modal.Header>
            <Modal.Body>
              <Modal.Description description={description} />
              <Modal.InputField placeholder={placeholder} value={value} updateValue={setValue} validateOnChange={validateOnChange} validateOnBlur={validateOnBlur} />
              <>{children}</>
            </Modal.Body>
            <Modal.ButtonContainer buttonPosition={buttonPosition}>
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
            </Modal.ButtonContainer>
          </Modal.Container>
        </Modal.DimmedLayer>
      )}
    </>, document.body
  );
};

export default PromptModal;

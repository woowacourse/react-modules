import Button from '../Button/Button';

import { createPortal } from 'react-dom';
import Modal, { DefaultModalProps } from './Modal';

interface ConfirmModalProps extends DefaultModalProps {
  onConfirm: () => void;
}

const ConfirmModal = ({
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
  onConfirm,
}: ConfirmModalProps) => {


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
              <>{children}</>
            </Modal.Body>
            <Modal.ButtonContainer buttonPosition={buttonPosition}>
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

export default ConfirmModal;

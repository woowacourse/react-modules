import Button from '../Button/Button';

import { createPortal } from 'react-dom';
import Modal, { DefaultModalProps } from './Modal';

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
            </Modal.ButtonContainer>
          </Modal.Container>
        </Modal.DimmedLayer>
      )}
    </>, document.body
  );
};

export default AlertModal;

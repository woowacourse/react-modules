import Modal, { ModalProps } from '../Modal/Modal';
import ModalFooterContainer from '../Modal/@container/ModalFooterContainer/ModalFooterContainer';

import { MODAL_CUSTOM_STYLES } from '../Modal/Modal.constant';
import { ModalImplementationProps } from '../Modal/Modal.type';

const ConfirmModal: React.FC<React.PropsWithChildren<ModalImplementationProps & ModalProps>> = ({
  children,
  title,
  cancelButtonText = '취소',
  confirmButtonText = '확인',
  ...rest
}) => {
  return (
    <Modal {...rest}>
      <Modal.ModalHeader title={title} />
      <Modal.ModalContent style={{ ...MODAL_CUSTOM_STYLES.modalContent }}>{children}</Modal.ModalContent>
      <Modal.ModalFooter>
        <ModalFooterContainer>
          <Modal.ModalButton onClick={rest.onToggle} color="secondary" style={{ ...MODAL_CUSTOM_STYLES.cancelButton }}>
            {cancelButtonText}
          </Modal.ModalButton>
          <Modal.ModalButton onClick={rest.onToggle} color="primary" style={{ ...MODAL_CUSTOM_STYLES.confirmButton }}>
            {confirmButtonText}
          </Modal.ModalButton>
        </ModalFooterContainer>
      </Modal.ModalFooter>
    </Modal>
  );
};

export default ConfirmModal;

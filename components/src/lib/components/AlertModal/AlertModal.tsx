import Modal, { ModalProps } from '../Modal/Modal';

import ModalFooterContainer from '../Modal/@container/ModalFooterContainer/ModalFooterContainer';

import { MODAL_CUSTOM_STYLES } from '../Modal/Modal.constant';
import { ModalImplementationProps } from '../Modal/Modal.type';

interface AlertModalProps {
  contentLabel: string;
}

const AlertModal: React.FC<
  AlertModalProps & Pick<ModalImplementationProps, 'onConfirm' | 'title' | 'confirmButtonText'> & ModalProps
> = ({ confirmButtonText = '확인', title, contentLabel, onToggle, ...rest }) => {
  return (
    <Modal onToggle={onToggle} {...rest}>
      <Modal.ModalHeader title={title} />
      <Modal.ModalContent style={{ ...MODAL_CUSTOM_STYLES.modalContent }}>
        <Modal.ModalLabel>{contentLabel}</Modal.ModalLabel>
      </Modal.ModalContent>
      <Modal.ModalFooter>
        <ModalFooterContainer>
          <Modal.ModalButton onClick={onToggle} color="primary" style={{ ...MODAL_CUSTOM_STYLES.confirmButton }}>
            {confirmButtonText}
          </Modal.ModalButton>
        </ModalFooterContainer>
      </Modal.ModalFooter>
    </Modal>
  );
};

export default AlertModal;

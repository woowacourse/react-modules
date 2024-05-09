import Modal, { ModalProps } from '../Modal/Modal';
import ModalFooterContainer from '../Modal/@container/ModalFooterContainer/ModalFooterContainer';

import { MODAL_CUSTOM_STYLES } from '../Modal/Modal.constant';

import type { ModalImplementationProps } from '../Modal/Modal.type';

const PromptModal: React.FC<
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & ModalImplementationProps & ModalProps
> = ({ title, cancelButtonText = '확인', confirmButtonText = '취소', ...rest }) => {
  return (
    <Modal {...rest}>
      <Modal.ModalHeader title={title} />
      <Modal.ModalContent style={{ ...MODAL_CUSTOM_STYLES.modalContent }}>
        <Modal.ModalInput value={rest.value} onChange={rest.onChange} />
      </Modal.ModalContent>
      <Modal.ModalFooter>
        <ModalFooterContainer>
          <Modal.ModalButton onClick={rest.onConfirm} color="secondary" style={{ ...MODAL_CUSTOM_STYLES.cancelButton }}>
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

export default PromptModal;

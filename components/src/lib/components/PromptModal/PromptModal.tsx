import Modal, { ModalProps } from '../Modal/Modal';
import ModalFooterContainer from '../Modal/@container/ModalFooterContainer/ModalFooterContainer';

import { MODAL_CUSTOM_STYLES } from '../Modal/Modal.constant';

import type { ModalImplementationProps } from '../Modal/Modal.type';

const PromptModal: React.FC<
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & ModalImplementationProps & ModalProps
> = ({
  cancelButtonText = '확인',
  confirmButtonText = '취소',
  value,
  title,
  onConfirm,
  onToggle,
  onChange,
  ...rest
}) => {
  return (
    <Modal onToggle={onToggle} {...rest}>
      <Modal.ModalHeader title={title} />
      <Modal.ModalContent style={{ ...MODAL_CUSTOM_STYLES.modalContent }}>
        <Modal.ModalInput value={value} onChange={onChange} />
      </Modal.ModalContent>
      <Modal.ModalFooter>
        <ModalFooterContainer>
          <Modal.ModalButton onClick={onConfirm} color="secondary" style={{ ...MODAL_CUSTOM_STYLES.cancelButton }}>
            {cancelButtonText}
          </Modal.ModalButton>
          <Modal.ModalButton onClick={onToggle} color="primary" style={{ ...MODAL_CUSTOM_STYLES.confirmButton }}>
            {confirmButtonText}
          </Modal.ModalButton>
        </ModalFooterContainer>
      </Modal.ModalFooter>
    </Modal>
  );
};

export default PromptModal;

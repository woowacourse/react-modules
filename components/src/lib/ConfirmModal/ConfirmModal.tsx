import BaseModal from "../BaseModal/BaseModal";
import * as BaseStyles from "../styles/modal.styles";
import { ModalPropsType } from "../types/ModalPropsType";

interface ConfirmModalProps extends ModalPropsType {
  description: string;
  onConfirm?: () => void;
}

const ConfirmModal = ({
  isModalOpen,
  title,
  description,
  size = "small",
  onClose,
  onConfirm = onClose,
}: ConfirmModalProps) => {
  return (
    <BaseModal
      isModalOpen={isModalOpen}
      title={title}
      onClose={onClose}
      position="center"
      showCloseButton={false}
      size={size}
    >
      <p>{description}</p>
      <BaseStyles.ButtonContainer>
        <BaseStyles.CancelButton type="button" onClick={onClose}>
          취소
        </BaseStyles.CancelButton>
        <BaseStyles.ConfirmButton type="button" onClick={onConfirm}>
          확인
        </BaseStyles.ConfirmButton>
      </BaseStyles.ButtonContainer>
    </BaseModal>
  );
};

export default ConfirmModal;

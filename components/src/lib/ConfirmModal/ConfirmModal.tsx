import BaseModal from "../BaseModal/BaseModal";
import * as S from "./ConfirmModal.styles";
import { ModalPropsType } from "../types/ModalPropsType";

interface ConfirmModalProps extends ModalPropsType {
  description: string;
}

const ConfirmModal = ({
  isModalOpen,
  title,
  description,
  size = "small",
  onClose,
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
      <S.ButtonContainer>
        <S.CancelButton type="button" onClick={onClose}>
          취소
        </S.CancelButton>
        <S.ConfirmButton type="button" onClick={onClose}>
          확인
        </S.ConfirmButton>
      </S.ButtonContainer>
    </BaseModal>
  );
};

export default ConfirmModal;

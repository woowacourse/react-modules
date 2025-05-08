import BaseModal from "../BaseModal/BaseModal";
import * as S from "./ConfirmModal.styles";

interface ModalPropsType {
  isModalOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

const ConfirmModal = ({
  isModalOpen,
  title,
  description,
  onClose,
}: ModalPropsType) => {
  return (
    <BaseModal
      isModalOpen={isModalOpen}
      title={title}
      onClose={onClose}
      position="center"
      showCloseButton={false}
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

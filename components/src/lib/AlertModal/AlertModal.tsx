import BaseModal from "../BaseModal/BaseModal";
import * as S from "./AlertModal.styles";

interface ModalPropsType {
  isModalOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

const AlertModal = ({
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
      <S.ConfirmButton type="button" onClick={onClose}>
        확인
      </S.ConfirmButton>
    </BaseModal>
  );
};

export default AlertModal;

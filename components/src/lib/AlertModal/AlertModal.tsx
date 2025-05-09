import BaseModal from "../BaseModal/BaseModal";
import * as S from "./AlertModal.styles";

interface ModalPropsType {
  isModalOpen: boolean;
  title: string;
  description: string;
  size?: "small" | "medium" | "large";
  onClose: () => void;
}

const AlertModal = ({
  isModalOpen,
  title,
  description,
  onClose,
  size = "small",
}: ModalPropsType) => {
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
      <S.ConfirmButton type="button" onClick={onClose} autoFocus>
        확인
      </S.ConfirmButton>
    </BaseModal>
  );
};

export default AlertModal;

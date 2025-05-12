import BaseModal from "../BaseModal/BaseModal";
import * as S from "./AlertModal.styles";
import { ModalPropsType } from "../types/ModalPropsType";

interface AlertModalProps extends ModalPropsType {
  description: string;
}

const AlertModal = ({
  isModalOpen,
  title,
  description,
  onClose,
  size = "small",
}: AlertModalProps) => {
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
      <S.ConfirmButton type="button" onClick={onClose}>
        확인
      </S.ConfirmButton>
    </BaseModal>
  );
};

export default AlertModal;

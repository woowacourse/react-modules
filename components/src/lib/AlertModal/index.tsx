import useOutsideClickRef from "../../hooks/useOutsideClickRef";
import useKeyDown from "@/hooks/useKeyDown";
import BaseModal from "../BaseModal";
import type { ModalSizeType } from "../types";
import Button from "@/components/Button";
import * as S from "./AlertModal.styled";

interface AlertModalProps {
  title: string;
  alertText: string;
  onRequestClose: () => void;
  size?: ModalSizeType;
}

function AlertModal({
  title,
  alertText,
  onRequestClose,
  size,
}: AlertModalProps) {
  const modalRef = useOutsideClickRef<HTMLDivElement>(onRequestClose);
  useKeyDown({ keys: ["Escape"], callback: onRequestClose });

  return (
    <BaseModal
      title={title}
      modalRef={modalRef}
      size={size}
      hasCloseButton={false}
    >
      <S.Container>
        <S.AlertText>{alertText}</S.AlertText>
        <S.ButtonBox>
          <Button variant="primary" type="button" onClick={onRequestClose}>
            확인
          </Button>
        </S.ButtonBox>
      </S.Container>
    </BaseModal>
  );
}

export default AlertModal;

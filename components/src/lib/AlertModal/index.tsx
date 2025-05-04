import useOutsideClickRef from "../../hooks/useOutsideClickRef";
import useKeyDown from "@/hooks/useKeyDown";
import type { ModalSizeType } from "../types";
import Button from "@/components/Button";
import * as S from "./AlertModal.styled";
import ContentModal from "../ContentModal";

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
    <ContentModal
      title={title}
      size={size}
      hasCloseButton={false}
      modalRef={modalRef}
      content={<S.AlertText>{alertText}</S.AlertText>}
      buttonElements={[
        <Button variant="primary" type="button" onClick={onRequestClose}>
          확인
        </Button>,
      ]}
    />
  );
}

export default AlertModal;

import useOutsideClickRef from "../../hooks/useOutsideClickRef";
import useKeyDown from "@/hooks/useKeyDown";
import type { ModalSizeType } from "../types";
import Button from "@/components/Button";
import * as S from "./ConfirmModal.styled";
import ContentModal from "../ContentModal";

interface ConfirmModalProps {
  title: string;
  confirmText: string;
  size?: ModalSizeType;
  onRequestClose: () => void;
  onConfirm: () => void;
}

function ConfirmModal({
  title,
  confirmText,
  size,
  onRequestClose,
  onConfirm,
}: ConfirmModalProps) {
  const modalRef = useOutsideClickRef<HTMLDivElement>(onRequestClose);
  useKeyDown({ keys: ["Escape"], callback: onRequestClose });

  return (
    <ContentModal
      title={title}
      size={size}
      hasCloseButton={false}
      modalRef={modalRef}
      content={<S.ConfirmText>{confirmText}</S.ConfirmText>}
      buttonElements={[
        <Button
          key="secondary"
          variant="secondary"
          type="button"
          onClick={onRequestClose}
        >
          취소
        </Button>,
        <Button
          key="primary"
          variant="primary"
          type="button"
          onClick={onConfirm}
        >
          확인
        </Button>,
      ]}
    />
  );
}

export default ConfirmModal;

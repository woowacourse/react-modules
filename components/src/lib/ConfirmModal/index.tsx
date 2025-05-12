import useOutsideClickRef from "@hooks/useOutsideClickRef";
import useKeyDown from "@/hooks/useKeyDown";
import type { ModalDefaultProps } from "../../types";
import Button from "@/components/Button";
import * as S from "@/styles/Typography.styled";
import ContentModal from "../../components/ContentModal";

interface ConfirmModalProps extends ModalDefaultProps {
  confirmText: string;
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
      content={<S.ModalText>{confirmText}</S.ModalText>}
      buttonElements={[
        <Button
          autoFocus
          key="cancel"
          variant="secondary"
          type="button"
          onClick={onRequestClose}
        >
          취소
        </Button>,
        <Button
          key="confirm"
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

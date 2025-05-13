import type { ModalDefaultProps } from "../../types/modal";
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
  closeTrigger,
  hasCloseButton,
  onRequestClose,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <ContentModal
      title={title}
      size={size}
      onRequestClose={onRequestClose}
      closeTrigger={closeTrigger}
      hasCloseButton={hasCloseButton}
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

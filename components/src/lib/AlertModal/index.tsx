import type { ModalDefaultProps } from "../../types/modal";
import Button from "@/components/Button";
import * as S from "@/styles/Typography.styled";
import ContentModal from "../../components/ContentModal";

interface AlertModalProps extends ModalDefaultProps {
  alertText: string;
}

function AlertModal({
  title,
  alertText,
  hasCloseButton,
  closeTrigger,
  onRequestClose,
  size,
}: AlertModalProps) {
  return (
    <ContentModal
      title={title}
      size={size}
      hasCloseButton={hasCloseButton}
      closeTrigger={closeTrigger}
      onRequestClose={onRequestClose}
      content={<S.ModalText>{alertText}</S.ModalText>}
      buttonElements={[
        <Button
          key="confirm"
          autoFocus
          variant="primary"
          type="button"
          onClick={onRequestClose}
        >
          확인
        </Button>,
      ]}
    />
  );
}

export default AlertModal;

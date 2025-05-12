import useOutsideClickRef from "@hooks/useOutsideClickRef";
import useKeyDown from "@/hooks/useKeyDown";
import type { ModalDefaultProps } from "../../types";
import Button from "@/components/Button";
import * as S from "@/styles/Typography.styled";
import ContentModal from "../../components/ContentModal";

interface AlertModalProps extends ModalDefaultProps {
  alertText: string;
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
      ref={modalRef}
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

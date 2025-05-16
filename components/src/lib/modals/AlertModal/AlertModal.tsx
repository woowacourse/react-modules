import ConfirmButton from "../../buttons/ConfirmButton";
import Modal from "../../Modal";
import { ModalProps } from "../../types/Modal.types";

interface AlertModalProps extends Omit<ModalProps, "children"> {
  /** 모달 상단에 표시할 제목 */
  title?: React.ReactNode;

  /** 모달 본문에 표시할 내용 (필수) */
  content: React.ReactNode;

  /** 확인 버튼 클릭 시 호출되는 함수 (선택) */
  onConfirm?: () => void;

  /** 버튼 텍스트 (기본값: "확인") */
  label?: string;
}

const AlertModal = ({
  show,
  onHide,
  onConfirm,
  position = "center",
  size,
  title,
  content,
  background = true,
  label = "확인",
}: AlertModalProps) => {
  return (
    <Modal show={show} onHide={onHide} position={position} background={background} size={size}>
      {title != null && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer buttonAlign="right">
        <ConfirmButton onHide={onHide} onConfirm={onConfirm}>
          {label}
        </ConfirmButton>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;

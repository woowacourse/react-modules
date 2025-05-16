import CancelButton from "../../buttons/CancelButton";
import ConfirmButton from "../../buttons/ConfirmButton";
import Modal from "../../Modal";
import { ModalProps } from "../../types/Modal.types";

interface ConfirmModalProps extends Omit<ModalProps, "children"> {
  /** 모달 상단 제목 */
  title?: React.ReactNode;

  /** 모달 본문 내용 */
  content: React.ReactNode;

  /** 확인 버튼 클릭 핸들러 */
  onConfirm?: () => void;

  /** 확인 버튼 텍스트 */
  label?: string;
}

const ConfirmModal = ({
  show,
  onHide,
  onConfirm,
  position = "center",
  size,
  title,
  content,
  background = true,
  label = "확인",
}: ConfirmModalProps) => {
  return (
    <Modal show={show} onHide={onHide} size={size} position={position} background={background}>
      {title != null && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer buttonAlign="right">
        <CancelButton onClick={onHide} />
        <ConfirmButton onHide={onHide} onConfirm={onConfirm}>
          {label}
        </ConfirmButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;

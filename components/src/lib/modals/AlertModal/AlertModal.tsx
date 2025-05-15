import ConfirmButton from "../../buttons/ConfirmButton";
import Modal from "../../Modal";

export interface AlertModalProps {
  /** 모달을 보여줄지 여부 */
  show: boolean;

  /** 모달을 닫는 함수 (배경 클릭이나 X 버튼 클릭 시 호출) */
  onHide: () => void;

  onConfirm?: () => void;

  /** 배경 어두움 여부  */
  background?: boolean;

  /** 모달 위치 설정: 가운데(center), 상단(top), 하단(bottom) */
  position?: "center" | "top" | "bottom";

  /**모달의 넓이를 설정 */
  size?: "small" | "medium" | "large";

  /**
   * 모달 상단에 표시할 제목 (선택)
   * React 컴포넌트 또는 문자열 등 노드 형태로 전달 가능
   */
  title?: React.ReactNode;

  /**
   * 모달 본문에 표시할 내용 (필수)
   * 경고 메시지 등 사용자에게 전달할 핵심 내용을 표시
   */
  content: React.ReactNode;
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
}: AlertModalProps) => {
  return (
    <Modal show={show} onHide={onHide} position={position} background={background} size={size}>
      {title && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer buttonAlign="right">
        <ConfirmButton onHide={onHide} onConfirm={onConfirm} />
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;

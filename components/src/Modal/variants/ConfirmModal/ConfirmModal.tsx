import Modal from "../../Modal";

type ConfirmModalProps = {
  /** 확인 모달 제목 */
  title: string;
  /** 확인 모달 내용 */
  content?: string;
  /** 모달 열림/닫힘 상태 */
  isOpen: boolean;
  /** ESC 키 입력 시 자동으로 닫힘 여부 (기본값: true) */
  autoCloseOnESC?: boolean;
  /** 모달 위치 */
  position?: "center" | "bottom";
  /** 모달 크기 */
  size?: "small" | "medium" | "large";
  /** 모달 닫는 함수 */
  onClose: () => void;
  /** 왼쪽 버튼 클릭 시 동작 */
  onLeftButtonClick: () => void;
  /** 오른쪽 버튼 클릭 시 동작 */
  onRightButtonClick: () => void;
};

const ConfirmModal = ({
  isOpen,
  autoCloseOnESC,
  position,
  size,
  title,
  content,
  onClose,
  onLeftButtonClick,
  onRightButtonClick,
}: ConfirmModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      position={position}
      onClose={onClose}
      autoCloseOnESC={autoCloseOnESC}
      size={size}
    >
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.Title title={title} />
          <Modal.Body>
            {content}
            <Modal.ConfirmButton
              onLeftButtonClick={onLeftButtonClick}
              onRightButtonClick={onRightButtonClick}
              leftButtonTitle="취소"
              rightButtonTitle="확인"
            />
          </Modal.Body>
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ConfirmModal;

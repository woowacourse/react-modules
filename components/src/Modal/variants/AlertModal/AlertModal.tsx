import Modal from "../../Modal";

type AlertModalProps = {
  /** 확인 모달 제목 */
  title: string;
  /** 확인 모달 내용 */
  content?: string;
  /** 확인 모달 확인 버튼 클릭 시 동작 */
  onButtonClick?: () => void;
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
};

export const AlertModal = ({
  isOpen,
  autoCloseOnESC,
  position,
  size,
  title,
  content,
  onButtonClick,
  onClose,
}: AlertModalProps) => {
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Modal.Button
                variant="primary"
                title="확인"
                size="small"
                onClick={onButtonClick}
              />
            </div>
          </Modal.Body>
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  );
};

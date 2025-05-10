import Modal from "../../Modal";

type AlertModalProps = {
  /** 확인 모달 제목 */
  title: string;
  /** 확인 모달 내용 */
  content?: string;
  /** 확인 모달 확인 버튼 클릭 시 동작 */
  onButtonClick?: () => void;
};

const AlertModal = ({ title, content, onButtonClick }: AlertModalProps) => {
  return (
    <Modal isOpen={true} onClose={() => {}} autoCloseOnESC={true} size="large">
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

export default AlertModal;

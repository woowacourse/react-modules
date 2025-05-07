import Modal from "../../Modal";

type AlertModalProps = {
  /** 확인 모달 제목 */
  title: string;
  /** 확인 모달 내용 */
  content: string;
  /** 확인 버튼 위치 */
  buttonPosition?: "left" | "right" | "center";
};

const AlertModal = ({
  title,
  content,
  buttonPosition = "right",
}: AlertModalProps) => {
  return (
    <Modal isOpen={true} onClose={() => {}} autoCloseOnESC={true} size="large">
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.Title title={title} />
          <Modal.Body>{content}</Modal.Body>
          <Modal.Button
            variant="primary"
            title="확인"
            size="small"
            onClick={() => {
              console.log("확인 버튼 클릭!");
            }}
            position={buttonPosition}
          />
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AlertModal;

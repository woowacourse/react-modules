import Modal from "../../Modal";

type ConfirmModalProps = {
  /** 확인 모달 제목 */
  title: string;
  /** 확인 모달 내용 */
  content: string;
};

const ConfirmModal = ({ title, content }: ConfirmModalProps) => {
  return (
    <Modal isOpen={true} onClose={() => {}} autoCloseOnESC={true} size="large">
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.Title title={title} />
          <Modal.Body>
            {content}
            <Modal.ConfirmButton
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

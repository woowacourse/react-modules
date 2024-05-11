import Modal from '../../common/Modal';
import { BasicModal } from '../../types';

interface AlertModalProps extends BasicModal {
  onConfirmButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

function AlertModal({ ...rest }: AlertModalProps) {
  return (
    <Modal onCloseModal={rest.onModalClose}>
      <Modal.Header
        title={rest.title}
        isCloseIcon={rest.isCloseIcon}
        onCloseModal={rest.onModalClose}
      ></Modal.Header>
      <Modal.Content
        message={rest.message}
        $direction={rest.$contentDirection}
      />
      <Modal.Footer $direction={rest.$footerDirection} $align={rest.$algin}>
        <Modal.Button
          type="button"
          onButtonClick={rest.onConfirmButtonClick}
          $size={rest.$buttonSize}
          $backgroundColor={rest.$buttonBackgroundColor}
          $color={rest.$buttonColor}
        >
          확인
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertModal;

import Modal from '../../common/Modal';
import { BasicModal } from '../../types';

interface ConfirmModalProps extends BasicModal {
  onConfirmButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onCancelButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ConfirmModal({
  title,
  isCloseIcon,
  message,
  onModalClose,
  onCancelButtonClick,
  onConfirmButtonClick,
  $contentDirection,
  $footerDirection,
  $align,
  $buttonSize,
  $buttonBackgroundColor,
  $buttonColor,
}: ConfirmModalProps) {
  return (
    <Modal onCloseModal={onModalClose}>
      <Modal.Header
        title={title}
        isCloseIcon={isCloseIcon}
        onCloseModal={onModalClose}
      ></Modal.Header>
      <Modal.Content message={message} $direction={$contentDirection} />
      <Modal.Footer $direction={$footerDirection} $align={$align}>
        <Modal.Button
          type="button"
          onClick={onCancelButtonClick}
          $size={$buttonSize}
          $backgroundColor={$buttonBackgroundColor}
          $color={$buttonColor}
        >
          취소
        </Modal.Button>
        <Modal.Button
          type="button"
          onClick={onConfirmButtonClick}
          $size={$buttonSize}
        >
          확인
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;

import Modal from '../../common/Modal';
import { BasicModal } from '../../types';

interface AlertModalProps extends BasicModal {
  onConfirmButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

function AlertModal({
  title,
  isCloseIcon,
  basicDescription,
  onModalClose,
  onConfirmButtonClick,
  $contentDirection,
  $footerDirection,
  $align,
  $buttonSize,
  $buttonBackgroundColor,
  $buttonColor,
}: AlertModalProps) {
  return (
    <Modal onCloseModal={onModalClose}>
      <Modal.Header
        title={title}
        isCloseIcon={isCloseIcon}
        onCloseModal={onModalClose}
      ></Modal.Header>
      <Modal.Content
        basicDescription={basicDescription}
        $direction={$contentDirection}
      />
      <Modal.Footer $direction={$footerDirection} $align={$align}>
        <Modal.Button
          type="button"
          onClick={onConfirmButtonClick}
          $size={$buttonSize}
          $backgroundColor={$buttonBackgroundColor}
          $color={$buttonColor}
        >
          확인
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertModal;

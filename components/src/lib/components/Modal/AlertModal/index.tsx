import useModal from '../../../hooks/useModal';
import Modal from '../../common/Modal';
import { BasicModal } from '../../types';

interface AlertModalProps extends BasicModal {
  onConfirmButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onCancelButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

function AlertModal({ ...rest }: AlertModalProps) {
  const { isModalOpen, closeModal } = useModal();
  return (
    <>
      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          <Modal.Header
            title={rest.title}
            isCloseIcon={rest.isCloseIcon}
            onCloseModal={closeModal}
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
      )}
    </>
  );
}

export default AlertModal;

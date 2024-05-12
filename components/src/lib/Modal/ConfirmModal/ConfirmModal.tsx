import Modal, {
  ButtonJustifyContent,
  ModalPosition,
  ModalSize,
} from '../Modal';

import { ModalTextBody } from '../Modal.styled';

export interface ConfirmModalProps {
  isOpened: boolean;
  closeModal: () => void;
  handleConfirm?: () => void;
  title?: string;
  description?: string;
  content?: string;
  size?: ModalSize;
  modalPosition?: ModalPosition;
  buttonJustifyContent?: ButtonJustifyContent;
  primaryColor?: string;
}

const ConfirmModal = ({
  isOpened,
  closeModal,
  handleConfirm = () => {},
  title = '',
  description = '',
  content = '',
  size = 'large',
  children,
  modalPosition = 'center',
  buttonJustifyContent = 'right',
  primaryColor,
}: React.PropsWithChildren<ConfirmModalProps>) => {
  const handleClick = () => {
    handleConfirm();
    closeModal();
  };

  return (
    <Modal
      isOpened={isOpened}
      closeModal={closeModal}
      title={title}
      description={description}
      size={size}
      modalPosition={modalPosition}
      buttonJustifyContent={buttonJustifyContent}
      primaryColor={primaryColor}
      primaryButton={{
        text: '확인',
        width: 'fit',
        onClick: handleClick,
      }}
      secondaryButton={{
        text: '취소',
        width: 'fit',
        onClick: closeModal,
      }}
    >
      <ModalTextBody>{content}</ModalTextBody>
      {children}
    </Modal>
  );
};

export default ConfirmModal;

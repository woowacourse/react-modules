import Modal, {
  ButtonJustifyContent,
  ModalPosition,
  ModalSize,
} from '../Modal';

export interface ConfirmModalProps {
  isOpened: boolean;
  closeModal: () => void;
  handleConfirm?: () => void;
  title?: string;
  description?: string;
  size?: ModalSize;
  children?: JSX.Element;
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
  size = 'large',
  children,
  modalPosition = 'center',
  buttonJustifyContent = 'right',
  primaryColor,
}: ConfirmModalProps) => {
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
      {children}
    </Modal>
  );
};

export default ConfirmModal;

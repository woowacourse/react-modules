import Modal, {
  ButtonJustifyContent,
  ModalPosition,
  ModalSize,
} from '../Modal';

export interface AlertModalProps {
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

const AlertModal = ({
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
}: AlertModalProps) => {
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
        size: 'medium',
        onClick: handleClick,
      }}
    >
      {children}
    </Modal>
  );
};

export default AlertModal;

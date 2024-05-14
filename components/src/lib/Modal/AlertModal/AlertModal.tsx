import Modal, {
  ButtonJustifyContent,
  ModalPosition,
  ModalSize,
} from '../Modal';

import { ModalTextBody } from '../Modal.styled';

export interface AlertModalProps {
  isOpened: boolean;
  closeModal: () => void;
  handleConfirm?: () => void;
  title?: string;
  description?: string;
  content?: string;

  /**
   * @defaultValue 'large'
   */
  size?: ModalSize;

  /**
   * @defaultValue 'center'
   */
  modalPosition?: ModalPosition;

  /**
   * @defaultValue 'right'
   */
  buttonJustifyContent?: ButtonJustifyContent;
  primaryColor?: string;
}

const AlertModal = ({
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
}: React.PropsWithChildren<AlertModalProps>) => {
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
      {content && <ModalTextBody>{content}</ModalTextBody>}
      {children}
    </Modal>
  );
};

export default AlertModal;

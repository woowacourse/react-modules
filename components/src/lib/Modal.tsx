import styles from './Modal.module.css';
import { CancelButtonProps, CloseButtonProps, ConfirmButtonProps, SubtitleProps, TitleProps } from './interfaces';
import CancelButton from './CancelButton';
import ConfirmButton from './ConfirmButton';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';

interface ModalProps {
  title?: TitleProps;
  subtitle?: SubtitleProps;
  closeButton: CloseButtonProps;
  confirmButton?: ConfirmButtonProps;
  cancelButton?: CancelButtonProps;
  backgroundColor?: string;
  borderRadius?: string;
  modalPosition: 'center' | 'bottom';
  preventCloseOnOutsideClick?: boolean;
  buttonsDirection?: 'row' | 'column';
  children: React.ReactNode;
}

const Modal = ({
  title,
  subtitle,
  closeButton,
  confirmButton,
  cancelButton,
  backgroundColor,
  borderRadius,
  modalPosition,
  preventCloseOnOutsideClick,
  buttonsDirection,
  children,
}: ModalProps) => {
  return (
    <>
      <div onClick={preventCloseOnOutsideClick ? () => {} : closeButton.onClose} className={styles['backdrop']} />
      <div
        style={{
          backgroundColor: `${backgroundColor || 'white'}`,
          borderRadius: `${borderRadius || '5px'}`,
        }}
        className={styles[`container-${modalPosition}`]}
      >
        <ModalHeader title={title} subtitle={subtitle} closeButton={closeButton} />
        <ModalContent children={children} />
        <div
          style={{ display: 'flex', flexDirection: `${buttonsDirection || 'row'}` }}
          className={styles['button-container']}
        >
          {cancelButton && <CancelButton {...cancelButton} />}
          {confirmButton && <ConfirmButton {...confirmButton} />}
        </div>
      </div>
    </>
  );
};

export default Modal;

import styles from './Modal.module.css';
import {
  CancelButtonProps,
  CloseButtonProps,
  ConfirmButtonProps,
  ModalSizeProps,
  SubtitleProps,
  TitleProps,
} from './interfaces';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

interface ModalProps {
  title?: TitleProps;
  subtitle?: SubtitleProps;
  closeButton: CloseButtonProps;
  confirmButton?: ConfirmButtonProps;
  cancelButton?: CancelButtonProps;
  modalSize?: ModalSizeProps;
  backgroundColor?: string;
  borderRadius?: string;
  buttonsDirection?: 'row' | 'column';
  modalPosition: 'center' | 'bottom';
  preventCloseOnOutsideClick?: boolean;
  children: React.ReactNode;
}

const Modal = ({
  title,
  subtitle,
  closeButton,
  confirmButton,
  cancelButton,
  modalSize,
  backgroundColor,
  borderRadius,
  buttonsDirection,
  modalPosition,
  preventCloseOnOutsideClick,
  children,
}: ModalProps) => {
  return (
    <>
      <div onClick={preventCloseOnOutsideClick ? () => {} : closeButton.onClose} className={styles['backdrop']} />
      <section
        style={{
          backgroundColor: `${backgroundColor || 'white'}`,
          borderRadius: `${borderRadius || '5px'}`,
          width: `${(modalSize && modalSize.width) || (modalPosition === 'center' ? '80%' : '100%')}`,
          height: `${(modalSize && modalSize.height) || 'fit-content'}`,
          minWidth: `${modalSize && modalSize.minWidth}`,
          minHeight: `${modalSize && modalSize.minHeight}`,
        }}
        className={styles[`container-${modalPosition}`]}
      >
        <ModalHeader title={title} subtitle={subtitle} closeButton={closeButton} />
        <ModalContent children={children} />
        <ModalFooter cancelButton={cancelButton} confirmButton={confirmButton} buttonsDirection={buttonsDirection} />
      </section>
    </>
  );
};

export default Modal;

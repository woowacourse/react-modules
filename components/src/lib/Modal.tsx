import { useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import ModalHeader from './components/header/ModalHeader';
import ModalFooter from './components/footer/ModalFooter';
import useModalCloseClickDimmer from './hooks/useModalCloseClickDimmer';

type ModalType = 'dialog' | 'drawer';
type ButtonPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface ModalStyle {
  dimmed?: React.CSSProperties;
  modal?: React.CSSProperties;
  modalHeader?: React.CSSProperties;
  modalTitle?: React.CSSProperties;
  closeButton?: React.CSSProperties;
  confirmButton?: React.CSSProperties;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  type: ModalType;
  content?: React.ReactNode;
  style?: ModalStyle;
  customCloseButton?: React.ReactNode;
  customConfirmButton?: React.ReactNode;
  closeButtonText?: string;
  confirmButtonText?: string;
  hideConfirmButton?: boolean;
  hideCloseButton?: boolean;
  buttonPosition?: ButtonPosition;
  closeOnOutsideClick?: boolean;
  customCloseIcon?: string;
  hideCloseIcon?: boolean;
}

const MODAL_TYPE: Record<ModalType, string> = {
  dialog: styles.dialog,
  drawer: styles.drawer,
};

const Modal = ({
  open,
  onClose,
  title,
  type,
  content,
  style,
  customCloseButton,
  customConfirmButton,
  closeButtonText,
  confirmButtonText,
  hideCloseButton,
  hideConfirmButton,
  buttonPosition,
  closeOnOutsideClick = true,
  customCloseIcon,
  hideCloseIcon = false,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalCloseClickDimmer(modalRef, onClose, closeOnOutsideClick);

  const modalHeaderOptions = {
    customCloseIcon,
    hideCloseIcon,
    modalHeader: style?.modalHeader,
    modalTitle: style?.modalTitle,
  };

  const modalFooterOptions = {
    buttonPosition,
    customCloseButton,
    customConfirmButton,
    closeButtonText,
    hideCloseButton,
    hideConfirmButton,
    confirmButtonText,
    closeButtonStyle: style?.closeButton,
    confirmButtonStyle: style?.confirmButton,
  };

  return (
    <>
      {open &&
        createPortal(
          <div className={styles.dimmed} style={style?.dimmed}>
            <section className={MODAL_TYPE[type]} ref={modalRef} style={style?.modal}>
              <ModalHeader title={title} onClose={onClose} {...modalHeaderOptions} />
              {content && <section>{content}</section>}
              <ModalFooter {...modalFooterOptions} />
            </section>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Modal;

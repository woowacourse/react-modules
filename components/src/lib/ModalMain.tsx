import styles from './Modal.module.css';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import useAnimation from './useAnimation';
import ModalDimmed from './modalDimmed/ModalDimmed';
import ModalHeader from './modalHeader/ModalHeader';
import ModalTitle from './modalTitle/ModalTitle';
import ModalCloseIcon from './modalCloseIcon/ModalCloseIcon';
import ModalContent from './modalContent/ModalContent';
import CloseButton from './closeButton/CloseButton';
import ConfirmButton from './confirmButton/ConfirmButton';
import ModalFooter from './modalFooter/ModalFooter';

const MODAL_WRAPPER_TYPE: Record<ModalPosition, string> = {
  center: styles.modalWrapper,
  bottom: styles.modalBottomWrapper,
};

const MODAL_TYPE: Record<ModalPosition, string> = {
  center: styles.modal,
  bottom: styles.modalBottom,
};

type ModalPosition = 'center' | 'bottom';

interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  position?: ModalPosition;
  isAnimation?: boolean;
  duration?: number;
}

const ModalMain = ({
  isOpen,
  position = 'center',
  isAnimation = false,
  duration,
  style,
  children,
  ...rest
}: PropsWithChildren<ModalMainProps>) => {
  const { mounted, modalAnimationClass } = useAnimation({
    isAnimation,
    isOpen,
    position,
    delay: duration,
  });

  const modalClass = isAnimation ? modalAnimationClass : MODAL_TYPE[position];

  if (!mounted) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className={MODAL_WRAPPER_TYPE[position]}>
          <div
            className={modalClass}
            style={{ animationDuration: `${duration}ms`, ...style }}
            {...rest}
          >
            {children}
          </div>
        </div>,

        document.body,
      )}
    </>
  );
};

const Modal = Object.assign(ModalMain, {
  Dimmed: ModalDimmed,
  Header: ModalHeader,
  Title: ModalTitle,
  CloseIcon: ModalCloseIcon,
  Content: ModalContent,
  CloseButton: CloseButton,
  ConfirmButton: ConfirmButton,
  Footer: ModalFooter,
});

export default Modal;
